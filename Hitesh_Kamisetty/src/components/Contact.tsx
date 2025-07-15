import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hiteshkamisetty9@gmail.com",
      href: "mailto:hiteshkamisetty9@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7386249004",
      href: "tel:+917386249004"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "K-hitesh",
      href: "https://github.com/K-hitesh"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "hiteshkamisetty11",
      href: "https://www.linkedin.com/in/hiteshkamisetty11"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on data analytics projects or discuss opportunities in data science? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or simply connecting with fellow data enthusiasts. Whether you have a project in mind, 
                  want to discuss data analytics, or just want to say hello, don't hesitate to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card key={index} className="hover:shadow-glow transition-smooth">
                      <CardContent className="p-6">
                        <a 
                          href={contact.href}
                          target={contact.label === "GitHub" || contact.label === "LinkedIn" ? "_blank" : undefined}
                          rel={contact.label === "GitHub" || contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className="flex items-center space-x-4 group"
                        >
                          <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-muted-foreground">{contact.label}</p>
                            <p className="text-foreground group-hover:text-primary transition-smooth">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Location */}
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">India</p>
                      <p className="text-sm text-muted-foreground">Available for remote work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="hover:shadow-glow transition-smooth">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Collaboration" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or how we can collaborate..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full shadow-glow">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Actions */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:hiteshkamisetty9@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/hiteshkamisetty11" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;