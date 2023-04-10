import image1 from "../assets/image1.jpg";

const userMain = { name: "Sushil Kumar", city: "Bangalore", country: "India" };
const greeting = "Hello, I am";
const catch_attention =
  "I am a program manager who understands technology and can keep his hands dirty if necessary.";
const skills = [
  {
    id: 1, 
    name: "Program & Project Management", 
    level: "Agile, Waterfall, MSP, Wipro PgMA, Wipro PMA, PMP, Prince2" 
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
    projName: "My Portfolio Website",
    description: "This website is built using ReactJS and is a fully responsive. This is complete frontend development. \n\nGitHub is used to maintain the code base which you can see under my GitHub account “simple_portfolio” code repository. \n\nThis website is deployed on netlify.com and is redeployed every time code is merged in the main branch in GitHub. \n\nI have used GithHub Copilot in this project to faster my coding. \n\nDoing program management/project management over long period at onsite kept me away from coding and in last couple of years the whole job landscape has changed and hence upgrading myself with the trend.",
    image: image1,
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
