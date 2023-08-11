import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png"

const userMain = { name: "Sushil Kumar", city: "Bangalore", country: "India" };
const greeting = "Hello, I am";
const catch_attention =
  "With over 19 years of experience in delivery leadership, program and project management, and, technical roles, I am an experienced IT leader committed to driving innovation and transformation.";
const skills = [
  {
    id: 1,
    name: "🎯Program & Project Management",
    level:
      "Agile, Waterfall, MSP Practitioner, Wipro PgMA, Wipro PMA, PMP, Prince2 Practitioner, CSM, Scrum, Kanban",
  },
  {
    id: 2,
    name: "🎯Project Management Tools",
    level: "Microsoft Project, JIRA, Azure DevOps, ClickUp",
  },
  {
    id: 3,
    name: "🎯Project management methodologies",
    level:
      "Waterfall, Scrum, Kanban",
  },
  {
    id: 4,
    name: "🎯Cloud Platforms",
    level:
      "AWS, Azure, Google Cloud Platform (GCP), Google Firebase, Vercel, Netlify",
  },
  {
    id: 5,
    name: "🎯Agile Collaboration",
    level:
      "MS Teams, Confluence, Asana, Slack",
  },
  {
    id: 6,
    name: "🎯AIML Projects",
    level:
      "Amazon SageMaker, A2I, OpenAI, LangChain, Hugging Face, Replicate",
  },
  {
    id: 7,
    name: "🎯Software stack",
    level:
      "MERN, Next JS, Java/J2ee Full Stack, Python",
  },
  {
    id: 8,
    name: "🎯Authentication",
    level:
      "OAuth, Firebase Authentication, Clerk",
  },
  {
    id: 9,
    name: "🎯Styling",
    level:
      "TailwindCSS, StyledComponents, CSS",
  },
  {
    id: 10,
    name: "🎯Quality Assurance and Testing",
    level:
      "Postman, Mocha, Selenium, JUnit, Insomnia",
  },
  {
    id: 11,
    name: "🎯Databases",
    level:
      "MongoDB, MySQL, Oracle, Apache Kafka, Planet Scale, Pinecone, Chroma DB",
  },
  {
    id: 12,
    name: "🎯Payment gateway integrations",
    level:
      "Razorpay, Stripe",
  },
  {
    id: 13,
    name: "🎯DevOps Tools/ Config and Release management/ CI/CD",
    level:
      "JIRA, Azure DevOps",
  },
  {
    id: 14,
    name: "🎯Configuration management/Version Control",
    level:
      "Git, SVN, GitLab",
  },
  {
    id: 15,
    name: "🎯Process Improvement",
    level:
      "Lean Six Sigma, Kaizen",
  },
  {
    id: 16,
    name: "🎯Communication",
    level:
      "Microsoft Teams, Zoom, WebEx, GoogleMeet",
  },
  {
    id: 18,
    name: "🎯Architecture/Design considerations/Tools",
    level:
      "SOLID, DRY, Progressive Web App, Lighthouse Website Optimisations",
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
    when: "Mar 2023-current",
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
    projName: "Portfolio Website",
    tools: "PWA App, ReactJS, CSS, JavaScript, HTML",
    platform: "Netlify cloud, GitHub",
    description:
      "This website is fully responsive and can be installed as an app on your mobile.",
    github_url: "https://github.com/sushblock/simple_portfolio",
    website_url: "https://sush-portfolio.netlify.app/",
    image: image1,
    reason:
      "I have built this portfolio website to showcase my technical side of the competency.",
  },
  {
    id: 2,
    projName: "DivineDepot E-Commerce App",
    tools:
      "PWA App, ReactJS, Firebase Auth, Firestore, Storage, Hosting, CSS, JavaScript, HTML",
    platform: "Google Firebase, GitHub",
    description:
      "This is a fully responsive ecommerce website fully integrated with RazorPay payment gateway in test mode right now.",
    github_url: "https://github.com/sushblock/ecommerce_bazaar",
    website_url: "https://divine-ecommerce.web.app/",
    image: image3,
    reason:
      "I have built this ecommerec app/website to implement the minimum set of tools required for a fully functional ecommerece multi vendor platform. It is under construction to include the product upload and analytics reporting capabilities.",
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
