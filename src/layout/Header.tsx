import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/theme-provider';
import { Button } from '../components/ui/button';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/ProjectsPage', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/skillsSection', label: 'Skills' },
  { href: '/contactPage', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/60 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-14">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-400 tracking-wide hover:opacity-90 transition"
        >
          SHAFIULLA BULBUL
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-gray-800 dark:text-gray-200 text-sm hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* Desktop Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 relative"
          >
            <Sun
              className={`h-4 w-4 text-amber-500 transition-all duration-500 ${
                theme === 'dark' ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'
              }`}
            />
            <Moon
              className={`absolute h-4 w-4 text-amber-400 transition-all duration-500 ${
                theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-gray-100 text-2xl z-50 focus:outline-none"
          >
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -300, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden fixed top-14 left-0 w-full z-40 flex flex-col gap-3 px-6 py-4
             bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"
      >
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className="text-gray-900 dark:text-gray-100 text-sm py-1.5 border-b border-transparent hover:border-amber-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-200"
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile Theme Toggle */}
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 relative"
          >
            <Sun
              className={`h-5 w-5 text-amber-500 transition-all duration-500 ${
                theme === 'dark' ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'
              }`}
            />
            <Moon
              className={`absolute h-5 w-5 text-amber-400 transition-all duration-500 ${
                theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </motion.div>
    </header>
  );
}
