import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate Data Analyst and Computer Science Engineering student with expertise in 
              transforming complex datasets into meaningful insights and actionable strategies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                  {/* Updated src to reference image from the public folder */}
                  <img 
                    src="/hitesh.jpg" 
                    alt="Hitesh Kamisetty"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Data Analyst & Engineering Student</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I am a dedicated Computer Science Engineering student specializing in Data Science and 
                  Data Engineering at Lovely Professional University. With hands-on experience in data 
                  analytics, machine learning, and business intelligence, I excel at uncovering patterns 
                  and trends that drive strategic decision-making.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My analytical approach combines technical expertise with business acumen to deliver 
                  comprehensive solutions. I'm continuously expanding my knowledge in emerging data 
                  technologies and methodologies to stay at the forefront of the field.
                </p>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="hover:shadow-glow transition-smooth">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-smooth">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Experience</p>
                      <p className="text-sm text-muted-foreground">2+ Years</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-glow transition-smooth md:col-span-2">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Freelance</p>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        Available
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Achievement */}
              <Card className="border-l-4 border-l-primary bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Recent Achievement</h4>
                  <p className="text-sm text-muted-foreground">
                    Received Letter of Recommendation from MedTourEasy for outstanding performance 
                    in data analytics project on chemical components analysis (June 2025)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;