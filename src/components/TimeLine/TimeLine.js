import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>How I Ended Up Here</SectionTitle>
      <SectionText>
        Full stack web developer leveraging a neuroscience background to
        understand the user web experience to increase accessibility and ability
        to use everyday programs and applications. Earned a undergraduate
        bachelor’s degree in Neuroscience from the University of Massachusetts
        Amherst in the Spring of 2021 and recently earned a certificate in full
        stack development from the University of Columbia. Some of the skills I
        have acquired include; programming in Java + JavaScript + C languages,
        HTML frameworks, styling mechanisms with CSS and Bootstrap, creating
        applications with React.js and nextJS, working with backend databases
        MySQL + NoSQL + mongo + apollo + express to connect to the user
        experience and more. I have worked on several applications with group
        members that have resulted very useful products such as an app that
        returns recipes based on searches, a drug interaction app, and property
        swap app. I am eager and excited to leverage my skills and abilities to
        help build a better a better web.
      </SectionText>
      <CarouselContainer ref={carouselRef}>
        {/* TimeLineData was defined as a constant and imported above */}
        <>
          {TimeLineData.map((item, index) => (
            // Now that we know what we are looping over (our timeline specified in constants) need to display the data
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            ></CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
    </Section>
  );
};

export default Timeline;
