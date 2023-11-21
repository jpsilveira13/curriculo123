import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  margin-top: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillItem = styled.li`
  background-color: #61dafb;
  color: #fff;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3d1;
  }
`;

const Skills = ({ data }) => {
  return (
    <SkillsContainer>
      <SkillList>
        {data?.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillList>
    </SkillsContainer>
  );
};

export default Skills;
