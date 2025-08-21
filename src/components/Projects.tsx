import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Zap, ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI/ML Prediction System",
      category: "Machine Learning",
      icon: Brain,
      description: "Developed a comprehensive machine learning project using Python and TensorFlow, focusing on improving accuracy and efficiency through advanced data preprocessing and model optimization techniques.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      highlights: [
        "Designed and implemented multiple ML models",
        "Achieved measurable improvement in prediction accuracy",
        "Optimized data preprocessing pipeline",
        "Conducted extensive performance testing"
      ],
      outcome: "Delivered 15% improvement in prediction accuracy compared to baseline models",
      gradient: "from-accent to-accent-glow"
    },
    {
      id: 2,
      title: "Smart Electrical System",
      category: "Electrical & Electronics",
      icon: Zap,
      description: "Designed and implemented an innovative electrical system that integrates machine learning concepts with traditional circuit analysis and embedded programming to enhance functionality and efficiency.",
      technologies: ["MATLAB", "AutoCAD", "Microcontrollers", "C++", "Circuit Design"],
      highlights: [
        "Integrated ML algorithms with electrical systems",
        "Applied circuit analysis for optimal design",
        "Implemented embedded programming solutions",
        "Achieved improved system reliability"
      ],
      outcome: "Delivered 20% improvement in system efficiency and enhanced reliability",
      gradient: "from-primary to-primary-glow"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative projects that combine AI/ML expertise with electrical engineering knowledge
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group bg-card border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover-lift overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-glow`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <div className="text-sm text-accent font-medium mb-1">
                      {project.category}
                    </div>
                    <CardTitle className="font-poppins text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              {/* Project Content */}
              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-3">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className={`p-4 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 border-l-4 border-current`}>
                  <h4 className="font-poppins font-semibold text-foreground mb-2">Project Outcome:</h4>
                  <p className="text-muted-foreground text-sm">{project.outcome}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent text-accent-foreground px-8 py-3 text-lg font-medium shadow-glow hover:shadow-hover transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;