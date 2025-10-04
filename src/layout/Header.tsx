import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/ProjectsPage", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/skillsSection", label: "Skills" },
  { href: "/connect", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { setTheme } = useTheme();

  return (
    <header className="px-4 bg-[#0A0A0A] py-3 font-inter sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          ROBERT GARCIA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white hover:text-amber-400 font-medium cursor-pointer"
            >
              {link.label}
            </Link>
          ))}

          {/* Theme Toggle */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Mobile Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#0A0A0A] z-40 p-4 flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-400 font-medium cursor-pointer text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
