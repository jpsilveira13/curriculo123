import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  background-color: #282c34;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.strong`
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
  color: #61dafb;
`;

const ProjectDescription = styled.p`
  margin-bottom: 10px;
  color: #fff;
`;

const ProjectLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #4fa3d1;
  }
`;

const Projects = ({ data }) => {
  return (
    <ProjectsContainer>
      <ProjectList>
        {data?.map((project) => (
          <ProjectItem key={project.title}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </ProjectLink>
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
