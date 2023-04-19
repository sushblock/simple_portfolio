import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const userMain = { name: "Sushil Kumar", city: "Bangalore", country: "India" };
const greeting = "Hello, I am";
const catch_attention =
  "I am a program manager with over 17 years in IT, who understands technology very well and can deep dive if necessary. Entrepreneurial spirit.";
const skills = [
  {
    id: 1, 
    name: "Program & Project Management", 
    level: "Agile, Waterfall, MSP, Wipro PgMA, Wipro PMA, PMP, Prince2, CSM, Scrum, Kanban" 
  },
  {
    id: 2,
    name: "Software Architecture and Engineering",
    level: "SOLID Principles, SDLC, Agile Development",
  },
  {
    id: 3,
    name: "Tools & Technologies",
    level: "Progressive Web Apps(PWA - website installable apps - e.g., this website), Java, React JS, Fullstack, CSS, JavaScript, HTML, Jira, Confluence, Azure DevOps, GitHub",
  },
  {
    id: 4,
    name: "Cutting Edge Technologies",
    level:
      "ChatGPT for architecture planning, software design and documentation. GitHub Copilot for faster development and implementation - e.g., this website.",
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
    tools: "PWA App, ReactJS, CSS, JavaScript, HTML",
    platform: "Netlify cloud, GitHub",
    description: "This website is fully responsive and can be installed as an app on your mobile.",
    github_url: "https://github.com/sushblock/simple_portfolio",
    website_url: "https://legendary-seahorse-202331.netlify.app/",
    image: image1,
    reason: "I have built this portfolio website to showcase my technical side of the competency.",
  },
  {
    id: 1,
    projName: "Investment App",
    tools: "PWA App, ReactJS, Firebase Auth, Firestore, Storage, Hosting, CSS, JavaScript, HTML",
    platform: "Google Firebase, GitHub",
    description: "This website is fully responsive and can be installed as an app on your mobile.",
    github_url: "https://github.com/sushblock/g_firebase_usage",
    website_url: "https://tjikko-7572e.web.app/",
    image: image2,
    reason: "I have built this nvestment app/website to implement the minimum set of tools required for a fully functional platform. The only thing missing right now is the serverless functions to integrate the payment gateway to this app",
  }
];

export {
  userMain,
  greeting,
  catch_attention,
  skills,
  exp_timeline,
  projectList,
};
