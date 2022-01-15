import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="phone #:617-459-5248">617-459-5248</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="email:daviewave@gmail.com">
            daviewave@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Résumé</LinkTitle>
          <LinkItem href="file:///C:/Users/David/Downloads/current-resume.docx.pdf">
            file:///C:/Users/David/Downloads/current-resume.docx.pdf
          </LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/daviewave">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/david-silveira-03921821b/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://twitter.com/DavidSilveira_3">
              <AiFillTwitterCircle size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
