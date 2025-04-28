import {
  mobile,
  autoleap,
  hivebuy,
  arden,
  ssuet,
  tplex,
  web,
  javascript,
  typescript,
  html,
  css,
  angular,
  next,
  vue,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  testing,
  jira,
  zeplin,
  material,
  figma,
  nike,
  healthcare,
  adminPanel,
  ecommerce,
  bank,
  safar,
  reactCertificate,
  agileScrum,
  angularMastering,
  jsWebDevelopment,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "certificate",
    title: "Certificate",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Unit Testing",
    icon: testing,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "UI Libraries",
    icon: material,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Hivebuy - Berlin, Germany",
    icon: hivebuy,
    iconBg: "#383E56",
    date: "Jan 2024 - present",
    points: [
      "Enhanced key customer-facing pages, such as Product Listings and Checkout, significantly improving performance and UX, resulting in faster transactions and a reduction in page load time by 1 second.",
      "Introduce multilingual support, expanding the platform's reach to 10+ regions and driving global user adoption across diverse markets.",
      "Played a key role in LLM-based chatbot support, automating real-time assistance and reducing support queries, while providing immediate solutions to boost customer satisfaction, increasing by ~25%.",
      "Refined AI-powered features, like intelligent search and personalized recommendations, are increasing user engagement and retention by ~15%, and making it easier for customers to find products more efficiently.",
      "Collaborated with cross-functional teams in an Agile environment, delivering frontend solutions that enrich feature release cycles by 1 week.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Autoleap - Canada",
    icon: autoleap,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Dec 2023",
    points: [
      "Improved the UI performance and modularity by creating reusable React components, resulting in a ~25% decrease in loading times, which increased engineering velocity for the upcoming sprints.",
      "Partnered with AI/ML teams to integrate predictive maintenance alerts into the repair workflow, which led to a reduced rate of unexpected breakdowns and improved vehicle turnaround time by 2 times.",
      "Boost AutoLeap onboarding and learning features by building responsive UI components with REST API connections that facilitated an engaging user experience and a more effective product adoption journey for each of their 10,000+ users.",
      "Apply smarter load strategies and deferred rendering that optimized the time-to-interactive (TTI) for important onboarding pages from 2.8 seconds to 1.5 seconds",
      "Reduced UI latency by profiling and optimizing the critical path, improving the form response and validation time by 400ms on average.",
    ]
  },
  {
    title: "Frontend Engineer",
    company_name: "Tplex - Pakistan",
    icon: tplex,
    iconBg: "#383E56",
    date: "Jul 2019 - Nov 2021",
    points: [
      "Developed and maintained a real-time human development platform, scaling to support over 1.25M million users while ensuring consistent performance during peak load times.",
      "Created and launched 50+ responsive and accessible UIs, increasing usability on all devices consistent with WCAG 2.1 accessibility standards",
      "Wrote 150+ unit and integration tests with Jest, achieving ~50% test coverage and decreasing post-release bugs",
      "Assisted in refining the health medical record system for clinicians, leading to a major decrease UI latency from 700ms to under 300ms, and improving the rate of data entry with intelligent, context-aware suggestions.",
      "Designed over 20 reusable UI components and utilized RESTful APIs to render dynamic data for rendering patient information, including prescriptions, lab results, and encounter history.",
    ]
  },
];

