import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-4 text-center border-t border-gray-800 text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <span className="text-sm">Made with</span>
          <Heart className="text-pink-500 animate-pulse" size={18} />
          <span className="text-sm">by Your Team</span>
        </div>
      </div>
    </footer>
  );
}
