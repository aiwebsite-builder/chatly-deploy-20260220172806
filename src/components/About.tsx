import { motion } from 'framer-motion';
import { Lightbulb, Gem, Code } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 bg-gray-950 text-gray-100 min-h-[calc(100vh-80px-80px)] flex items-center justify-center">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-16"
        >
          We are a passionate team dedicated to building exceptional web experiences. With a focus on modern design, robust functionality, and seamless user interaction, we transform ideas into impactful digital solutions.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-12 mt-12"
        >
          <motion.div variants={itemVariants} className="text-center bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 transition-transform duration-300 hover:scale-105 hover:border-purple-600">
            <Lightbulb className="mx-auto mb-6 text-purple-400" size={50} />
            <h3 className="text-2xl font-semibold mb-4 text-white">Innovative Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              We constantly explore new technologies and creative approaches to deliver cutting-edge solutions that stand out.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 transition-transform duration-300 hover:scale-105 hover:border-pink-600">
            <Gem className="mx-auto mb-6 text-pink-400" size={50} />
            <h3 className="text-2xl font-semibold mb-4 text-white">Quality Craftsmanship</h3>
            <p className="text-gray-400 leading-relaxed">
              Every project is handled with meticulous attention to detail, ensuring high quality and a flawless user experience.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 transition-transform duration-300 hover:scale-105 hover:border-purple-600">
            <Code className="mx-auto mb-6 text-purple-400" size={50} />
            <h3 className="text-2xl font-semibold mb-4 text-white">Modern Technologies</h3>
            <p className="text-gray-400 leading-relaxed">
              Utilizing the latest frameworks and tools like React and Tailwind CSS for efficient and scalable development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
