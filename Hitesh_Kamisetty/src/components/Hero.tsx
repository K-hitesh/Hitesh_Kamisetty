import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">HITESH</span>
            <br />
            <span className="text-foreground">KAMISETTY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Data Analyst | Computer Science Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transforming complex data into actionable insights with expertise in analytics, 
            visualization, and machine learning. Passionate about driving data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="shadow-glow text-lg px-8 py-6"
              onClick={() => scrollToSection('about')}
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground mb-4">Get in touch</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:hiteshkamisetty9@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                hiteshkamisetty9@gmail.com
              </a>
              <a 
                href="tel:+917386249004"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                +91-7386249004
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-smooth"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;