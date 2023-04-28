import React from 'react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
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
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        {/* <div style={{ display: 'flex' }}> */}
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="phone #:617-459-5248">617-459-5248</LinkItem>
        </LinkColumn>
        <LinkColumn style={{ marginLeft: '35%', marginRight: '20%' }}>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="email:daviewave@gmail.com">
            davidsilveira.3.djs@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn style={{ marginLeft: '100%' }}>
          <LinkTitle>Résumé</LinkTitle>
          <LinkItem href="/David_Silveira-2023.pdf">
            David Silveira -- 2023
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
