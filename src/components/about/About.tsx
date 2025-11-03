import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative max-w-5xl mx-auto py-16 px-6 sm:px-8 flex flex-col md:flex-row gap-8"
    >
      {/* Left Column */}
      <motion.div
        className="md:w-1/2 flex flex-col gap-3"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-amber-400 relative">
          About Me
          <motion.span
            className="absolute left-0 -bottom-1 h-1 rounded-full
                       bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          />
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          Creative Front-end Developer & UI enthusiast building user-friendly interfaces.
        </p>
      </motion.div>

      {/* Right Column with Gradient Background & Motion */}
      <motion.div
        className="md:w-1/2 flex flex-col gap-3
                   text-gray-700 dark:text-gray-300
                   bg-gradient-to-br from-white/5 via-amber-400/10 to-white/5
                   dark:from-gray-900/40 dark:via-amber-400/20 dark:to-gray-900/40
                   backdrop-blur-md p-5 rounded-xl shadow-md dark:shadow-gray-800
                   transition-all duration-300 hover:shadow-amber-400/50"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-sm sm:text-base leading-relaxed"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Front-end developer based in Sydney with a background in Mechanical Engineering.
        </motion.p>
        <motion.p
          className="text-sm sm:text-base leading-relaxed"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Exploring React, Webflow, and UI Design. Outside programming, enjoys football,
          photography, and gaming.
        </motion.p>
        <motion.a
          href="#"
          className="mt-2 text-amber-400 hover:text-amber-300 underline text-sm sm:text-base transition-colors duration-300"
          initial={{ y: 5, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          More About Me
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
