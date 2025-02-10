import React from "react";
import { Link } from "react-router-dom";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, A } from "./HeroStyles";
import { WritingEffect } from "./WritingEffect";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Durgesh Kumar Singh
      </SectionTitle>
      <SectionText>
        Software Engineer at{" "}
        <a
          href="https://www.sourcewiz.co/"
          target="_blank"
          style={{
            color: "magenta",
            textDecoration: "underline",
            marginRight: "1em",
          }}
        >
          Sourcewiz
        </a>{" "}
        <br />
        (May 2022 - Present)
      </SectionText>{" "}
      <br />
      <WritingEffect />
      {/* <h1 style={{color:"magenta"}}>Full Stack Web Developer</h1> */}
      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1_XuTP6m9OdJ63-nXFhSnzB8qjSyxE2hT/view",
            "_blank"
          )
        }
      >
        Resume{" "}
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
