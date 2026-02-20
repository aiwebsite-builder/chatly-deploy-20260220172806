import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

type Page = 'home' | 'about' | 'services' | 'contact';

interface HeaderProps {
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
}

export default function Header({ setCurrentPage, currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on nav
    document.getElementById('top-of-page')?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <header id="top-of-page" className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <Rocket className="mr-2 text-purple-400" size={28} />
          MySite
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.button
                onClick={() => handleNavClick(item.page as Page)}
                className={`relative text-lg font-medium transition-colors duration-300 hover:text-purple-400 
                  ${currentPage === item.page ? 'text-purple-400' : 'text-gray-200'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {currentPage === item.page && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-purple-500 bottom-0.5"
                  />
                )}
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-200 focus:outline-none">
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm py-4 px-4 border-t border-gray-700"
        >
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.page as Page)}
                  className={`block w-full text-left text-lg py-2 px-3 rounded-md transition-colors duration-300 
                    ${currentPage === item.page ? 'bg-purple-600 text-white' : 'text-gray-200 hover:bg-gray-700'}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
