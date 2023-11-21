import React from "react";
import styled from "styled-components";

const ContactLinksContainer = styled.div`
  margin-top: 20px;
`;

const ContactLinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ContactLinkItem = styled.li`
  margin-bottom: 10px;
`;

const ContactLink = styled.a`
  display: inline-block;
  padding: 8px 12px;
  background-color: #61dafb;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3d1;
  }
`;

const ContactLinks = ({ data }) => {
  return (
    <ContactLinksContainer>
      <ContactLinkList>
        {data?.map((contactLink) => (
          <ContactLinkItem key={contactLink.text}>
            <ContactLink
              href={contactLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactLink.text}
            </ContactLink>
          </ContactLinkItem>
        ))}
      </ContactLinkList>
    </ContactLinksContainer>
  );
};

export default ContactLinks;
