import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  ScrollableSectionText,
} from './TimeLineStyles';
import {
  TimlineSection,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    if (node !== null) {
      return node.scrollTo({ left, behavior: 'smooth' });
    }
  };

  //accepts the click event and index as params
  const handleClick = (event, i) => {
    event.preventDefault();

    //if there is a carosuel reference present, when we click it we want to scroll to the left
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>How I Ended Up Here</SectionTitle>
      <SectionText>
        <strong style={{ fontSize: '1.2em', color: 'silver' }}>Education: </strong>  I earned an undergraduate Bachelor’s Degree in Neuroscience from the
        University of Massachusetts Amherst in the Spring of 2021, and in
        January of 2022 earned a certificate in full stack web development boot camp from
        Columbia University. 
        <br />
        <br />
        <strong style={{ fontSize: '1.2em', color: 'silver' }}>Professional Experience: </strong>After graduating, I secured my first professional role at Forum Systems, where I had the distinction of being the first full-time employee hired to contribute to their innovative AI-integrated healthcare application as a Full Stack Engineer. In this multifaceted role, I was involved in a wide range of tasks encompassing both front and back-end development. My responsibilities included front-end development using React.js for key features like risk analysis and legal analysis, as well as crafting REST API endpoints utilizing a Django backend. Additionally, I developed bash scripts for the efficient transfer of development and production builds onto Linux servers for on-premise installations. Collaborating closely with C-level executives, I played a pivotal role in the design and implementation of new application features. <br />
        <br />
        <strong style={{ fontSize: '1.2em', color: 'silver' }}>Professional Venture: </strong>After completing my studies, I launched my career at Forum Systems as the first full-time Full Stack Engineer for their AI-integrated healthcare application. In this role, I was responsible for a broad range of tasks including front-end React.js development, Django-based REST API creation, and Linux server management. My tenure there was marked by direct collaboration with C-level executives in feature design and implementation. Leveraging this experience, I founded Easy Covers Software, where I developed an innovative applicant tracking system featuring unique AI-integrated tools, distinguishing it from other products on the market. This project involved creating a speech-to-text pipeline with Kaldi ASR software and closely working with recruiters to ensure market fit. Additionally, I crafted a detailed 25-page business plan and multiple pitch decks to effectively communicate the product’s unique value proposition to various stakeholders.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {/* TimeLineData was defined as a constant and imported above */}
        <>
          {TimeLineData.map((item, index) => (
            // Now that we know what we are looping over (our timeline specified in constants) need to display the data
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                {/* this says we want to go to constants, find the timeline array and specify what we did each year */}
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
