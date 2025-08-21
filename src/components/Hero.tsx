import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 25, 47, 0.9), rgba(0, 191, 166, 0.1)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-poppins text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Aspiring AI & ML Engineer
          </h1>
          
          {/* Subheading */}
          <h2 className="font-poppins text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in-up delay-200">
            Electrical & Electronics Foundation
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Passionate about building AI-driven solutions and combining engineering with innovation to create impactful technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-600">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-glow text-accent-foreground px-8 py-3 text-lg font-medium shadow-glow hover:shadow-hover transition-all duration-300"
            >
              Hire Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg font-medium backdrop-blur-sm"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up delay-800">
            <a 
              href="mailto:p.kamalakamala12@gmail.com"
              className="p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground" />
            </a>
            
            <a 
              href="https://github.com/GESHWAR123456/GESHWAR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground" />
            </a>
            
            <a 
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;