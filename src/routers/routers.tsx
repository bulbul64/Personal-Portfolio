import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';

import SkillsSection from '../pages/SkillsSection';
import ProjectsSection from '../pages/ProjectsPage';
import Contact from '../components/form/Contact';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage }, // হোম
      { path: 'about', Component: About }, // About
      { path: 'skillsSection', Component: SkillsSection }, // Skills
      { path: 'projectsPage', Component: ProjectsSection }, // ProjectsPage
      { path: 'contactPage', Component: Contact }, // ProjectsPage
    ],
  },
]);

export default router;
