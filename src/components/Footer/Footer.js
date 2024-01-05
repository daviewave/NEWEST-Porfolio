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
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="email:daviewave@gmail.com">
            davidsilveira.3.djs@gmail.com
            davidsilveira.3.djs@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn style={{ marginLeft: '100%' }}>
          <LinkTitle>Résumé</LinkTitle>
          <LinkItem href="/images/DavidSilveira.pdf">
            David_Silveira.pdf
          </LinkItem>
        </LinkColumn>
        {/* <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="phone #:617-459-5248">617-459-5248</LinkItem>
        </LinkColumn> */}
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/daviewave">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/david-silveira-03921821b/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            {/* <SocialIcons href="https://twitter.com/DavidSilveira_3">
            {/* <SocialIcons href="https://twitter.com/DavidSilveira_3">
              <AiFillTwitterCircle size="3rem" />
            </SocialIcons> */}
            </SocialIcons> */}
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
