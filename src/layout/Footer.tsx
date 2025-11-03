import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [FaFacebook, FaTwitter, FaInstagram, FaGithub];

  return (
    <footer className="bg-white dark:bg-[#0A0A0A] text-gray-700 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-4">
        {/* Brand */}
        <h2 className="text-lg sm:text-xl font-semibold text-amber-500 dark:text-amber-400">
          ROBERT GARCIA
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <a
            href="mailto:support@example.com"
            className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            support@example.com
          </a>
          <span>|</span>
          <a
            href="tel:+8801234567890"
            className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
          >
            +880 1234 567 890
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 mt-2">
          {socialIcons.map((Icon, i) => (
            <Icon
              key={i}
              size={20}
              className="bg-amber-500 dark:bg-amber-400 text-white dark:text-black p-1 rounded-full hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          © 2025 Robert Garcia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
