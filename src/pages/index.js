import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Projects from '../components/Projects/Projects';

const Home = () => {
  return (
    <Layout>
      <Section grid title>
        <Hero />
        <BgAnimation />
      </Section>

      <Projects />
      
      <Technologies />

      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
