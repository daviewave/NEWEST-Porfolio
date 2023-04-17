import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        David Silveira <br />
        Full Stack Software Engineer
      </SectionTitle>
      {/* <SectionText>
        Full stack software engineer
      </SectionText> */}
      <Button onClick={() => (window.location = "#footer")}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;