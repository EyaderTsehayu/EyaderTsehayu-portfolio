// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiExpo,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiSass,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Full Stack Web Dev't",
        icons: [
          <SiNextdotjs />,
          <FaReact />,
          <FaNodeJs />,
          <SiMongodb />,
          <SiFramer />,
          <SiTailwindcss />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
        ],
      },
      {
        title: "Mobile Application Development",
        icons: [
          <FaReact />,
          <SiFirebase />,
          <SiExpo />,
          <SiTypescript />,
          <SiSass />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Software Engineering BSc. - Wolkite University",
        stage: "2019 - 2024",
      },
      {
        title: "ALX software Engineering - Holberton School",
        stage: "2023-2024",
      },
      {
        title: "Complete A.I. & ML, Data Science Bootcamp - ZTM Academy",
        stage: "2024",
      },
      {
        title: "The MERN Fullstack Guide - Academind (udemy)",
        stage: "2022",
      },
      {
        title: "Complete React Developer Course - ZTM Academy (udemy)",
        stage: "2021",
      },
      {
        title: "Complete Web Development Bootcamp - Dr. Angela Yu",
        stage: "2020",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full stack developer - WKU, ICT Incubation Center",
        stage: "2021 - Present",
      },
      {
        title: "Intern - Hindeke Technologies PLC, Bahirdar",
        stage: "2023",
      },
      {
        title: "Freelancer - Upwork",
        stage: "2024 - Present",
      },
    ],
  },
];
export default aboutData;
