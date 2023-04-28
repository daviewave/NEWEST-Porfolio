import React from 'react';
import { DiCloud9, DiDatabase, DiReact } from 'react-icons/di';
import {
  TechSection,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <TechSection id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a variety of technologies in the software engineering
      field, focusing on web development, data analysis, and machine learning.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <div style={{ display: 'flex' }}>
            <ListTitle>Front-End</ListTitle> <br />
            <div style={{ marginLeft: '3%' }}>
              <DiReact size="3rem" />
            </div>
          </div>

          <ListParagraph>
            - React.js
            <br />- JavaScript
            <br />- CSS
            <br />- HTML
            <br />- Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ display: 'flex' }}>
            <ListTitle>Back-End</ListTitle> <br />
            <div style={{ marginLeft: '3%' }}>
              <DiDatabase size="3rem" />
            </div>
          </div>

          <ListParagraph>
            - Python
            <br />- Django
            <br />- Django Rest Framework
            <br />- SQL
            <br />- Postgres
            <br />- Java
            <br />- C
            <br />- Data Structures
            <br />- Shell Scripting
            <br />- R
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ display: 'flex' }}>
            <ListTitle>DevOps</ListTitle>
            <div style={{ marginLeft: '3%' }}>
              <DiCloud9 size="3rem" />
            </div>
          </div>

          <ListParagraph>
            - Linux
            <br />- Docker
            <br />- Node.js
            <br />- Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div style={{ display: 'flex' }}>
            <ListTitle>ML & Others</ListTitle>
            <div style={{ marginLeft: '3%' }}>
              <DiReact size="3rem" />
            </div>
          </div>

          <ListParagraph>
            - GPT Models
            <br />- Transformer Models
            <br />- Word2Vec
            <br />- Embeddings
            <br />- Reinforcement Learning
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </TechSection>
);

export default Technologies;
