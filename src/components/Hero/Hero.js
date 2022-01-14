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
        Full stack web developer leveraging a Neuroscience degree and Computer
        Science minor, allowing for a unique understanding of the user web
        experience, resulting in more proficient development of everyday
        programs and applications.
      </SectionText>
      <Button onClick={() => (window.location = "#footer")}>Contact Me</Button>
      <Button
        onClick={() =>
          (window.location =
            "/file:///C:/Users/David/Downloads/current-resume.docx.pdf")
        }
      >
        Resumé
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;