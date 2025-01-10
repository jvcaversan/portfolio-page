import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isActive ? "scale-110" : "scale-90 opacity-75"
      }`}
    >
      {project.imageUrl && (
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ver no GitHub
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
