import React from 'react';
import {Link} from 'react-router-dom';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , A} from './HeroStyles';
import {WritingEffect} from './WritingEffect';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hi, I'm  <br />
      Durgesh Kumar Singh
      </SectionTitle>
      <SectionText>
      </SectionText>
      <WritingEffect />
   <Button onClick = {() => window.open('https://drive.google.com/file/d/1LlVxYMbS3Z4CuhAQDebnSVP2RfZbR-z1/view?usp=sharing&export=download', '_blank')}>Resume </Button>
    </LeftSection>

  </Section>
);

export default Hero;