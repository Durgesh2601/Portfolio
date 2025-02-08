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
            "https://drive.google.com/file/d/1OU1n6k4FYmeoFj-_k-D8IQH2Z3NsRhNs/view",
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
