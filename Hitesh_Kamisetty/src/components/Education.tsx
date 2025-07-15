import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      specialization: "Data Science and Data Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "Aug 2022 - Present",
      cgpa: "7.14",
      status: "In Progress",
      description: "Specializing in Data Science and Data Engineering with comprehensive coursework in machine learning, data analytics, database management, and software engineering.",
      coursework: ["Data Structures & Algorithms", "Machine Learning", "Database Management", "Statistical Analysis", "Big Data Analytics", "Software Engineering"]
    },
    {
      degree: "Intermediate (XII)",
      field: "Physics, Chemistry, Mathematics (PCM)",
      institution: "Narayana Junior College",
      location: "Telangana, Hyderabad",
      period: "Apr 2020 - Mar 2022",
      percentage: "89.7%",
      status: "Completed",
      description: "Strong foundation in mathematics and sciences, providing analytical thinking skills essential for data science and engineering.",
      coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Secondary Education (X)",
      field: "General Studies",
      institution: "Indus EM High School",
      location: "Kurnool, Andhra Pradesh",
      period: "Jun 2019 - Mar 2020",
      gpa: "10.0",
      status: "Completed",
      description: "Achieved perfect academic performance with excellent foundation in core subjects and early exposure to computer science concepts.",
      coursework: ["Mathematics", "Science", "English", "Social Studies", "Computer Science"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Educational <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a strong academic foundation in computer science and data engineering 
              with consistently excellent performance throughout my educational career.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-foreground mb-1">{edu.field}</p>
                      {edu.specialization && (
                        <p className="text-sm text-muted-foreground mb-3">
                          Specialization: {edu.specialization}
                        </p>
                      )}
                      <p className="text-foreground font-medium">{edu.institution}</p>
                    </div>

                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="mr-1 h-4 w-4" />
                        {edu.location}
                      </div>
                      {/* Academic Performance */}
                      <div className="flex items-center space-x-2 mt-2">
                        <Award className="h-4 w-4 text-primary" />
                        <div className="text-right">
                          {edu.cgpa && (
                            <div className="text-lg font-bold text-primary">CGPA: {edu.cgpa}</div>
                          )}
                          {edu.percentage && (
                            <div className="text-lg font-bold text-primary">{edu.percentage}</div>
                          )}
                          {edu.gpa && (
                            <div className="text-lg font-bold text-primary">GPA: {edu.gpa}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Academic Achievements Summary */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">10.0</div>
              <p className="text-muted-foreground">Perfect Secondary School GPA</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">89.7%</div>
              <p className="text-muted-foreground">Intermediate Performance</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">7.14</div>
              <p className="text-muted-foreground">Current University CGPA</p>
            </Card>
          </div>

          {/* Current Focus */}
          <Card className="mt-12 border-l-4 border-l-primary bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Current Academic Focus</h4>
                  <p className="text-muted-foreground">
                    Currently pursuing advanced coursework in Data Science and Data Engineering at 
                    Lovely Professional University. Focus areas include machine learning algorithms, 
                    big data analytics, cloud computing, and advanced statistical methods for data analysis.
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

export default Education;