import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Header from "@/components/Header";
import projects from "@/data/projects";
import Footer from "@/components/Footer";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative w-full aspect-[9/16] max-w-[200px] mx-auto overflow-hidden rounded-lg transition-transform duration-300 hover:scale-150">
              <Image
                src={project.imageUrl || "/placeholder.png"}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>

            {project.additionalImages &&
              project.additionalImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-[9/16] max-w-[200px] mx-auto overflow-hidden rounded-lg transition-transform duration-300 hover:scale-150"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
        <p className="text-lg mb-6">{project.description}</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Tecnologias utilizadas:
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            <FaGithub className="mr-2" />
            Ver no GitHub
          </a>
          <Link href="/" className="text-blue-500 hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
