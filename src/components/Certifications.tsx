import { Award, BookOpen, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Advanced Machine Learning Certification",
      issuer: "PMD DEPARTMENT",
      description: "Comprehensive certification covering advanced ML algorithms, model optimization, and practical implementation techniques.",
      skills: ["Deep Learning", "Model Optimization", "Algorithm Implementation", "Performance Tuning"],
      status: "Completed",
      year: "2024",
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "AI/ML Workshop Series",
      issuer: "Technical Training Institute", 
      description: "Intensive workshop program focused on practical AI/ML applications, hands-on projects, and industry best practices.",
      skills: ["Python Programming", "TensorFlow", "Data Analysis", "Project Development"],
      status: "Completed",
      year: "2024",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "Electrical Systems Design",
      issuer: "Professional Development Center",
      description: "Specialized training in electrical system design, circuit analysis, and integration with modern technologies.",
      skills: ["Circuit Design", "System Integration", "AutoCAD", "MATLAB"],
      status: "Completed", 
      year: "2023",
      gradient: "from-accent to-accent-glow"
    }
  ];

  const upcomingCertifications = [
    {
      title: "AWS Machine Learning Specialty",
      issuer: "Amazon Web Services",
      expectedDate: "2025",
      description: "Cloud-based ML implementation and deployment strategies."
    },
    {
      title: "TensorFlow Developer Certificate", 
      issuer: "Google",
      expectedDate: "2025",
      description: "Official Google certification for TensorFlow expertise."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Certifications & Training
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through professional certifications and specialized training programs
          </p>
        </div>

        {/* Completed Certifications */}
        <div className="mb-16">
          <h3 className="font-poppins text-2xl font-bold text-foreground mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-accent" />
            Completed Certifications
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover-lift overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Certificate Header */}
                <div className={`bg-gradient-to-r ${cert.gradient} p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <h4 className="font-poppins text-xl font-bold text-white mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-white/90 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                        <span className="text-white text-sm font-medium">{cert.status}</span>
                      </div>
                      <span className="text-white/80 text-sm">{cert.year}</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  {/* Skills Covered */}
                  <div className="mb-6">
                    <h5 className="font-poppins font-semibold text-foreground mb-3">Skills Covered:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground hover:scale-105 transition-transform duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-poppins text-2xl font-bold text-foreground mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            Planned Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="bg-card p-6 rounded-xl shadow-card hover-lift border-l-4 border-accent"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-poppins text-lg font-bold text-foreground flex-grow">
                    {cert.title}
                  </h4>
                  <span className="text-accent font-medium text-sm">
                    {cert.expectedDate}
                  </span>
                </div>
                
                <p className="text-primary font-medium mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="bg-card p-8 rounded-2xl shadow-card text-center">
            <h3 className="font-poppins text-2xl font-bold text-primary mb-8">
              Certification Journey
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-accent to-accent-glow mb-4 shadow-glow">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-3xl font-bold text-foreground mb-2">3</div>
                <div className="text-muted-foreground">Completed Certifications</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary-glow mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-3xl font-bold text-foreground mb-2">2</div>
                <div className="text-muted-foreground">Planned Certifications</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-accent to-accent-glow mb-4 shadow-glow">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-3xl font-bold text-foreground mb-2">12+</div>
                <div className="text-muted-foreground">Skills Acquired</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                Committed to continuous professional development through industry-recognized certifications 
                and specialized training programs that enhance technical expertise and career growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;