const education = [
  {
    title: "Masters",
    company_name: "Computer Science - Berlin, Germany",
    icon: arden,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2025",
    points: [
      `Delivered research findings through impactful presentations and technical papers, demonstrating a profound understanding of Employee Engagement and Retention`,
    ],
  },
  {
    title: "Bachelors of Science",
    company_name: " Computer Engineering - Pakistan",
    icon: ssuet,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Dec 2019",
    points: [
      `Developed a comprehensive ERP system integrated with EHR capabilities, deployed across multiple organizations. The system streamlined operations, reduced inefficiencies by 30%, and enhanced data accuracy by 40%, earning recognition for its scalability, security, and user-focused design.`,
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "An exceptional problem-solver with deep technical expertise, Zubair consistently delivers robust, scalable solutions. His leadership and innovative mindset have been instrumental in driving complex projects to success",
    name: "Usman Ali",
    designation: "Project Manager",
    company: "Autoleap",
  },
  {
    testimonial:
      "Zubair is a team player who fosters collaboration and inspires those around them. Their ability to mentor peers and align efforts ensures seamless teamwork and project success.",
    name: "Farhad",
    designation: "Product Manager",
    company: "Autoleap",
  },
  {
    testimonial:
      "With a sharp eye for design and flawless execution, Zubair creates stunning, user-friendly interfaces. His technical skills and ability to transform ideas into reality set them apart in frontend development",
    name: "Ryan",
    designation: "Client",
    company: "Tplex",
  },

];

const projects = [
  {
    name: "Admin Dashboard",
    live_url: 'https://react-tailwind-admin-panel.netlify.app/',
    description:
      "The Admin Panel - React Tailwind Admin Dashboard Template is a powerful solution for creating modern and responsive dashboards. Built with React and Tailwind CSS, it offers a sleek, customizable interface suited for diverse applications. This template simplifies the process of developing admin panels for everything from basic websites to complex web apps.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
    ],
    image: adminPanel,
    source_code_link: "https://github.com/muhammadzubairbaig/React-Tailwind-Admin-Panel",
  },
  {
    name: "Banking Service",
    live_url: 'https://onlinebankingservice.netlify.app/',
    description:
      "Online Banking Service is a responsive and clean UI/UX landing page built with React.js and Tailwind CSS, designed to showcase proficiency in modern web development. The project focuses on providing a seamless and intuitive user experience with an emphasis on mobile-first design. The website adapts across various devices, ensuring compatibility and ease of use.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/muhammadzubairbaig/online-banking-service",
  },
  {
    name: "Online Healthcare Services",
    live_url: 'https://onlinehealthservices.netlify.app/',
    description:
      "The HealthCare Website is a cutting-edge, responsive platform designed to revolutionize the online healthcare experience. Key features include online appointment scheduling, emergency contact access, and interactive chat for real-time customer engagement. With its intuitive design and seamless navigation, the website emphasizes essential healthcare services while showcasing testimonials to foster trust and credibility. This project strives to make healthcare more accessible, engaging, and user-centric across all devices."
    , tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
    ],
    image: healthcare,
    source_code_link: "https://github.com/muhammadzubairbaig/healthcare-website",
  },
  {
    name: "Ecommerce Dashboard",
    live_url: 'https://primedashboard.netlify.app/',
    description:
      "The Ecommerce Dashboard is a fully responsive, interactive, and comprehensive dashboard built with React, TailwindCSS, and Syncfusion. It provides a modern design and user-friendly interface for managing ecommerce data effectively. With features such as dynamic theme switching, interactive data visualizations, and real-time ecommerce data tracking, the dashboard is ideal for monitoring and managing business operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/muhammadzubairbaig/ecommerce-dashboard",
  },
  {
    name: "Nike Web",
    live_url: 'https://nike-web-ui.netlify.app/',
    description:
      "The Nike Website is a visually captivating, responsive web application designed to showcase Nike products with a sleek and modern interface. Built using React, TypeScript, and Tailwind CSS, the website serves as a platform to highlight the brand's offerings, creating an engaging user experience for visitors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/muhammadzubairbaig/nike-web-ui",
  },
  {
    name: "Safar Tour",
    description:
      "The Safar UI/UX Website is a modern, feature-rich landing page built with Next.js, TypeScript, and Tailwind CSS. It is designed to deliver an engaging and aesthetically pleasing user experience for showcasing travel-related services and products.This project not only highlights a visually striking design but also emphasizes scalability, reusability, and a strong code architecture.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: safar,
    source_code_link: "https://github.com/muhammadzubairbaig/safar-ui-ux",
    live_url: 'https://safar-ui-ux.netlify.app/',
  },
];

const certificates = [
  {
    name: "React with .Net",
    live_url: 'https://www.udemy.com/certificate/UC-1b9fc6da-7890-439d-8da1-73c00acc8cb6/',
    image: reactCertificate,
    link: "https://www.udemy.com/certificate/UC-1b9fc6da-7890-439d-8da1-73c00acc8cb6/",
  },
  {
    name: "Angular Master",
    live_url: 'https://www.udemy.com/certificate/UC-6e741120-9d45-4d9f-af76-60664da09ef2/',
    link: 'https://www.udemy.com/certificate/UC-6e741120-9d45-4d9f-af76-60664da09ef2/',
    image: angularMastering,
  },
  {
    name: "Javascript Web Development",
    image: jsWebDevelopment,
    live_url: "https://www.udemy.com/certificate/UC-5c101bf9-1034-4bb8-b159-d7a28935b46a/",
    link: "https://www.udemy.com/certificate/UC-5c101bf9-1034-4bb8-b159-d7a28935b46a/",
  },
  {
    name: "Agile Scrum",
    image: agileScrum,
    link: "https://www.udemy.com/certificate/UC-c8786af2-a4b5-465a-a7f8-8c1b7084b923/",
    live_url: "https://www.udemy.com/certificate/UC-c8786af2-a4b5-465a-a7f8-8c1b7084b923/",
  },
];

export { services, technologies, experiences, education, testimonials, certificates, projects };
