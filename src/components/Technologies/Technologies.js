import React from 'react';
import { DiCloud9, DiDatabase, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a full stack developer I have experience with a wide range of technologies spanning across the front-end, back-end, dev-ops, and artificial intelligence fields.
    </SectionText>
    <List>
    <ListItem>
        {/* <DiDatabase size="3rem" /> */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <li>- NextJS</li>
            <li>- ReactJS</li>
            <li>- MaterialUI</li>
            <li>- Typescript</li>
            <li>- Javascript</li>
            <li>- Figma + Balsamiq</li>
            <li>- CSS</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        {/* <DiDatabase size="3rem" /> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <li>- Django</li>
            <li>- Node.js</li>
            <li>- Python</li>
            <li>- REST API</li>
            <li>- Mongo</li>
            <li>- Flask</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiCloud9 size="3rem" /> */}
        <ListContainer>
          <ListTitle>Devops</ListTitle>
          <ListParagraph>
            <li>- AWS</li>
            <li>- Docker</li>
            <li>- Linux</li>
            <li>- Nginx</li>
            <li>- Ubunut</li>
            <li>- Git</li>
            <li>- Scripting</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiCloud9 size="3rem" /> */}
        <ListContainer>
          <ListTitle>A.I</ListTitle>
          <ListParagraph>
            <li>- PyTorch</li>
            <li>- PyTensor</li>
            <li>- Whispr</li>
            <li>- Llama</li>
            <li>- GPT</li>
            <li>- PyTorch</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
