export type ValidCategory = "Full Stack" | "Web Dev" | "UI/UX" | "Frontend" | "Backend" | "Mobile App" | "Desktop App";
export type ValidExpType = "Professional" | "Personal" | "Freelance";
export type ValidSkills =
  | "Next.js"
  | "React"
  | "Nest.js"
  | "Typescript"
  | "Tailwind CSS"
  | "PostgreSQL"
  | "Node.js"
  | "Django"
  | "React Native"
  | "Flutter"
  | "Electron"
  | "Assistant UI"
  | "MongoDB"
  | "Express.js"
  | "Python"
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Git"
  | "Docker"
  | "AWS"
  | "Vercel"
  | "Firebase";

export interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

export interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectsInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}
