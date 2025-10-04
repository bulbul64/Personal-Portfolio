import Hero from "@/layout/Hero";
import Skills from "@/components/skills/Skills";
import ProjectsItem from "@/components/projects/ProjectsItem";
import About from "@/components/about/about";
import Connect from "@/components/form/Connect";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsItem />
      <About />
      <Connect />
    </>
  );
}
