"use client";
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

export default function ProjectGallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <div className="flex flex-col w-full relative">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              project={project}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal projects={projects} modal={modal} />
    </>
  );
}
const projects = [
  {
    name: "Estrakt",
    src: "estrakt.webp",
    link: "https://estrakt.com",
    color: "#000000",
    tech: "Hostinger & Wordpress",
    type: "Full Stack",
  },
  {
    name: "YoutubeDB",
    src: "youtubedb.webp",
    link: "https://github.com/M-Ali-Haider/YoutubeDB",
    color: "#8c8c8c",
    tech: "MERN",
    type: "Full Stack",
  },
  {
    name: "Gpt",
    src: "gpt.webp",
    link: "https://m-ali-haider.github.io/gpt/",
    color: "#EFE8D3",
    tech: "ViteJS React",
    type: "Frontend",
  },
  {
    name: "SQLify",
    src: "sqlify.webp",
    link: "https://www.linkedin.com/posts/mah01134212100_made-a-spotify-replica-for-my-4th-semester-activity-7107661297105666048-hO1Z?utm_source=share&utm_medium=member_desktop",
    color: "#706D63",
    tech: "Xampp & PHP",
    type: "Full Stack",
  },
  {
    name: "AASC",
    src: "aasc.webp",
    link: "https://aasc.pk",
    color: "#005a7e",
    tech: "Vanilla JS",
    type: "Static Site",
  },
];
