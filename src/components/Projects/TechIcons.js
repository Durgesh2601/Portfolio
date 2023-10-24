import React from "react";
import {
  DiReact,
  DiFirebase,
  DiMongodb,
  DiCss3,
  DiWindows,
} from "react-icons/di";
import { FaNode, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiRedux,
  SiJson,
  SiHtml5,
  SiVisualstudiocode,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const TechIcons = ({ tag }) => {
  let iconComponent;
  let size = "38%";

  switch (tag) {
    case "React":
      iconComponent = <DiReact size={size} color="#5ED4F3" />;
      break;
    case "Firebase":
      iconComponent = <DiFirebase size={size} color="#F7C428" />;
      break;
    case "Mongodb":
      iconComponent = <DiMongodb size={size} color="#559134" />;
      break;
    case "Node":
      iconComponent = <FaNode size={size} />;
      break;
    case "CSS":
      iconComponent = <DiCss3 size={size} color="#2171B6" />;
      break;
    case "JavaScript":
      iconComponent = <SiJavascript size={size} color="#EFD81C" />;
      break;
    case "JSON":
      iconComponent = <SiJson size={size} />;
      break;
    case "HTML":
      iconComponent = <SiHtml5 size={size} color="#DC4A25" />;
      break;
    case "Redux":
      iconComponent = <SiRedux size={size} color="#7248B6" />;
      break;
    case "Windows":
      iconComponent = <DiWindows size={size} />;
      break;
    case "VS code":
      iconComponent = <SiVisualstudiocode size={size} color="#2174B3" />;
      break;
    case "Bootstrap":
      iconComponent = <FaBootstrap size={size} color="#E06C00" />;
      break;
    case "ExpressJS":
      iconComponent = <FaNodeJs size={size} color="#E06C00" />;
      break;
    case "TypeScript":
      iconComponent = <SiTypescript size={size} />;
      break;
    case "Next.js":
      iconComponent = <SiNextdotjs size={size} />;
      break;
    default:
      iconComponent = <SiRedux size={size} />;
      break;
  }

  return iconComponent;
};

export default TechIcons;
