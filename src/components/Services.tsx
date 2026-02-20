import { motion } from 'framer-motion';
import { Laptop, Code, Cloud, Search } from 'lucide-react';

export default function Services() {
  const serviceCards = [
    {
      icon: Laptop,
      title: 'Web Design',
      description: 'Stunning and responsive interfaces tailored to your brand, ensuring an exceptional user experience on all devices.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Robust and scalable web applications built with modern technologies like React, delivering high performance.',
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services to enhance scalability, reliability, and security of your applications.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic with our expert SEO strategies and implementation.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 bg-gray-950 text-gray-100 min-h-[calc(100vh-80px-80px)] flex items-center justify-center">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500"
        >
          Our Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {serviceCards.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800 flex flex-col items-center text-center 
                         hover:shadow-purple-700/30 transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-600"
            >
              <service.icon className="text-purple-400 mb-6" size={50} />
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
