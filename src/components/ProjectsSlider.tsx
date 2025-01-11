"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";
import "@/styles/globals.css";

interface ProjectsSliderProps {
  projects: Project[];
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.init();
    }
  }, []);

  return (
    <section id="projects" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-5 text-center text-gray-900">
          Meus Projetos
        </h2>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper"
          style={{ opacity: 0 }}
          onAfterInit={() => {
            if (swiperRef.current) {
              swiperRef.current.style.opacity = 1;
            }
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
