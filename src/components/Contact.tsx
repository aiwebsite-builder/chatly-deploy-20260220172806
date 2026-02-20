import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-950 text-gray-100 min-h-[calc(100vh-80px-80px)] flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 flex flex-col justify-between"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-purple-400" size={24} />
                <span>contact@mysite.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-pink-400" size={24} />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <MapPin className="text-purple-400" size={24} />
                <span>123 Dev Street, Web City, 98765</span>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon size={30} />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (UI only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold 
                           bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-md 
                           shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
