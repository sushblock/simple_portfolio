import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";

const userMain = { name: "Sushil Kumar", city: "Bangalore", country: "India" };
const greeting = "Hello, I am";
const catch_attention =
  "I am a program manager who understands technology and can keep his hands dirty if necessary.";
const skills = [
  {
    id: 1, 
    name: "Program Management", 
    level: "Agile, Waterfall, MSP, Wipro PgMA" 
  },
  {
    id: 2,
    name: "Project Management",
    level: "Agile, Waterfall, Wipro PMA, PMP, Prince2",
  },
  {
    id: 3, 
    name: "Agile Project Management", 
    level: "CSM, Scrum, Kanban, Jira" 
  },
  {
    id: 4,
    name: "Software Architecture and Engineering",
    level: "SOLID Principles, SDLC",
  },
  {
    id: 5,
    name: "Tools & Technologies",
    level: "JIra, Confluence, Azure DevOps, GitHub, GitLap",
  },
  {
    id: 6,
    name: "Cutting Edge Technologies",
    level:
      "ChatGPT for architecture planning and documentation, Software design, technology selection. GitHub Copilot user. E.g. this website.",
  },
];

const exp_timeline = [
  {
    number: 1,
    type: "education",
    when: "1996",
    where: "Kendriya Vidyalaya, Bangalore, Jodhpur, Allahabad",
    what: "Intermediate Science",
    color: "#fff",
    background: "#21325e",
    icon: "SchoolIcon",
  },
  {
    number: 2,
    type: "education",
    when: "1996-2000",
    where: "University of Mysore, Hassan, KA",
    what: "Bachelor of Engineering",
    color: "#fff",
    background: "#21325e",
    icon: "SchoolIcon",
  },
  {
    number: 3,
    type: "preparation",
    when: "2000-2003",
    where: "Civil Services Preparation, New Delhi",
    what: "General Studies, Geography, Mechanical Engineering",
    color: "#fff",
    background: "#f57842",
    icon: "PreparationIcon",
  },
  {
    number: 4,
    type: "work",
    when: "2003-2004",
    where: "E Price Soft Ltd, New Delhi",
    what: "Software Engineer - Java J2ee Software Engineering",
    color: "#fff",
    background: "#e9d35b",
    icon: "WorkIcon",
  },
  {
    number: 5,
    type: "work",
    when: "2005-2006",
    where: "SDG Software India Private Limited, Gurugram",
    what: "Software Engineer - Java J2ee Software Engineering",
    color: "#fff",
    background: "#e9d35b",
    icon: "WorkIcon",
  },
  {
    number: 6,
    type: "work",
    when: "2006-2010",
    where: "Siemens Information Systems Ltd., Gurugram, Beijing",
    what: "Consultant - Java/J2ee Technical Lead",
    color: "#fff",
    background: "#e9d35b",
    icon: "WorkIcon",
  },
  {
    number: 7,
    type: "work",
    when: "2010-2019",
    where: "Wipro Technologies Limited, UK, USA, India",
    what: "Program Manager, Project Manager - Software Development, Infrastructure projects/program management",
    color: "#fff",
    background: "#e9d35b",
    icon: "WorkIcon",
  },
  {
    number: 8,
    type: "business",
    when: "2019-2022",
    where: "Vidhavani Enterprises OPC Private Limited, Bangalore",
    what: "Business Owner, Director - Hydroponics Farming, B2B, B2C",
    color: "#fff",
    background: "#42a7f5",
    icon: "BusinessIcon",
  },
  {
    number: 9,
    type: "work",
    when: "2022-2023",
    where: "ThoughtFocus Information Technologies Private Limited",
    what: "Senior Project Manager, Bengalurur - AI/ML and Customer CRM software development projects management",
    color: "#fff",
    background: "#e9d35b",
    icon: "WorkIcon",
  },
  {
    number: 10,
    type: "education",
    when: "Feb 2023-current",
    where: "Job Search and Preparation",
    what: "Fullstack, Java, JavaScript, Python, Cloud integration, Deployment",
    color: "#fff",
    background: "#2adb2a",
    icon: "LocalLibraryRoundedIcon",
  },
];

const projectList = [
  {
    id: 1,
    projName: "ChatGPT",
    description: "Chatbot for architecture planning and documentation",
    image: image1,
  },
  {
    id: 2,
    projName: "GitHub Copilot",
    description: "AI based code generation",
    image: image2,
  },
  {
    id: 3,
    projName: "This website",
    description: "React, Material UI, GitHub Pages",
    image: image3,
  },
  {
    id: 4,
    projName: "Hydroponics Farming",
    description: "B2B, B2C, IoT, Cloud integration",
    image: image4,
  },
  {
    id: 5,
    projName: "Customer CRM",
    description: "AI/ML, Cloud integration, Deployment",
    image: image5,
  },
  {
    id: 6,
    projName: "Job Search and Preparation",
    description:
      "Fullstack, Java, JavaScript, Python, Cloud integration, Deployment",
    image: image6,
  },
];

export {
  userMain,
  greeting,
  catch_attention,
  skills,
  exp_timeline,
  projectList,
};
