import aiTechIllustration from '@/assets/ai-tech-illustration.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am an aspiring <span className="text-accent font-semibold">Artificial Intelligence and Machine Learning Engineer</span> with a solid foundation in Electrical and Electronics Engineering. I am passionate about developing innovative solutions by applying AI/ML techniques and modern technologies.
              </p>
              
              <p>
                With hands-on knowledge of programming, electrical systems, and data-driven applications, I aim to contribute to impactful projects in a forward-thinking organization. My journey combines the precision of electrical engineering with the innovation of artificial intelligence.
              </p>
              
              <p>
                I believe in the power of technology to solve real-world problems and am constantly learning new skills to stay at the forefront of AI/ML development. My goal is to bridge the gap between traditional engineering and cutting-edge AI solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                <h3 className="font-poppins text-xl font-semibold text-primary mb-2">AI/ML Focus</h3>
                <p className="text-muted-foreground">Deep Learning, TensorFlow, Scikit-learn</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                <h3 className="font-poppins text-xl font-semibold text-primary mb-2">Engineering Base</h3>
                <p className="text-muted-foreground">Electrical Systems, Circuit Analysis</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                <h3 className="font-poppins text-xl font-semibold text-primary mb-2">Programming</h3>
                <p className="text-muted-foreground">Python, C++, MATLAB</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg shadow-card hover-lift">
                <h3 className="font-poppins text-xl font-semibold text-primary mb-2">Innovation</h3>
                <p className="text-muted-foreground">Combining AI with Engineering</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl transform rotate-6"></div>
              <img 
                src="/lovable-uploads/9f05e5e7-d599-4765-82c8-81ee3d462379.png"
                alt="G. Eshwar - Aspiring AI & ML Engineer"
                className="relative rounded-2xl shadow-elegant w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;