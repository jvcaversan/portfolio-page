"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";

interface ProjectsSliderProps {
  projects: Project[];
}

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ projects }) => {
  const swiperRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">Carregando...</div>
    );
  }

  return (
    <div className="py-12 px-8 overflow-visible">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        navigation
        initialSlide={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id} style={{ width: "80%" }}>
            <ProjectCard
              project={project}
              isActive={index === swiperRef.current?.swiper.realIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsSlider;
