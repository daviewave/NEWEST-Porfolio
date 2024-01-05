import React from 'react';

import {
  Section,
  SectionText,
  SectionSubTitle,
  SectionTitle,
  StyledLink,
  PageLinkContainer,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const PageLink = ({ href, children }) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

const Hero = (props) => (
  <Section row nopadding title>
    <LeftSection>
      <SectionTitle main>David Silveira</SectionTitle>
      <SectionSubTitle main> Software Engineer - Full Stack</SectionSubTitle>

      <SectionText>
        As a seasoned full-stack web developer with a background in Neuroscience and a Computer Science minor, I offer a unique perspective on user web experiences, honed through professional experience in developing enterprise applications. My strong problem-solving skills and keen sense of timing enable me to meet project deadlines effectively, balancing a clear vision of broader objectives with meticulous attention to detail for innovative strategy implementation.

      </SectionText>

      <PageLinkContainer>
        <PageLink href="#experience">Experience</PageLink>
        <PageLink href="#tech">Technologies</PageLink>
        <PageLink href="#about">About</PageLink>
        <PageLink href="#contact">Contact</PageLink>
      </PageLinkContainer>

      {/* Navigation Links Here */}
    </LeftSection>
  </Section>
);

export default Hero;
