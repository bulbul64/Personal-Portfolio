// src/layout/Hero.tsx
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center p-5 md:p-10 gap-8 bg-[#0A0A0A] border-b border-white/20">
      <div className="text-white w-full md:w-1/2 flex flex-col justify-center gap-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-snug">
          HI, I AM <br />
          <span className="text-amber-400">GARCIA.</span>
        </h1>
        <p className="text-gray-300 max-w-md">
          Sydney based front-end developer passionate about building accessible
          and user-friendly websites.
        </p>
        <div className="flex items-center gap-4">
          <Button className="bg-[#D3E97A] text-black px-5 py-2 rounded-2xl shadow-md hover:bg-amber-400 hover:scale-105 transition-all">
            Contact me
          </Button>
          <div className="flex items-center gap-2">
            <FaLinkedin
              size={35}
              className="bg-[#D3E97A] text-black rounded-2xl p-2 shadow-lg hover:bg-amber-400 hover:scale-110 transition-all cursor-pointer"
            />
            <FaGithub
              size={35}
              className="bg-[#D3E97A] text-black rounded-2xl p-2 shadow-lg hover:bg-amber-400 hover:scale-110 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/HeroPhoto.png"
          alt="Hero"
          className="w-full max-w-md rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
