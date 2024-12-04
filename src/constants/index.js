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
    title: "Frontend Engineer",
    company_name: "Hivebuy - Berlin, Germany",
    icon: hivebuy,
    iconBg: "#383E56",
    date: "Jan 2024 - Dec 2024",
    points: [
      `Engineered a suite of web application interfaces using React, HTML5, and CSS3 that enhanced user interaction;
        increased customer satisfaction ratings by approximately 20% and reduced bounce rates by nearly 15% due to
        improved responsiveness.`,
      `Utilized Redux and React Query for State Management with an eicient performance optimization that the overall
data load time is reduced by approximately ~20%.`,
      `Replaced the ineicient appointment system and restructured the client portal, reducing booking time by ~30% and
making client request processing faster by ~25% , which resulted in a growth of customer satisfaction by ~20%.
`
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Autoleap (Remote Canada)",
    icon: autoleap,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2023",
    points: [
      `Rened performance with code spliing and lazy loading strategies delivered an improvement of approximately
      ~25% in initial loading times.`,

      `Implemented GraphQL into Next js and React applications for fetching data, increasing eiciency by ~30% and
      decreasing the API response time by ~25%.`,

      `Engineered and integrated a Drag and Drop feature for orders and invoices, reducing processing time by ~50%,
      cuing the frequency of mistakes by ~10% , and increasing end-user contentment by ~15%.`,

      ` Built a comprehensive dashboard utilizing React and Chart.js that aggregated key performance metrics and now
      the tool is utilized by over 20 team members, fostering a culture of data-driven decision making across the
      organization.`,

      ` Crafted and implemented RESTful APIs with Node js, so that frontend and backend system are able to
      communicate with ease.`,

      `Conducted usability testing and collect the feedback to improve the UI component and thereby the user
      satisfaction has increased by ~15%`,

      `Collaborated with Product Management and UI/ UX designers to implement three cloud-based software
      applications, improving overall development speed by ~20% and usage by ~30%.`,
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Tplex - Pakistan",
    icon: tplex,
    iconBg: "#383E56",
    date: "Oct 2018 - Oct 2021",
    points: [
      `• Developed and produced over 50 responsive and accessible user interfaces from visual designs and wireframes.
      To maintain uniformity, we aimed to make the UX of the sites and apps identical irrespective of the devices and
      achieved a ~90% accessibility compliance according to WCAG norms.`,
      `Created an advanced assessment platform leveraging Material UI and PrimeNG, resulting in a cohesive user
      experience; streamlined the design process, allowing for the addition of 20+ questions in under 5 minutes.`,
      `Optimized Redux store performance through the implementation of Redux Thunk middleware, with A/B testing
      demonstrating a 50% reduction in loading times, providing users with a more uid and responsive application
      experience.`,
      `Analyzed user behavior data to develop a seamless navigation system; achieved a 40% faster task completion time
      for users, directly enhancing overall user satisfaction and interaction eectiveness on the website.`,
      `Crafted several custom React hooks and sources of reusable components in React to follow the principles of
      encapsulation and don't repeat yourself, leading to an estimated cut of the code copypaste factor on ~14%.`,
      `Applied Tailwind CSS for customizable and responsive design and was able to design pages with up of 25% less
      time due to its utility-rst frame work.`,
    ],
  },
];

const education = [
  {
    title: "Masters",
    company_name: "Computer Science - Berlin, Germany",
    icon: arden,
    iconBg: "#383E56",
    date: "Nov 2023 - Nov 2024 (Graduated)",
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
