import { Briefcase, Code, GraduationCap, Award, HandHelping } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <span className="section-label text-center block">Who I am</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Education, experience, and what I bring to the table.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Junior Software Engineer & Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a B.Tech graduate in Electronics from Walchand Institute of Technology, Solapur (GPA: 8.57). As a Junior Software Engineer at Kshiyarise Technologies, I developed and maintained full-stack web applications, built RESTful APIs for user management and booking workflows, designed PostgreSQL database schemas, and collaborated with the team using Git & GitHub.
            </p>

            <p className="text-muted-foreground">
              I've worked on enterprise projects like Hospital Management System and PujaSetu, implementing authentication, role-based access, and production-level fixes. I'm certified in UI Full Stack Web Development (React) and Cloud Computing basics, and I coordinated the Ideathon at WITchar'23 — a national-level technical symposium.
            </p>

            <div className="pt-4">
              <a href="#contact" className="cosmic-button inline-flex text-center">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    B.Tech in Electronics, Walchand Institute of Technology, Solapur (Aug 2021 – Jun 2024). GPA: 8.57.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    Junior Software Engineer at Kshiyarise Technologies, Hyderabad. Full-stack development, REST APIs, PostgreSQL, and production support.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack & APIs</h4>
                  <p className="text-muted-foreground">
                    Building web and mobile apps with React, Next.js, FastAPI, NestJS, and PostgreSQL. REST APIs, JWT auth, and role-based access.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="font-semibold text-lg mb-3">Certifications</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" aria-hidden />
                      <span>UI Full Stack Web Development with React (Naresh IT, Mar 2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60" aria-hidden />
                      <span>Introduction to Cloud Computing (Simplilearn, Mar 2023)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20">
                  <HandHelping className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Volunteer</h4>
                  <p className="text-muted-foreground">
                    Event Coordinator for WITchar'23 Ideathon — National Level Technical Symposium, WIT Solapur (May 2023).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};