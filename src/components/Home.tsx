import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-90 z-0"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-purple-600 drop-shadow-lg"
        >
          Elevate Your Digital Presence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto"
        >
          Crafting stunning, high-performance web experiences that drive results and captivate audiences.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold 
                     bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full 
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
        >
          Get Started
          <ChevronRight className="ml-2" size={20} />
        </motion.button>
      </div>
    </section>
  );
}
