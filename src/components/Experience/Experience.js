import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ExperienceItem,
  CardWrapper,
  DescriptionList,
} from './ExperienceStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { currentProjects } from '../../constants/constants';

import { ExperienceSection } from '../../styles/GlobalComponents';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Forum Systems',
    location: 'Needham, Ma',
    duration: 'February 2022 - Present',
    descriptionList: [
      'Developed healthcare-specific ML application using Django and React.js',
      'Led team of developers focused on NLP-based healthcare benefit encoding and ML-powered product analysis',
      "Established a 'dev-shortcuts' repository with over 25 productivity-enhancing shell script shortcuts",
    ],
    technologies: ['Python', 'Django', 'React', 'JavaScript', 'Postgres'],
    tech: true,
  },
  {
    title: 'Research Assistant',
    company: 'Kwak Laboratory',
    location: 'Amherst, Ma',
    duration: 'December 2020 - June 2021',
    descriptionList: [
      'Crafted a custom R program to process and analyze text data from Excel sheets',
      "Analyzed paragraphs of respondents' reactions to different frame words about the 2016 election",
      'Employed various data processing techniques to extract insights from text data',
    ],
    technologies: ['R', 'Data Analysis', 'NLP'],
    tech: true,
  },
  {
    title: 'Host',
    company: '99 Restaurant',
    location: 'Woburn',
    duration: 'June 2017 - January 2019',
    descriptionList: [
      'Greeted and seated guests, ensuring a welcoming atmosphere at the 99 Restaurant',
      'Managed reservations, wait-lists, and seating arrangements efficiently',
      'Maintained cleanliness and organization throughout the restaurant to enhance guest experience',
      'Cooperated with the team to ensure smooth operations and high-quality customer service',
    ],
    technologies: [],
  },
  {
    title: 'Food Delivery Driver',
    company: 'Doordash',
    location: '',
    duration: 'January 2019 - May 2021',
    descriptionList: [
      'Maintained a high level of professionalism and courteous communication with customers, restaurants, and staff',
      'Handled customer inquiries and resolved issues promptly to maintain positive customer relationships',
      'Delivered food orders promptly and accurately for DoorDash, ensuring customer satisfaction',
    ],
    technologies: [],
  },
];

const Label = ({ label }) => {
  return <strong style={{ color: '#777' }}>{label} </strong>;
};

const TechExperience = () => (
  <GridContainer>
    {experiences
      .filter((exp) => exp.tech)
      .map((experience, index) => (
        <BlogCard key={index}>
          <TitleContent>
            <HeaderThree>{experience.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            <ExperienceItem>
              <Label label="Company: " />
              {experience.company}
            </ExperienceItem>
            <ExperienceItem>
              <Label label="Location:" />
              {experience.location}
            </ExperienceItem>
            <ExperienceItem>
              <Label label="Duration:" />
              {experience.duration}
            </ExperienceItem>
            <ExperienceItem>
              <Label label="Responsibilties:" />

              <DescriptionList>
                <ul style={{ listStyleType: 'disc' }}>
                  {experience.descriptionList.map((point, index) => (
                    <li key={index}>- {point}</li>
                  ))}
                </ul>
              </DescriptionList>
            </ExperienceItem>
          </CardInfo>
          {experience.technologies.length > 0 && (
            <TagList>
              {experience.technologies.map((tech, idx) => (
                <Tag key={idx}>{tech}</Tag>
              ))}
            </TagList>
          )}
        </BlogCard>
      ))}
  </GridContainer>
);

const NonTechExperience = () => (
  <GridContainer>
    {experiences
      .filter((exp) => !exp.tech)
      .map((experience, index) => (
        <BlogCard key={index}>
          <TitleContent>
            <HeaderThree>{experience.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            <ExperienceItem>
              <Label label="Company: " />
              {experience.company}
            </ExperienceItem>
            <ExperienceItem>
              <Label label="Location:" />
              {experience.location}
            </ExperienceItem>
            <ExperienceItem>
              <Label label="Duration:" />
              {experience.duration}
            </ExperienceItem>
            <ExperienceItem>
              <Label label="Responsibilties:" />

              <DescriptionList>
                <ul style={{ listStyleType: 'disc' }}>
                  {experience.descriptionList.map((point, index) => (
                    <li key={index}>- {point}</li>
                  ))}
                </ul>
              </DescriptionList>
            </ExperienceItem>
          </CardInfo>
          {experience.technologies.length > 0 && (
            <TagList>
              {experience.technologies.map((tech, idx) => (
                <Tag key={idx}>{tech}</Tag>
              ))}
            </TagList>
          )}
        </BlogCard>
      ))}
  </GridContainer>
);

const Experience = () => (
  <ExperienceSection id="experience">
    <SectionDivider />
    <SectionTitle>Experience</SectionTitle>
    <HeaderThree title sub>
      Tech Experience
    </HeaderThree>
    <TechExperience />
    <HeaderThree title sub>
      Non-Tech Experience
    </HeaderThree>
    <NonTechExperience />
  </ExperienceSection>
);

export default Experience;
