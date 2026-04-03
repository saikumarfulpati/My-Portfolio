import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Parking Management System",
    description: "A beautiful mobile web app to manage parking slots efficiently with a clean, responsive UI.",
    image: "/projects/project1.png",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    year: "2024",
    category: "Frontend · Product",
    demoUrl: "https://map-my-park.netlify.app/",
    githubUrl: "https://github.com/saikumarfulpati/map-my-park",
  },
  {
    id: 2,
    title: "AI Tools Hub",
    description:
      "A modern responsive directory to explore AI tools across categories with filters, search, and dark mode.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    year: "2025",
    category: "Frontend · Side Project",
    demoUrl: "https://aitools-hub.netlify.app/",
    githubUrl: "https://github.com/saikumarfulpati/AI-Tools-Hub",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "Enterprise web app for managing patients, appointments, staff, medical records, and billing with secure role-based access.",
    image: "/projects/project3.png",
    tags: ["React.js", "NestJS", "Node.js", "PostgreSQL", "REST APIs", "JWT"],
    year: "2026",
    category: "Enterprise · Full-Stack",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Devakarya",
    description:
      "Temple & puja booking platform for discovery, donations, and live streaming, built with scalable async APIs and mobile apps.",
    image: "/projects/project4.png",
    tags: ["React", "Next.js", "Expo", "FastAPI", "Python", "PostgreSQL", "Redis", "REST APIs"],
    year: "2025",
    category: "Platform · Full-Stack",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [zoomedProject, setZoomedProject] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setZoomedProject(null);
    };
    if (zoomedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [zoomedProject]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <span className="section-label text-center block">Selected work</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-linear-to-b from-primary/8 via-card to-card backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 shadow-sm card-hover flex flex-col"
            >
              <button
                type="button"
                onClick={() => setZoomedProject(project)}
                className="project-card-image h-52 overflow-hidden w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                aria-label={`View full size: ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="inline-flex items-center rounded-full bg-primary/5 text-primary px-3 py-1 font-semibold tracking-wide text-[11px]">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground font-medium text-[11px]">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-2 text-left">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-left">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="mt-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-full bg-muted/80 text-muted-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      {project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          aria-label={`View ${project.title} demo`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/saikumarfulpati"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Image lightbox */}
      {zoomedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm"
          onClick={() => setZoomedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed project image"
        >
          <button
            type="button"
            onClick={() => setZoomedProject(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 text-foreground hover:bg-background border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close zoomed image"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={zoomedProject.image}
              alt={zoomedProject.title}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="absolute bottom-0 left-0 right-0 py-2 text-center text-sm font-medium text-background drop-shadow-md bg-foreground/50 rounded-b-lg">
              {zoomedProject.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};