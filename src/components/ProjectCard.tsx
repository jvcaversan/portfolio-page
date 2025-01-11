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
    <Link href={`/projetos/${project.id}`} passHref>
      <div
        className={`bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 ${
          isActive ? "scale-105 z-10 shadow-lg" : "scale-95 opacity-80"
        }`}
        style={{
          width: "300px",
          height: "450px",
        }}
      >
        <div className="relative h-72 bg-gray-50 flex items-center justify-center overflow-hidden">
          <div className="relative w-[129%] h-[129%]">
            <Image
              src={project.imageUrl || "/placeholder.png"}
              alt={project.title}
              layout="fill"
              objectFit="contain"
              className="p-2"
            />
          </div>
        </div>

        <div className="p-3 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-1 text-center">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
