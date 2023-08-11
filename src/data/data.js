import image1 from "../assets/image1.png";

const userMain = { name: "Sushil Kumar", city: "Bangalore", country: "India" };
const greeting = "Hello, I am";
const catch_attention =
  "With over 19 years of experience in delivery leadership, program and project management, and, technical roles, I am an experienced IT leader committed to driving innovation and transformation.I ensure alignment with business objectives to deliver value-driven results in a faster and better way. I possess skills in working with cross-functional teams to tackle complex challenges and thrive in dynamic environments. I am looking to contribute to an organization's success through my expertise and adaptability.";
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
    projName: "AI Everyday",
    github_url: "https://github.com/sushblock/ai_everyday",
    website_url: "https://aiforall.vercel.app/",
    image: image1, 
    application: {
      name: "Celestial-AI Everyday",
      description: "Our SAAS Subscription app, named \"AI Everyday,\" offers a suite of powerful features to users, centered around leveraging advanced AI capabilities. This app serves as a versatile platform for various creative tasks, such as conversation generation, code, image, audio, and video creation. It empowers users to harness the potential of AI-driven tools to enhance their productivity and creativity."
    },
    features: [
      "Conversation Generation: Users can engage in dynamic and context-aware conversations using cutting-edge AI models, enabling natural and interactive interactions.",
      "Code Generation: The app provides code generation capabilities, assisting users in creating code snippets and even entire scripts efficiently.",
      "Image Generation: Users can generate images using state-of-the-art AI algorithms, allowing for quick and customized visual content creation.",
      "Audio Generation: The app facilitates the creation of audio content through AI-powered algorithms, enabling users to generate various audio elements with ease.",
      "Video Generation: Users can leverage AI to generate engaging video content, streamlining the process of video creation for different purposes."
    ],
    toolsAndTechnologies: {
      "NextJS": "The app is built using NextJS, a modern web framework that offers server-side rendering and efficient client-side routing.",
      "Zustand": "For state management, the app utilizes Zustand, a powerful state management library that simplifies handling application state.",
      "Clerk": "User authentication is managed by Clerk, providing secure login options including email, Google, and various social logins.",
      "Shadcn UI": "The app's user interface is designed using Shadcn UI, a comprehensive component library with a focus on aesthetics and user experience.",
      "Planetscale DB": "The backend relies on Planetscale as the database provider, with MySQL as the database technology, ensuring data integrity and scalability.",
      "OpenAI and Replicate": "The app integrates OpenAI and Replicate APIs to offer AI capabilities for conversation, image, audio, and video generation.",
      "Tailwind CSS": "The app employs Tailwind CSS for responsive design, animations, and visual effects, enhancing the user interface's overall quality.",
      "React Hook Form": "Client-side form validation and handling are managed using React Hook Form for a seamless user experience.",
      "React Toast": "Server-side error handling is facilitated by React Toast, providing users with clear and helpful error messages.",
      "Stripe": "The app supports monthly subscriptions via Stripe, enabling seamless and secure payment processing.",
      "Vercel": "Deployment is streamlined through Vercel, ensuring easy hosting and scaling of the app."
    },
    accomplishments: [
      "Successfully developed and launched a SAAS Subscription app, \"AI Everyday,\" with a robust set of AI-powered features.",
      "Designed an intuitive and user-friendly interface using Shadcn UI and Tailwind CSS.",
      "Implemented advanced user authentication mechanisms through Clerk, ensuring secure user access.",
      "Integrated state management using Zustand, optimizing performance and user experience.",
      "Utilized Planetscale DB to manage data storage, ensuring scalability and data integrity.",
      "Incorporated AI capabilities from OpenAI and Replicate for diverse content generation tasks, enhancing user creativity.",
      "Established a seamless subscription model with Stripe, enabling users to access premium features effortlessly.",
      "Ensured smooth deployment using Vercel, making the app accessible to users worldwide."
    ]
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
