
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "Tailwind CSS",
      "CSS/SCSS",
      "JavaScript/TypeScript",
      "HTML5"
    ]
  },
  {
    category: "Backend",
    skills: [
      "Laravel",
      "Node.js",
      "DotNetCore",
      "GraphQL",
      "RESTful APIs",
      "SQL",
      "MongoDB"
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      "Git",
      "Docker",
      "CI/CD",
      "Webpack",
      "Vite",
      "Responsive Design",
      "Performance Optimization",
      "Web Accessibility"
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      "Team Leadership",
      "Communication",
      "Mentoring",
      "Problem Solving",
      "Project Management",
      "Agile Methodologies"
    ]
  }
];
