import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Artificial Intelligence and Machine Learning",
      institution: "Bellari Institute of Technology and Management, Bellari",
      duration: "2022 - 2026 (Expected)",
      percentage: "65%",
      status: "Current",
      courses: [
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks", 
        "Data Structures & Algorithms",
        "Python Programming",
        "Computer Vision",
        "Natural Language Processing"
      ],
      gradient: "from-accent to-accent-glow",
      icon: GraduationCap
    },
    {
      degree: "Diploma",
      field: "Electrical and Electronics Engineering",
      institution: "Government Polytechnic College",
      duration: "2019 - 2022",
      percentage: "89%",
      status: "Completed",
      courses: [
        "Circuit Design & Analysis",
        "Power Systems Engineering",
        "Embedded Programming",
        "Microcontroller Systems",
        "Electrical Machines",
        "Control Systems"
      ],
      gradient: "from-primary to-primary-glow",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in AI/ML and Electrical Engineering through comprehensive academic programs
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card rounded-3xl shadow-elegant hover:shadow-hover transition-all duration-500 overflow-hidden hover-lift">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${edu.gradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <edu.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="font-poppins text-2xl font-bold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-white/90 text-lg">
                            {edu.field}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white/20 text-white'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Institution Info */}
                      <div>
                        <div className="mb-6">
                          <h4 className="font-poppins font-semibold text-foreground mb-3 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-accent" />
                            Institution Details
                          </h4>
                          
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              <span className="font-medium text-foreground">Institution:</span><br />
                              {edu.institution}
                            </p>
                            
                            <p className="text-muted-foreground flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-accent" />
                              <span className="font-medium text-foreground">Duration:</span>
                              <span className="ml-2">{edu.duration}</span>
                            </p>
                            
                            <div className="flex items-center space-x-4 mt-4">
                              <div className="bg-secondary p-4 rounded-lg text-center flex-1">
                                <div className="font-poppins text-2xl font-bold text-accent">
                                  {edu.percentage}
                                </div>
                                <div className="text-sm text-muted-foreground">Percentage</div>
                              </div>
                              
                              {edu.status === 'Current' && (
                                <div className="bg-secondary p-4 rounded-lg text-center flex-1">
                                  <div className="font-poppins text-2xl font-bold text-primary">
                                    2026
                                  </div>
                                  <div className="text-sm text-muted-foreground">Expected</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Courses */}
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground mb-3">
                          Key Courses & Subjects
                        </h4>
                        
                        <div className="grid grid-cols-1 gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <div 
                              key={course}
                              className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-200"
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.gradient}`}></div>
                              <span className="text-sm font-medium text-foreground">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements Summary */}
          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <h3 className="font-poppins text-2xl font-bold text-primary mb-6">
                Academic Excellence
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-poppins text-3xl font-bold text-accent mb-2">89%</div>
                  <div className="text-muted-foreground">Diploma Score</div>
                </div>
                
                <div className="text-center">
                  <div className="font-poppins text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Years of Study</div>
                </div>
                
                <div className="text-center">
                  <div className="font-poppins text-3xl font-bold text-accent mb-2">12+</div>
                  <div className="text-muted-foreground">Technical Subjects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;