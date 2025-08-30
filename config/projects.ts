import { ValidCategory, ValidExpType, ValidSkills, ProjectsInterface, PagesInfoInterface, DescriptionDetailsInterface } from "@/types";

export const Projects: ProjectsInterface[] = [
  {
    id: "hero-generation",
    companyName: "HeroGeneration",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Built a collaborative care coordination platform empowering families and caregivers to manage loved ones' health journeys with ease.",
    websiteLink: "https://herogen.co",
    techStack: [
      "Next.js",
      "React",
      "Nest.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ] as ValidSkills[],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-08-01"),
    companyLogoImg: "/projects/hero-generation/hg-cover.png",
    pagesInfoArr: [
      {
        title: "Dashboard",
        description:
          "A centralized dashboard where users manage loved ones, view updates, and coordinate with team members.",
        imgArr: ["/projects/hero-generation/hg-1.png"],
      },
      {
        title: "Loved One Profile",
        description:
          "Detailed profiles for each loved one with personal, medical, and relational context, including photo uploads.",
        imgArr: [
          "/projects/hero-generation/hg-2.png",
          "/projects/hero-generation/hg-3.png",
        ],
      },
      {
        title: "Task & Calendar Management",
        description:
          "Plan, assign, and track caregiving responsibilities like medications or appointments using a collaborative task board with status indicators.",
        imgArr: [
          "/projects/hero-generation/hg-4.png",
          "/projects/hero-generation/hg-cover.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "HeroGeneration is a purpose-driven application focused on helping families and caregivers work together in supporting aging loved ones. As a full-stack developer, I helped build the foundation for scalable user workspaces, flexible team collaboration, and a seamless onboarding experience.",
        "The project uses a robust tech stack with Nest.js and PostgreSQL on the backend, and a clean front-end experience using Next.js, React, and Tailwind CSS. I implemented real-time care updates, profile management, role-based access, and invitation flows using Supabase.",
        "This product was designed with accessibility and ease-of-use at the forefront, enabling users of all technical levels to navigate the platform confidently and securely.",
      ],
      bullets: [
        "Developed a scalable care coordination system supporting multiple loved ones and team members.",
        "Built intuitive role-based dashboards for families and caregivers using Next.js and Tailwind CSS.",
        "Designed secure invitation, verification, and access control flows using Supabase and Nest.js.",
        "Integrated profile management with image upload and medical detail support.",
        "Focused on accessibility, clean UI/UX, and real-time updates across team collaboration.",
      ],
    },
  },
  {
    id: "leo-document-ai",
    companyName: "Leo",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Developed an AI-powered document management platform that transcribes, organizes, and archives historical documents with cutting-edge machine learning technology.",
    websiteLink: "https://tryleo.ai",
    techStack: [
      "Next.js",
      "React",
      "Nest.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ] as ValidSkills[],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-04-28"),
    companyLogoImg: "/projects/leo/leo-cover.png",
    pagesInfoArr: [
      {
        title: "Document Management Dashboard",
        description:
          "A powerful dashboard where users can view, organize, and search through their document collection with customizable metadata fields.",
        imgArr: ["/projects/leo/leo-1.png"],
      },
      {
        title: "AI Transcription Technology",
        description:
          "Advanced machine learning algorithms that deliver quick and accurate transcriptions, even for unclear text or challenging handwriting in historical documents.",
        imgArr: ["/projects/leo/leo-2.png", "/projects/leo/leo-3.png"],
      },
      {
        title: "Document Metadata & Organization",
        description:
          "Comprehensive metadata management allowing users to add titles, creators, dates, and custom fields to organize their document collections effectively.",
        imgArr: ["/projects/leo/leo-4.png", "/projects/leo/leo-cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Leo is an all-in-one transcription and document management platform designed for researchers, archivists, and historians working with historical manuscripts and documents. I helped build this comprehensive solution that makes managing document collections intuitive and efficient through AI-powered technology.",
        "The platform features a three-step workflow: upload documents with customizable metadata, receive AI-generated transcriptions of even the most challenging handwritten texts, and manage the entire collection through an intuitive hub. Users can export their data in various formats including PNG, JPG, PDF, and SRT.",
        "Built with scalability in mind, the platform offers tiered subscription plans from free to professional levels, with varying storage limits and monthly transcription credits to accommodate different user needs. The clean, accessible interface ensures users of all technical abilities can navigate and utilize the powerful features effectively.",
      ],
      bullets: [
        "Implemented an AI-powered transcription engine that accurately handles historical handwriting and challenging document formats.",
        "Developed a flexible metadata management system for organizing documents with customizable fields and search capabilities.",
        "Created a responsive dashboard interface that streamlines document management workflow using React and Tailwind CSS.",
        "Built a scalable subscription-based platform with tiered pricing models and usage tracking.",
        "Designed an intuitive document viewer with zoom controls, transcription editing tools, and multiple export options.",
        "Integrated a comprehensive document organization system with custom lists, tagging, and filtering capabilities.",
      ],
    },
  },
  {
    id: "yritykseni",
    companyName: "Yritykseni",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Built a centralized business management platform for entrepreneurs that simplifies customer relationships, financial management, sales tracking, and administrative tasks.",
    websiteLink: "https://yritykseni.com",
    techStack: [
      "Next.js",
      "React",
      "Nest.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ] as ValidSkills[],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-05-15"),
    companyLogoImg: "/projects/yritykseni/yt-cover.png",
    pagesInfoArr: [
      {
        title: "Entrepreneur's Control Center",
        description:
          "A comprehensive dashboard that centralizes essential information, revenue metrics, project status, and personal assistant interactions.",
        imgArr: [
          "/projects/yritykseni/yt-1.png",
          "/projects/yritykseni/yt-2.png",
        ],
      },
      {
        title: "Customer Management",
        description:
          "Detailed customer profiles with contact information, communication history, and related projects for effective client relationship management.",
        imgArr: ["/projects/yritykseni/yt-3.png"],
      },
      {
        title: "Financial Management",
        description:
          "Invoicing system with item tracking, VAT calculation, and payment status monitoring for streamlined financial operations.",
        imgArr: ["/projects/yritykseni/yt-4.png"],
      },
      {
        title: "Lead Management",
        description:
          "Kanban-style lead tracking board with status updates, customer information, and budget details for effective sales pipeline management.",
        imgArr: [
          "/projects/yritykseni/yt-5.png",
          "/projects/yritykseni/yt-6.png",
        ],
      },
      {
        title: "Contact",
        description:
          "A modern contact section designed to help startups connect with potential clients. This layout includes a responsive form and a founder spotlight to build trust and encourage engagement.",
        imgArr: [
          "/projects/yritykseni/yt-7.png",
          "/projects/yritykseni/yt-cover.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Yritykseni is a comprehensive business management platform designed specifically for Finnish entrepreneurs, with the mission of 'making failure impossible' by removing barriers to success. As a full-stack developer, I helped build an all-in-one solution that centralizes customer management, financial operations, lead tracking, and administrative tasks.",
        "The application leverages a modern tech stack with Nest.js and PostgreSQL handling the secure backend operations, while Next.js, React, and Tailwind CSS create a clean, intuitive front-end experience. I implemented real-time updates via Socket.io, role-based access control, and AI-powered assistance features to streamline entrepreneur workflows.",
        "The platform focuses on providing entrepreneurs with a complete business control center, from sales pipeline management to financial oversight, with pricing starting affordably at 1% to make it accessible to solo entrepreneurs and small businesses.",
      ],
      bullets: [
        "Developed a centralized business management platform targeting Finnish entrepreneurs with comprehensive CRM functionality.",
        "Built an intuitive invoicing system with automatic VAT calculation, item tracking, and payment status updates.",
        "Designed a Kanban-style lead management board to visualize and optimize sales pipelines.",
        "Integrated AI-powered personal assistant features for handling routine tasks and communications.",
        "Created detailed customer profiles with communication history and project relationship tracking.",
        "Implemented a financial dashboard with revenue visualization and project status tracking.",
        "Focused on developing a highly intuitive UI to minimize onboarding time for non-technical users.",
        "Engineered secure contact forms and expert assistance features to connect entrepreneurs with specialized help.",
      ],
    },
  },
  {
    id: "highticket",
    companyName: "HighTicket",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Developed the 'Ask Brook' AI assistant for HighTicket.io, an education company helping entrepreneurs build and scale profitable high-ticket e-commerce businesses.",
    websiteLink: "https://highticket.io",
    techStack: [
      "Next.js",
      "React",
      "Nest.js",
      "Typescript",
      "Tailwind CSS",
      "Assistant UI",
    ] as ValidSkills[],
    startDate: new Date("2023-11-01"),
    endDate: new Date("2024-04-01"),
    companyLogoImg: "/projects/highticket/highticket-cover.png",
    pagesInfoArr: [
      {
        title: "Knowledge Base Responses",
        description:
          "The 'Ask Brook' assistant provides definitive answers to common questions about HighTicket's programs, such as 'When the 6 months of the program are over, will my access to the courses disappear?'",
        imgArr: ["/projects/highticket/ht-1.png"],
      },
      {
        title: "Custom Question Handling",
        description:
          "Intelligent responses to user-specific inquiries beyond standard questions, such as personalized niche recommendations or business strategy advice tailored to individual circumstances within the high-ticket e-commerce space.",
        imgArr: [
          "/projects/highticket/ht-2.png",
          "/projects/highticket/highticket-cover.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "HighTicket.io is an education company, focused on helping entrepreneurs build sustainable high-ticket e-commerce businesses through online courses, coaching, and AI-powered technology. As part of their offering, I developed 'Ask Brook', an AI assistant designed to provide expert guidance and answer questions about scaling profitable online stores.",
        "The 'Ask Brook' application leverages a modern tech stack including Next.js and React for the frontend interface, with Nest.js and PostgreSQL powering the backend. I implemented an assistant-UI framework to create a seamless conversational experience that feels like talking to a real coach.",
        "The system combines pre-programmed responses to common questions with dynamic, context-aware answers that address users' unique situations and needs. This dual approach ensures HighTicket's customers receive both reliable foundational information and personalized strategic advice for their specific e-commerce business challenges.",
      ],
      bullets: [
        "Developed the 'Ask Brook' conversational AI interface that simulates interaction with a high-ticket dropshipping coach for HighTicket's education platform.",
        "Built a knowledge base system to handle common questions about HighTicket's course access, program details, and store setup procedures.",
        "Created an adaptive response system capable of understanding and addressing custom user inquiries beyond standard questions about high-ticket e-commerce.",
        "Designed a responsive UI with Tailwind CSS that works seamlessly across devices for optimal user experience.",
        "Implemented contextual awareness that understands various e-commerce concepts and terminology relevant to HighTicket's educational content.",
        "Integrated user profiles to personalize responses and track conversation history for continuous improvement.",
        "Established secure backend architecture using Nest.js and PostgreSQL for data management and user authentication.",
      ],
    },
  },
  {
    id: "huble-tracker",
    companyName: "Huble",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "Desktop App"],
    shortDescription:
      "Built a modern time tracking and productivity analytics platform enabling teams to monitor work hours, manage projects, and gain insight into application usage patterns.",
    websiteLink: "https://huble-trakr.vercel.app/",
    techStack: [
      "Next.js",
      "React",
      "Nest.js",
      "Typescript",
      "Electron",
      "Tailwind CSS",
      "PostgreSQL",
    ] as ValidSkills[],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-04-30"),
    companyLogoImg: "/projects/huble-tracker/huble-cover.png",
    pagesInfoArr: [
      {
        title: "Time Tracking Dashboard",
        description:
          "A detailed timesheet interface that visualizes productivity metrics, tracked time entries, and project breakdowns with activity graphs and summary stats.",
        imgArr: ["/projects/huble-tracker/huble-1.png"],
      },
      {
        title: "Application Usage Analytics",
        description:
          "Insights into application-level usage with precise duration tracking and project tagging to help teams understand time allocation patterns.",
        imgArr: ["/projects/huble-tracker/huble-2.png"],
      },
      {
        title: "Client Management",
        description:
          "A dedicated space for managing clients and projects with support for multiple billing models, budgets, and client profiles.",
        imgArr: ["/projects/huble-tracker/huble-3.png"],
      },
      {
        title: "User Settings",
        description:
          "User-level configuration panel for adjusting tracking preferences, screenshot behavior, notifications, and work hour settings.",
        imgArr: ["/projects/huble-tracker/huble-4.png"],
      },
      {
        title: "Desktop Time Tracker",
        description:
          "Cross-platform desktop app with a clean start/stop interface that allows users to select tasks and track time in real-time.",
        imgArr: ["/projects/huble-tracker/huble-5.png"],
      },
      {
        title: "Performance Dashboard",
        description:
          "Executive overview dashboard with live metrics covering revenue, subscriptions, visitor traffic, and sales performance.",
        imgArr: ["/projects/huble-tracker/huble-cover.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Huble Tracker is a productivity-focused platform designed to help distributed teams and freelancers track time, manage projects, and evaluate productivity through real-time analytics. As a full-stack developer, I led development on both the web dashboard and the desktop time tracking app.",
        "The system was architected with a modern tech stack including Next.js, React, and Tailwind CSS for the frontend, and Nest.js with PostgreSQL for backend services. I also built a cross-platform desktop tracker using Electron, ensuring seamless integration with the main platform.",
        "The application empowers teams with data-driven insights, enabling better project planning, accurate client billing, and operational efficiency across remote and hybrid work setups.",
      ],
      bullets: [
        "Built a cross-platform desktop application with Electron for time tracking, app usage analysis, and real-time activity scoring.",
        "Developed an advanced web dashboard for tracking timesheets, project hours, and productivity metrics using Next.js and Tailwind CSS.",
        "Implemented a scalable client and project management module with flexible billing configurations.",
        "Engineered precise activity logging with contextual tracking across different apps and work sessions.",
        "Created a performance dashboard displaying revenue, subscription growth, and real-time visitor data.",
        "Designed team and member management features with customizable working hours and tracking preferences.",
        "Integrated privacy-aware screenshot features with options for blurring, frequency control, and alert settings.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
