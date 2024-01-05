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
        As a seasoned full-stack web developer with a background in Neuroscience and a Computer Science minor, I offer a unique perspective on user web experiences, honed through professional experience in developing enterprise applications. My strong problem-solving skills and keen sense of timing enable me to meet project deadlines effectively, balancing a clear vision of broader objectives with meticulous attention to detail for innovative strategy implementation.

      </SectionText>
      <Button onClick={() => (window.location = "#footer")}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;