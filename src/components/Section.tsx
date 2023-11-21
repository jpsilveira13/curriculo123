import React from "react";
import styled from "styled-components";
import SocialIcons from "../components/SocialIcons";
import Skills from "../components/Skills";

const SectionContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 20px auto; /* Centraliza o conteúdo e adiciona margem na parte superior */
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
`;

const Section = ({ data }) => {
  return (
    <SectionContainer>
      <SectionTitle>Redes Sociais</SectionTitle>
      <SocialIcons data={data?.socialMedia} />

      <SectionTitle>Habilidades</SectionTitle>
      <Skills data={data?.skills} />

      {/* <SectionTitle>Projetos</SectionTitle>
      <Projects data={data?.projects} />

      <SectionTitle>Contatos</SectionTitle>
      <ContactLinks data={data?.contactLinks} /> */}
    </SectionContainer>
  );
};

export default Section;
