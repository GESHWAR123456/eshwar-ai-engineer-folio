import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through practical applications and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Current Status */}
          <div className="relative animate-fade-in-up">
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center shadow-glow">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className="ml-6 flex-grow">
                <div className="bg-card p-6 rounded-2xl shadow-card hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-poppins text-2xl font-bold text-foreground">
                      Currently Seeking Opportunities
                    </h3>
                    <div className="flex items-center text-accent font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Present</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Actively seeking internship and entry-level opportunities in AI/ML engineering, 
                    data science, or electrical engineering roles where I can apply my technical skills 
                    and contribute to innovative projects.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Looking for AI/ML Engineer positions</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Open to internships and graduate trainee programs</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Interested in research and development roles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Projects as Experience */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className="ml-6 flex-grow">
                <div className="bg-card p-6 rounded-2xl shadow-card hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-poppins text-2xl font-bold text-foreground">
                      Academic Project Developer
                    </h3>
                    <div className="flex items-center text-primary font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  
                  <div className="text-accent font-medium mb-2">
                    Bellari Institute of Technology and Management
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Leading multiple AI/ML and electrical engineering projects as part of academic 
                    curriculum, focusing on practical implementation and real-world problem-solving.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Developed machine learning models using TensorFlow and Python</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Designed electrical systems with embedded programming</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Collaborated on team projects and technical documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-2xl">
              <h3 className="font-poppins text-2xl font-bold text-foreground mb-4">
                Ready to Make an Impact
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm eager to bring my passion for AI/ML and engineering to a dynamic team. 
                Let's connect and discuss how I can contribute to your organization's success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-card p-4 rounded-lg shadow-card">
                  <div className="font-poppins font-semibold text-accent">Available For:</div>
                  <div className="text-sm text-muted-foreground">Full-time • Internships • Projects</div>
                </div>
                
                <div className="bg-card p-4 rounded-lg shadow-card">
                  <div className="font-poppins font-semibold text-primary">Location:</div>
                  <div className="text-sm text-muted-foreground">Bellari, Karnataka • Remote</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;