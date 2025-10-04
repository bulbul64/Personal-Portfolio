import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import About from "@/components/about/about";
import SkillsSection from "@/pages/SkillsSection";
import ProjectsPage from "@/pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage }, // হোম
      { path: "about", Component: About }, // About
      { path: "skillsSection", Component: SkillsSection }, // Skills
      { path: "projectsPage", Component: ProjectsPage }, // ProjectsPage
    ],
  },
]);

export default router;
