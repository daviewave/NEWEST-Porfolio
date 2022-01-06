import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        David Silveira <br />
        Full Stack Web Developer
      </SectionTitle>
      <SectionText>
        A unique background with a bachelor's degree in Neuroscience from Umass
        Amherst and full stack engineering certificate from Columbia University.
        Special ability to think about problems logically, debug issues and
        enhance user experiece on the web.
      </SectionText>
      <Button onClick={() => (window.location = "#footer")}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;