import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { currentProjects } from "../../constants/constants";
import { Chip } from '@mui/material';
import styled from 'styled-components';

const NonImageContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const openInNewTab = (url) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    console.log('URL is undefined or empty');
  }
};


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Top Projects</SectionTitle>
    <GridContainer>
      {/* by putting the parameter in curly braces we are 'destructuring' our
      project objects so we can then just call them as they are in the code */}
      {currentProjects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id} onClick={() => openInNewTab(visit)}>
            <Img src={image} style={{
              backgroundColor: "white",
            }}/>
            <NonImageContainer>            
              <div>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                </TitleContent>
                <CardInfo>{description}</CardInfo>
              </div>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Chip label={tag} key={i} sx={{
                      width: "100%",
                      color: 'black',
                      backgroundColor: "#9cc9e3",
                      fontSize: "1.5rem",
                    }} />
                  ))}
                </TagList>
              </div>
            </NonImageContainer>
            {/* <UtilityList>
              
              <ExternalLinks href={visit}>Code</ExternalLinks>
              
              <ExternalLinks href={source}>Deploy</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);


export default Projects;