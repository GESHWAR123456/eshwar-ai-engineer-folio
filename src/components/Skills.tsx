import { Code, Brain, Database, Wrench, Zap, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'C++', 'JavaScript'],
      color: 'accent'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['TensorFlow', 'Scikit-learn', 'Deep Learning', 'Data Preprocessing'],
      color: 'primary'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Data Analysis'],
      color: 'accent'
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['MATLAB', 'AutoCAD', 'Git', 'VS Code'],
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Electrical Knowledge',
      skills: ['Circuit Analysis', 'Power Systems', 'Microcontrollers', 'Embedded Systems'],
      color: 'accent'
    },
    {
      icon: Monitor,
      title: 'Web Technologies',
      skills: ['React', 'HTML/CSS', 'Node.js', 'RESTful APIs'],
      color: 'primary'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set combining traditional engineering with modern AI/ML technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`group bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 hover-lift animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                category.color === 'accent' 
                  ? 'bg-accent/10 text-accent' 
                  : 'bg-primary/10 text-primary'
              } group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8" />
              </div>

              {/* Category Title */}
              <h3 className="font-poppins text-2xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-secondary-foreground mr-2 mb-2 hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-4">
                <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      category.color === 'accent' 
                        ? 'bg-gradient-to-r from-accent to-accent-glow' 
                        : 'bg-gradient-to-r from-primary to-primary-glow'
                    }`}
                    style={{ 
                      width: `${85 + (index * 3)}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card p-6 rounded-2xl shadow-card">
            <div className="text-center">
              <div className="font-poppins text-3xl font-bold text-accent">6+</div>
              <div className="text-muted-foreground">Skill Categories</div>
            </div>
            
            <div className="w-px h-12 bg-border"></div>
            
            <div className="text-center">
              <div className="font-poppins text-3xl font-bold text-primary">20+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            
            <div className="w-px h-12 bg-border"></div>
            
            <div className="text-center">
              <div className="font-poppins text-3xl font-bold text-accent">2+</div>
              <div className="text-muted-foreground">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;