import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const socialIcons = [FaFacebook, FaTwitter, FaInstagram, FaGithub];

  return (
    <footer className="bg-[#0A0A0A] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 animate-fadeIn">
        {/* Brand Name */}
        <div className="flex justify-center mb-10">
          <span className="text-2xl font-bold text-amber-400 tracking-wider">
            ROBERT GARCIA
          </span>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Help Center", "Privacy Policy", "Terms of Service"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-amber-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@example.com"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  support@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-amber-400 transition-colors duration-300"
                >
                  +880 1234 567 890
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              {socialIcons.map((Icon, i) => (
                <Icon
                  key={i}
                  size={28}
                  className="rounded-full p-2 bg-amber-400 text-black shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 Robert Garcia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
