import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <span className="section-label text-center block">Let's talk</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-14">
          Have a project in mind? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:saikumarfulpati@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    saikumarfulpati@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a
                    href="tel:+919284544279"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9284544279
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/15 ring-1 ring-primary/20 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Solapur, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/saikumarfulpati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={22} aria-hidden />
                </a>
                <a
                  href="https://github.com/saikumarfulpati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="GitHub profile"
                >
                  <Github size={22} aria-hidden />
                </a>
                <a
                  href="https://www.instagram.com/sai_711_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-3 rounded-xl bg-card border border-border/60 text-muted-foreground hover:border-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Instagram profile"
                >
                  <Instagram size={22} aria-hidden />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl border border-border/50 shadow-lg shadow-foreground/5">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Sai F..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="sai@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none transition-colors"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};