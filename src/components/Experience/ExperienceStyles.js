import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  padding: 3rem;
  justify-content: space-between;
  gap: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem;
  }
`;

export const BlogCard = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  border: 1px solid #fafaf9;
  border-radius: 10px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  width: 40vw;
  height: 75vh;
  position: relative;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4),
      0 0 0 5px ${(props) => props.theme.colors.glowingBorder};
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    right: -2.5px;
    bottom: -2.5px;
    border-radius: 10px;
    z-index: -1;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  padding: 2rem 2rem 2rem 2rem;
  color: ${(props) => props.theme.colors.tagBackground};
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  color: ${(props) => props.theme.colors.cardText};
  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
  margin-left: ${(props) => (props.sub ? '1%' : '0')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.cardText};
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 2rem;
  padding: 2rem;
  margin-bottom: 3rem;
  background-color: ${(props) => props.theme.colors.richBlack};
  height: auto; /* added */
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background: #d0bb57;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #c5a847;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.richBlack2};
  margin: 0 20px 10px 10px;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.cardText};
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.onyx};
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export const ExperienceItem = styled.div`
  // color: #777;
  color: #a9a9a9;
  margin-bottom: 1rem;
`;

export const CardWrapper = styled.div`
  width: 33vw; // Adjust the width as needed
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const DescriptionList = styled.div`
  padding: 10px 25px 10px 25px;
  height: auto;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-type: disc;
    padding-left: 1em;
  }

  li {
    margin-bottom: 5px;
    line-height: 1.5;
    font-size: 2rem;
    // color: #333;
  }
`;
