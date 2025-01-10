import Header from "@/components/Header";
import ProjectsSlider from "@/components/ProjectsSlider";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
        <ProjectsSlider projects={projects} />{" "}
      </main>
    </div>
  );
}
