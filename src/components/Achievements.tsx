import { Trophy, Users, Target, Star, Award, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "AI/ML Hackathon Participant",
      description: "Active participant in multiple AI/ML hackathons, showcasing problem-solving skills and innovative thinking in competitive environments.",
      category: "Competition",
      highlight: "Top 10 Finalist",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Users,
      title: "Technical Club Member",
      description: "Active member of engineering technical clubs, contributing to workshops, seminars, and peer learning initiatives.",
      category: "Leadership",
      highlight: "Core Member",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Target,
      title: "Technical Competition Recognition",
      description: "Recognized for outstanding contributions and innovative solutions in various technical competitions and project showcases.",
      category: "Recognition",
      highlight: "Multiple Awards",
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Consistent academic performance with 89% in Diploma and maintaining strong grades in B.E. AI/ML program.",
      category: "Academic",
      highlight: "High Achiever",
      gradient: "from-primary to-primary-glow"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating milestones in technical competitions, academic excellence, and community contributions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`group bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover-lift overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Achievement Header */}
              <div className={`bg-gradient-to-r ${achievement.gradient} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <div className="text-white/80 text-sm font-medium mb-1">
                        {achievement.category}
                      </div>
                      <h3 className="font-poppins text-xl font-bold text-white">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">
                        {achievement.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Content */}
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-secondary to-background p-8 rounded-3xl">
            <h3 className="font-poppins text-2xl font-bold text-center text-primary mb-8">
              Achievement Highlights
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-accent to-accent-glow mb-4 shadow-glow">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-2xl font-bold text-foreground mb-2">5+</div>
                <div className="text-muted-foreground text-sm">Competitions Participated</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary-glow mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-2xl font-bold text-foreground mb-2">3+</div>
                <div className="text-muted-foreground text-sm">Club Memberships</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-accent to-accent-glow mb-4 shadow-glow">
                  <Medal className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-2xl font-bold text-foreground mb-2">89%</div>
                <div className="text-muted-foreground text-sm">Academic Excellence</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-primary-glow mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="font-poppins text-2xl font-bold text-foreground mb-2">2+</div>
                <div className="text-muted-foreground text-sm">Years Active Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="bg-card p-8 rounded-2xl shadow-card max-w-3xl mx-auto">
            <h3 className="font-poppins text-2xl font-bold text-primary mb-4">
              Continuing the Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These achievements represent just the beginning of my journey in AI/ML and engineering. 
              I'm committed to continuous learning, innovation, and making meaningful contributions 
              to the technology industry while building upon this foundation of success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;