import About from '../components/about/About';
import ProjectsSection from '../components/projects/ProjectsItem';
import Hero from '../layout/Hero';
import Connect from './contactPage';
import SkillsSection from './SkillsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <About />
      <Connect />
    </>
  );
}
