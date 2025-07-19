import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, BarChart3, Globe, Database, Bot, Mail, Code, Brain, TrendingUp } from 'lucide-react';
import { cn } from "@/lib/utils"; // ADDED THIS LINE: Import the cn utility

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction and Retention Strategy",
      description: "Acquired and cleaned telecom customer data using Python and SQL, improving dataset reliability by 92%. Used machine learning models (Logistic Regression, Random Forest) to predict churn, achieving 87% model accuracy. Presented churn insights via Power BI/Tableau dashboards, increasing stakeholder engagement by 70%. Automated monthly data ingestion and report generation using PySpark ETL pipeline, reducing manual work by 65%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", // Placeholder image: Replace with an image relevant to churn prediction/ML
      date: "Jul 2024",
      category: "Data Science | Machine Learning",
      icon: Brain, // Appropriate icon for ML/strategy
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "Tableau", "PySpark"],
      achievements: [
        "Acquired and cleaned telecom customer data using Python and SQL, improving dataset reliability by 92%.",
        "Used machine learning models (Logistic Regression, Random Forest) to predict churn, achieving 87% model accuracy.",
        "Presented churn insights via Power BI/Tableau dashboards, increasing stakeholder engagement by 70%.",
        "Automated monthly data ingestion and report generation using PySpark ETL pipeline, reducing manual work by 65%."
      ],
      metrics: {
        "Dataset Reliability": "92%",
        "Model Accuracy": "87%",
        "Stakeholder Engagement": "70%",
        "Manual Work Reduction": "65%"
      },
      githubLink: "https://github.com/your-username/Customer-Churn-Prediction-Repo", // **UPDATE THIS LINK**
      liveDemoLink: "#" // Replace with live demo link if available
    },
    {
      title: "Retail Sales Analytics and Forecasting System",
      description: "Consolidated multi-source retail data into Hive tables and transformed it with PySpark, enhancing data integration by 80%. Designed interactive dashboards in Power BI and Tableau to reveal product and regional trends, improving sales visibility by 75%. Forecasted future demand using ARIMA and Prophet models, raising forecasting accuracy to 82%. Optimized inventory planning based on analytics, leading to 20% fewer stockouts and 18% cost savings.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", // Placeholder image: Replace with an image relevant to retail analytics/forecasting
      date: "Oct 2023",
      category: "Business Intelligence | Forecasting",
      icon: TrendingUp, // Appropriate icon for analytics/forecasting
      technologies: ["PySpark", "Power BI", "Tableau", "ARIMA", "Prophet"],
      achievements: [
        "Consolidated multi-source retail data into Hive tables and transformed it with PySpark, enhancing data integration by 80%.",
        "Designed interactive dashboards in Power BI and Tableau to reveal product and regional trends, improving sales visibility by 75%.",
        "Forecasted future demand using ARIMA and Prophet models, raising forecasting accuracy to 82%.",
        "Optimized inventory planning based on analytics, leading to 20% fewer stockouts and 18% cost savings."
      ],
      metrics: {
        "Data Integration Enhancement": "80%",
        "Sales Visibility Improvement": "75%",
        "Forecasting Accuracy": "82%",
        "Stockouts Reduction": "20%",
        "Cost Savings": "18%"
      },
      githubLink: "https://github.com/your-username/Retail-Sales-Analytics-Repo", // **UPDATE THIS LINK**
      liveDemoLink: "#" // Replace with live demo link if available
    },
    // Existing projects:
    {
      title: "AutoFix Agent – Python-based Self-Healing UI Automation Bot",
      description: "Developed an intelligent self-healing agent using Python + Selenium that monitors web-based systems and autocorrects broken UI behaviors such as changed buttons, forms, or URL structures. Implemented a dynamic fallback system with 80% recovery success rate, using JSON. Utilizes JSON-driven healing logic with conditional scanning for 80%+ recovery accuracy. Reduced manual QA effort by 90% through resilient navigation and auto-submission capabilities.",
      image: "/healing.jpeg", // Placeholder image: Ensure this image is in your public folder
      date: "Jul 2024",
      category: "Automation | AI",
      icon: Bot,
      technologies: ["Python", "Selenium", "JSON", "CRON", "WebDriver"],
      achievements: [
        "Implemented a dynamic fallback system with 80% recovery success rate",
        "Utilized JSON-driven healing logic with conditional scanning for 80%+ recovery accuracy",
        "Reduced manual QA effort by 90% through resilient navigation and auto-submission capabilities"
      ],
      metrics: {
        "Recovery Success Rate": "80%+",
        "Manual QA Effort Reduction": "90%"
      },
      githubLink: "https://github.com/K-hitesh/autofix-agent",
      liveDemoLink: "#"
    },
    {
      title: "XKCD Email Subscription System",
      description: "XKCD Email Subscription System is a Python-based automation project that sends daily XKCD comics to verified email subscribers. It reduces manual comic checking effort by 100% and automates delivery with 99.9% uptime using scheduled CRON jobs. The system ensures secure access with email verification, improving subscription authenticity by over 95%. Built using Python, SQLite, and Gmail SMTP, it's a lightweight, scalable solution with over 80% code modularity for easy upgrades.",
      image: "/mail.jpeg", // Corrected to use the image you provided
      date: "Jul 2024",
      category: "Web Automation",
      icon: Mail,
      technologies: ["Python", "SQLite", "Gmail SMTP", "CRON jobs"],
      achievements: [
        "Reduced manual comic checking effort by 100%",
        "Automated delivery with 99.9% uptime using scheduled CRON jobs",
        "Ensured secure access with email verification, improving subscription authenticity by over 95%",
        "Achieved over 80% code modularity for easy upgrades"
      ],
      metrics: {
        "Manual Effort Reduction": "100%",
        "Uptime": "99.9%",
        "Authenticity Improvement": "95%+"
      },
      githubLink: "https://github.com/K-hitesh/xkcd-email-subscription",
      liveDemoLink: "#"
    },
    {
      title: "AutoData Extractor – Intelligent Web Scraping Agent",
      description: "Built a Python-based autonomous agent to scrape tabular data from dynamic websites with inconsistent HTML structures. Implemented a fallback-based selector mechanism that improved data extraction success rate by 85% across varied web layouts. Reduced manual data collection time by 90% using scheduled runs and structured JSON outputs. Achieved 80% code modularity, enabling reuse across finance, e-commerce, and logistics domains.",
      image: "/dataextractor.jpeg", // Placeholder: Ensure this image is in your public folder
      date: "Oct 2024",
      category: "Web Scraping | Data Extraction",
      icon: Database,
      technologies: ["Python", "Selenium"],
      achievements: [
        "Improved data extraction success rate by 85% across varied web layouts",
        "Reduced manual data collection time by 90% using scheduled runs and structured JSON outputs",
        "Achieved 80% code modularity, enabling reuse across multiple domains"
      ],
      metrics: {
        "Extraction Success Rate": "85%",
        "Time Reduction": "90%",
        "Code Modularity": "80%"
      },
      githubLink: "https://github.com/K-hitesh/autodata-extractor",
      liveDemoLink: "#"
    },
    {
      title: "API Testing Automation with Python & Pytest",
      description: "Automated 15+ test cases for REST APIs using requests, pytest, and Postman, achieving 95% API coverage. Created reusable test functions and assertions, improving test scalability by 70% across modules. Integrated HTML reporting with pytest-html, enhancing debug traceability by 80%. Validated edge cases and error responses, increasing API test reliability by 90%.",
      image: "/apitesting.jpg", // Placeholder: Ensure this image is in your public folder
      date: "Feb 2024",
      category: "API Automation | Testing",
      icon: Code,
      technologies: ["Python", "Pytest", "Requests", "Postman", "pytest-html"],
      achievements: [
        "Automated 15+ test cases for REST APIs achieving 95% API coverage",
        "Created reusable test functions and assertions, improving test scalability by 70%",
        "Integrated HTML reporting with pytest-html, enhancing debug traceability by 80%",
        "Validated edge cases and error responses, increasing API test reliability by 90%"
      ],
      metrics: {
        "API Coverage": "95%",
        "Test Scalability Improvement": "70%",
        "Debug Traceability Enhancement": "80%",
        "API Test Reliability": "90%"
      },
      githubLink: "https://github.com/K-hitesh/api-testing-project",
      liveDemoLink: "#"
    },
    {
      title: "Air Pollution Analysis and Visualization",
      description: "Designed a dynamic Tableau dashboard analyzing air pollution trends across 5+ regions, improving data accessibility by 80%. Integrated 1M+ data points from 4 sources with 95% accuracy, enabling comprehensive analysis.",
      image: "/air.jpeg", // Placeholder: Replace with a specific image for air pollution analysis
      date: "Jul 2024",
      category: "Data Analytics",
      icon: BarChart3,
      technologies: ["Tableau", "SQL", "Data Visualization"],
      achievements: [
        "Created 6+ interactive visualizations including geospatial maps",
        "Boosted analytical efficiency by 70%",
        "Automated data updates, reducing manual work by 40%",
        "Provided real-time insights for decision making"
      ],
      metrics: {
        regions: "5+",
        dataPoints: "1M+",
        accuracy: "95%",
        efficiency: "70%"
      },
      githubLink: "https://github.com/your-username/Air-Pollution-Analysis-Repo",
      liveDemoLink: "#"
    },
    {
      title: "ServiceXpress - Responsive Website",
      description: "Developed a responsive website as part of a team effort, contributing to 30% of the overall design and layout implementation. Integrated APIs to form a smooth interface between the database and the platform. As part of the entrepreneur project, we also developed a real-time web application called ServiceXpress.",
      image: "/service.jpeg", // Placeholder: Replace with a specific image for web development
      date: "Dec 2023",
      category: "Web Development",
      icon: Globe,
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      achievements: [
        "Contributed to 30% of overall design and layout implementation",
        "Handled 40% of backend integration tasks",
        "Used HTML and CSS for 60% of site customization",
        "Increased user engagement by 25% with JavaScript enhancements"
      ],
      metrics: {
        contribution: "30%",
        backend: "40%",
        frontend: "60%",
        engagement: "25%"
      },
      githubLink: "https://github.com/K-hitesh/servicexpress",
      liveDemoLink: "#"
    },
    {
      title: "Sales and Revenue Dashboard",
      description: "Created an interactive Power BI dashboard to analyze sales trends and revenue performance. Integrated data from Excel, SQL Server, and APIs, performing data cleaning and transformation using Power Query.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", // Placeholder: Replace with a specific image for dashboards/BI
      date: "Oct 2023",
      category: "Business Intelligence",
      icon: Database,
      technologies: ["Power BI", "SQL", "Excel", "Power Query"],
      achievements: [
        "Integrated data from multiple sources (Excel, SQL Server, APIs)",
        "Performed comprehensive data cleaning and transformation",
        "Optimized report performance using aggregations and indexing",
        "Reduced manual reporting by 60%",
        "Provided real-time insights for decision-making"
      ],
      metrics: {
        sources: "3+",
        automation: "60%",
        performance: "Optimized",
        insights: "Real-time"
      },
      githubLink: "https://github.com/your-username/Sales-Revenue-Dashboard-Repo",
      liveDemoLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing technical skills and problem-solving abilities through real-world applications 
              in data analytics, web development, and business intelligence.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-glow transition-smooth">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Project Image Container with aspect-video for consistent sizing */}
                    <div className={cn(
                      "relative overflow-hidden",
                      "aspect-video",
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    )}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-primary/20"></div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/90">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="mr-1 h-4 w-4" />
                            {project.date}
                          </div>
                        </div>
                        <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6">
                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Achievements</h4>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Project Metrics */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          {Object.entries(project.metrics).map(([key, value], i) => (
                            <div key={i} className="text-center p-3 bg-muted/50 rounded-lg">
                              <div className="text-lg font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          {project.githubLink && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                              </a>
                            </Button>
                          )}
                          {project.liveDemoLink && project.liveDemoLink !== "#" && (
                            <Button size="sm" asChild>
                              <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Project Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <p className="text-muted-foreground">Major Projects</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">80%+</div>
              <p className="text-muted-foreground">Avg Efficiency Boost</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-glow transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground">Data Points Processed</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;