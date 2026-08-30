import { ValidCategory, ValidExpType, ValidSkills, ProjectsInterface, PagesInfoInterface, DescriptionDetailsInterface } from "@/types";

export const Projects: ProjectsInterface[] = [
  {
    id: "satoon",
    companyName: "SatoonWear",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Built a full-featured Pakistani e-commerce boutique for clothing and jewellery with product catalogues, variant selection, local payment options, and an AI stylist chat experience.",
    websiteLink: "https://satoonwear.com/",
    techStack: [
      "Next.js",
      "React",
      "Nest.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
    ] as ValidSkills[],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2026-08-01"),
    companyLogoImg: "/projects/satoon/satoon-cover.png",
    pagesInfoArr: [
      {
        title: "Homepage & Hero",
        description:
          "A bold, editorial landing experience with a full-width hero, nationwide delivery messaging, and clear paths into clothing and jewellery collections.",
        imgArr: ["/projects/satoon/satoon-cover.png"],
      },
      {
        title: "Product Catalogue",
        description:
          "A responsive jewellery and clothing grid with sale badges, stock indicators, ratings, and PKR pricing designed for fast browsing across collections.",
        imgArr: ["/projects/satoon/satoon-2.png"],
      },
      {
        title: "Product Detail Page",
        description:
          "Rich product pages with variant selection, discount pricing, reviews, local payment options, and a streamlined add-to-bag flow.",
        imgArr: ["/projects/satoon/satoon-3.png"],
      },
      {
        title: "Checkout & Social Proof",
        description:
          "A conversion-focused journey explaining payment and delivery in three steps, paired with customer testimonials to build trust before purchase.",
        imgArr: ["/projects/satoon/satoon-4.png"],
      },
      {
        title: "AI Stylist Chat",
        description:
          "Noor, an on-site AI stylist, helps shoppers pick gifts, discover new arrivals, and get answers about products and JazzCash payments through a conversational chat experience.",
        imgArr: ["/projects/satoon/satoon-5.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "SatoonWear is a Pakistani clothing and jewellery boutique built for modern soirées, mehndi nights, and everyday elegance. Codanity delivered a complete e-commerce platform that feels premium while staying practical for local shoppers.",
        "The storefront combines a polished Next.js frontend with a Nest.js and PostgreSQL backend, supporting product variants, inventory-aware purchasing, order tracking, and payment flows through JazzCash, EasyPaisa, and bank transfer.",
        "Beyond the core shop experience, we integrated customer support touchpoints like WhatsApp order help and Noor, an on-site AI stylist, to guide shoppers through product discovery, gifting, and checkout with confidence.",
      ],
      bullets: [
        "Developed a responsive e-commerce storefront for clothing and jewellery with curated homepage sections and occasion-based shopping paths.",
        "Built product detail flows with variant selection, stock awareness, PKR pricing, and local payment method support.",
        "Implemented customer authentication and account features for order history, delivery tracking, and faster repeat checkout.",
        "Designed a conversion-focused checkout journey with clear delivery and payment messaging for Pakistani customers.",
        "Integrated support experiences including WhatsApp order help and an AI stylist chat widget across the site.",
        "Engineered a scalable full-stack architecture using Next.js, Nest.js, TypeScript, Tailwind CSS, and PostgreSQL.",
      ],
    },
  },
  {
    id: "hero-generation",
    companyName: "HeroGeneration",
    type: "Professional",
    category: ["Full Stack", "Web Dev"],
    shortDescription:
      "Built a collaborative care coordination platform empowering families and caregivers to manage loved ones' health journeys with ease.",
    websiteLink: "https://www.herogeneration.co/",
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
        "HeroGeneration is a purpose-driven application focused on helping families and caregivers work together in supporting aging loved ones. Codanity built the foundation for scalable user workspaces, flexible team collaboration, and a seamless onboarding experience.",
        "The project uses a robust tech stack with Nest.js and PostgreSQL on the backend, and a clean front-end experience using Next.js, React, and Tailwind CSS. We implemented real-time care updates, profile management, role-based access, and invitation flows using Supabase.",
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
        "Leo is an all-in-one transcription and document management platform designed for researchers, archivists, and historians working with historical manuscripts and documents. Codanity built this comprehensive solution to make managing document collections intuitive and efficient through AI-powered technology.",
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
        "Yritykseni is a comprehensive business management platform designed specifically for Finnish entrepreneurs, with the mission of 'making failure impossible' by removing barriers to success. Codanity built an all-in-one solution that centralizes customer management, financial operations, lead tracking, and administrative tasks.",
        "The application leverages a modern tech stack with Nest.js and PostgreSQL handling the secure backend operations, while Next.js, React, and Tailwind CSS create a clean, intuitive front-end experience. We implemented real-time updates via Socket.io, role-based access control, and AI-powered assistance features to streamline entrepreneur workflows.",
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
        "HighTicket.io is an education company, focused on helping entrepreneurs build sustainable high-ticket e-commerce businesses through online courses, coaching, and AI-powered technology. Codanity developed 'Ask Brook', an AI assistant designed to provide expert guidance and answer questions about scaling profitable online stores.",
        "The 'Ask Brook' application leverages a modern tech stack including Next.js and React for the frontend interface, with Nest.js and PostgreSQL powering the backend. We implemented an assistant-UI framework to create a seamless conversational experience that feels like talking to a real coach.",
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
    id: "rahmat-al-naseer",
    companyName: "Rahmat Al-Naseer",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Built a purpose-driven charity website to raise awareness for children in need, share news and resources, and drive donations with a clear, trustworthy user experience.",
    websiteLink: "https://rahmatalnaseer.pk/",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
    ] as ValidSkills[],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2026-08-01"),
    companyLogoImg: "/projects/ran/ran-cover.png",
    pagesInfoArr: [
      {
        title: "Homepage & Hero",
        description:
          "An emotional landing experience with Urdu messaging, clear navigation, and prominent donate and join calls to action for supporters.",
        imgArr: ["/projects/ran/ran-cover.png"],
      },
      {
        title: "Kids in Need",
        description:
          "A storytelling section highlighting the scale of child poverty in Pakistan, paired with a visual collage and donation prompt to inspire action.",
        imgArr: ["/projects/ran/ran-1.png"],
      },
      {
        title: "News & Resources",
        description:
          "A content hub for publishing community news, impact stories, and resources with category stats and a responsive article grid.",
        imgArr: ["/projects/ran/ran-2.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Rahmat Al-Naseer is a charitable organisation focused on supporting children in need across Pakistan. Codanity built a website that communicates the mission clearly while making it easy for visitors to learn, stay informed, and contribute.",
        "The platform presents a warm, trustworthy brand experience with sections for awareness, future support programmes, news updates, and community engagement. The design balances emotional storytelling with practical navigation for donors and volunteers.",
        "Built with Next.js, React, TypeScript, and Tailwind CSS, the site is fast, responsive, and structured to scale as the organisation grows its outreach, content publishing, and donation workflows.",
      ],
      bullets: [
        "Developed a responsive charity website with a mission-led homepage and strong donate and join conversion paths.",
        "Designed an awareness section that communicates the scale of child poverty in Pakistan with compelling visuals and calls to action.",
        "Built a news and resources hub for publishing stories, updates, and community content.",
        "Implemented a clean navigation structure covering about, kids in need, policies, and contact pages.",
        "Created a polished UI with accessible typography, consistent branding, and mobile-friendly layouts.",
        "Engineered a scalable frontend architecture using Next.js, React, TypeScript, and Tailwind CSS.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
