import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, BarChart3, Brain } from 'lucide-react'; // Ensure all icons used are imported

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 90 },
        { name: "SQL", level: 90 },
        { name: "HTML/CSS", level: 85 },
        // Removed JavaScript and ReactJS as requested
      ]
    },
    {
      title: "Data Analysis & ML", // Renamed for broader scope
      icon: Database,
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MS Excel", level: 95 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 88 },
        { name: "Scikit-learn", level: 80 },
        { name: "Data Visualization", level: 85 },
        { name: "Power Query", level: 85 },
        { name: "Machine Learning", level: 75 },
        { name: "Statistical Analysis", level: 80 }, // Moved from additionalTools
        { name: "Data Preprocessing", level: 85 }, // Moved from additionalTools
        { name: "EDA", level: 85 }, // Moved from additionalTools
        { name: "Data Mining", level: 75 }, // Moved from additionalTools
      ]
    },
    {
      title: "Tools & Technologies", // Renamed for broader scope
      icon: BarChart3,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "PySpark", level: 75 },
        { name: "Hive", level: 70 },
        { name: "Hadoop", level: 70 },
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "BeautifulSoup", level: 70 },
        { name: "ARIMA", level: 78 },
        { name: "Prophet", level: 78 },
        { name: "Pig", level: 65 }, // Moved from additionalTools (added placeholder level)
        { name: "Scala", level: 60 }, // Moved from additionalTools (added placeholder level)
        { name: "Data Frames", level: 70 }, // Moved from additionalTools (added placeholder level)
        { name: "ETL", level: 75 }, // Moved from additionalTools (added placeholder level)
        { name: "Business Intelligence", level: 85 }, // Moved from additionalTools (added placeholder level)
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        { name: "Problem-Solving", level: 90 },
        { name: "Critical Thinking", level: 95 },
        { name: "Communication", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Adaptability", level: 88 },
      ]
    }
  ];

  // The 'additionalTools' array is no longer needed as its contents are integrated above
  // const additionalTools = []; 

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit developed through academic learning, practical projects, 
              and professional training in data science and analytics.
            </p>
          </div>

          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Removed the "Additional Tools" card as its content has been integrated */}
          {/*
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-center">Additional Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalTools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-smooth cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          */}

          {/* Skill Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <p className="text-muted-foreground">Major Projects</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;