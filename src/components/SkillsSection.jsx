import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "JavaScript (ES6+)", level: 80, category: "languages" },
  { name: "TypeScript (Basics)", level: 55, category: "languages" },
  { name: "Python", level: 70, category: "languages" },
  { name: "SQL", level: 70, category: "languages" },
  { name: "C Programming", level: 70, category: "languages" },
  { name: "Java", level: 50, category: "languages" },

  // Frontend
  { name: "React.js", level: 75, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 70, category: "frontend" },
  { name: "Figma", level: 70, category: "frontend" },

  // Mobile
  { name: "React Native (Expo)", level: 60, category: "mobile" },

  // Backend
  { name: "FastAPI", level: 70, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "NestJS", level: 65, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "JWT Authentication", level: 70, category: "backend" },
  { name: "MongoDB", level: 50, category: "backend" },

  // Database
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "MySQL", level: 65, category: "database" },

  // Tools
  { name: "Git", level: 80, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "npm", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "ChatGPT", level: 90, category: "tools" },
  { name: "Cursor AI", level: 85, category: "tools" },
  { name: "Word", level: 95, category: "tools" },
];

const categories = ["all", "languages", "frontend", "mobile", "backend", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <span className="section-label text-center block">What I use</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Technologies and tools I work with every day.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border/60 text-foreground hover:bg-muted/80 hover:border-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-border/50 card-hover"
            >
              <div className="text-left mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted/80 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-primary/80 h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};