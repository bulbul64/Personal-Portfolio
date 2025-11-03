import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../components/ui/button';

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center p-6 sm:px-25 gap-8 max-w-6xl mx-auto 
             bg-white dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-white/10 
             transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Left Column */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-3 
             text-gray-800 dark:text-white transition-colors duration-500
             items-center md:items-start text-center md:text-left"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          HI, I AM <br />
          <span className="text-amber-500 dark:text-amber-400">BULBUL.</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-base max-w-md">
          Sydney based front-end developer building accessible and user-friendly websites.
        </p>

        {/* Buttons & Social Icons */}
        <div className="flex flex-wrap items-center gap-3 mt-3 justify-center md:justify-start">
          <Button className="bg-amber-500 dark:bg-[#D3E97A] text-white dark:text-black px-5 py-2 rounded-lg shadow hover:scale-105 hover:brightness-110 transition-all duration-300 text-sm">
            Contact me
          </Button>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin
                size={24}
                className="bg-amber-500 dark:bg-[#D3E97A] text-white dark:text-black rounded-lg p-1 shadow hover:scale-110 hover:brightness-110 transition-transform duration-300 cursor-pointer"
              />
              <span className="sr-only">LinkedIn Profile</span>
            </a>

            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub
                size={24}
                className="bg-amber-500 dark:bg-[#D3E97A] text-white dark:text-black rounded-lg p-1 shadow hover:scale-110 hover:brightness-110 transition-transform duration-300 cursor-pointer"
              />
              <span className="sr-only">GitHub Profile</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Hero Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="/img.jpg"
          alt="Hero"
          className="w-full max-w-[220px] sm:max-w-xs md:max-w-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-out bg-gray-100 dark:bg-[#111] object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
