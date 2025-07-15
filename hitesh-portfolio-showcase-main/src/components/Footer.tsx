import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:hiteshkamisetty9@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+917386249004",
      label: "Phone"
    },
    {
      icon: Github,
      href: "https://github.com/K-hitesh",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/hiteshkamisetty11",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Hitesh Kamisetty</h3>
              <p className="text-muted-foreground">
                Data Analyst & Computer Science Engineering Student specializing in Data Science 
                and Data Engineering. Passionate about transforming data into actionable insights.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      asChild
                      className="hover:bg-primary/20 hover:text-primary"
                    >
                      <a
                        href={link.href}
                        target={link.label === "GitHub" || link.label === "LinkedIn" ? "_blank" : undefined}
                        rel={link.label === "GitHub" || link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        aria-label={link.label}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-smooth text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <a 
                    href="mailto:hiteshkamisetty9@gmail.com"
                    className="hover:text-primary transition-smooth"
                  >
                    hiteshkamisetty9@gmail.com
                  </a>
                </p>
                <p>
                  <a 
                    href="tel:+917386249004"
                    className="hover:text-primary transition-smooth"
                  >
                    +91-7386249004
                  </a>
                </p>
                <p>India (Available for remote work)</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© 2024 Hitesh Kamisetty. Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and React</span>
              </div>
              
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <button 
                  onClick={scrollToTop}
                  className="hover:text-primary transition-smooth"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;