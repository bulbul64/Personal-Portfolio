export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-start p-10 gap-10 mb-40"
    >
      {/* Left Column: Header */}
      <div className="md:w-1/2">
        <h4 className="text-5xl font-bold mb-3 text-amber-400">ABOUT ME</h4>
        <div className="w-20 h-1 bg-amber-400 rounded mb-6"></div>{" "}
        {/* subtle underline */}
      </div>

      {/* Right Column: Content */}
      <div className="md:w-1/2 text-gray-300 space-y-4">
        <h6 className="text-2xl font-semibold">
          Front-end developer based in Sydney. Background in Mechanical
          Engineering.
        </h6>
        <p>
          Passionate about accessibility, problem-solving, and building
          user-friendly interfaces. Currently exploring React, Webflow, and UI
          Design. Outside programming, I enjoy football, photography, and
          gaming.
        </p>
        <a
          href="#"
          className="inline-block mt-2 text-amber-400 underline hover:text-amber-300 transition"
        >
          More About Me
        </a>
      </div>
    </section>
  );
}
