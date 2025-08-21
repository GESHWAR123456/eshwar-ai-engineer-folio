import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Education Section */}
        <Education />
        
        {/* Achievements Section */}
        <Achievements />
        
        {/* Certifications Section */}
        <Certifications />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;