import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import ProjectsSlider from "@/components/ProjectsSlider";
import Skills from "@/components/Skills";

import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        <AboutMe />
        <ProjectsSlider projects={projects} />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
