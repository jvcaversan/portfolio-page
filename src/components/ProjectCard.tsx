import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export default function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <div
      className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg"
      style={{
        width: "100%",
        height: "450px",
      }}
    >
      <div className="relative h-72 bg-gray-50 flex items-center justify-center overflow-hidden">
        <div
          className="relative w-full h-full"
          style={{
            height: "125%",
            width: "125%",
          }}
        >
          <Image
            src={project.imageUrl || "/placeholder.png"}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="p-2"
          />
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-1 text-center">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        <Link href={`/projetos/${project.id}`} passHref>
          <div className="mt-auto px-4 py-2 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-sm">
            Ver Mais
          </div>
        </Link>
      </div>
    </div>
  );
}
