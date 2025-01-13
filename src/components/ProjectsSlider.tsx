"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/Project";

interface ProjectsSliderProps {
  projects: Project[];
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Meus Projetos
        </h2>
        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  project={project}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
