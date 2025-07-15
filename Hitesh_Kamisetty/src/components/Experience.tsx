import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Trainee",
      company: "MedTourEasy",
      location: "Remote",
      period: "June 2025",
      type: "Traineeship",
      achievements: [
        "Completed 100% of a 4-week hands-on traineeship focused on healthcare analytics",
        "Developed and delivered the project 'Analysis of Chemical Components' applying 85% of learned skills",
        "Gained practical exposure to real-world analytics workflows, improving task execution efficiency by 70%",
        "Recognized for diligence, punctuality, and innovation—earning appreciation from the Training Head",
        "Received Letter of Recommendation for outstanding performance"
      ],
      skills: ["Data Preprocessing", "EDA", "Data Visualization", "Healthcare Analytics", "Statistical Analysis"]
    }
  ];

  const certifications = [
    {
      name: "The Bits and Bytes of Computer Networking",
      provider: "Coursera",
      date: "Nov 2024",
      icon: "🌐"
    },
    {
      name: "Data Analysis with Python",
      provider: "IBM",
      date: "Jul 2024",
      icon: "🐍"
    },
    {
      name: "Database Management System & SQL",
      provider: "Board Infinity",
      date: "Aug 2023",
      icon: "🗄️"
    },
    {
      name: "Mastering Data Structures and Algorithms Using C and C++",
      provider: "Udemy",
      date: "Jun 2023",
      icon: "💻"
    },
    {
      name: "Become a Data Scientist",
      provider: "LinkedIn Learning",
      date: "Feb 2023",
      icon: "📊"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="text-gradient">Training</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional training experiences and continuous learning through industry-recognized certifications.
            </p>
          </div>

          {/* Training Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-primary" />
              Professional Training
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className="mr-2 h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" />
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl mb-4">{cert.icon}</div>
                      <h4 className="font-semibold mb-2 text-sm leading-tight">{cert.name}</h4>
                      <p className="text-primary font-medium text-sm mb-2">{cert.provider}</p>
                      <div className="flex items-center justify-center text-muted-foreground text-xs">
                        <Calendar className="mr-1 h-3 w-3" />
                        {cert.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Highlight */}
          <Card className="mt-12 border-l-4 border-l-primary bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Outstanding Achievement</h4>
                  <p className="text-muted-foreground">
                    Received Letter of Recommendation from MedTourEasy for exceptional performance 
                    in data analytics project focusing on chemical components analysis. Recognized 
                    for exceeding project expectations and demonstrating innovation in approach.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;