import React from "react";
import { Section } from "@/components/Section";
import { ProjectItem } from "@/components/ProjectItem";
import { Container } from "@/components/Container";

export const Projects = () => {
  const projects = [
    {
      name: "Helpet",
      description:
        "Ayuda a encontrar mascotas perdidas alrededor de tu ciudad! :)",
      imgUrl: "images/helpet-screen.jpg",
      link: "",
      collaborators: [
        {
          fullName: "Angel Rodriguez Romero",
          avatar: "https://avatars0.githubusercontent.com/u/8053607?v=4",
          link: "https://github.com/AngelRodRo",
        },
      ],
    },
  ];

  return (
    <Section
      title="Nuestros proyectos"
      description="Cada proyecto tiene un fin social sin fines de lucro"
    >
      <Container>
        <div className="flex">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
