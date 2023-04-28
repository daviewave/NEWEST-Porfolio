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
        A highly-driven software engineer with expertise in machine learning and
        web development. I have experience collaborating with top executives to
        architect innovative features and applications, including a cutting-edge
        machine learning-driven risk analysis feature for PDF contracts.
        Throughout my career, I have prioritized mentorship and automation for
        improved efficiency. I graduated with a Bachelor of Science in
        Psychology and a minor in Computer Science from the University of
        Massachusetts at Amherst and completed an intensive coding bootcamp at
        Columbia University.
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
