"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard"; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetAllProjectsQuery } from "@/redux/api/project.api";
import Loader from "../../Loader";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery(undefined);

  if (isLoading) return <Loader />;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-12 lg:px-28 py-20 sm:px-6 lg:py-24 mx-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#030a1c] to-[#05174e]">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
          Best Projects
        </h2>
        <hr className="text-white border-b-2 mt-2 w-16 mx-auto"></hr>
      </div>
      <Slider {...settings}>
        {data?.data?.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
