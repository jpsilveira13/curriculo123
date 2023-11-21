import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #000;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const SocialIcons = ({ data }) => {
  return (
    <SocialMediaContainer>
      {data?.map((social) => (
        <SocialLink
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {getSocialIcon(social.icon)}
        </SocialLink>
      ))}
    </SocialMediaContainer>
  );
};

const getSocialIcon = (iconName) => {
  switch (iconName) {
    case "FaLinkedin":
      return <FaLinkedin />;
    case "FaGithub":
      return <FaGithub />;
    // Adicione mais casos conforme necessário
    default:
      return null;
  }
};

export default SocialIcons;
