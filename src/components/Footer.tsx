import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Mail,
      url: "mailto:p.kamalakamala12@gmail.com",
      label: "Email"
    },
    {
      icon: Github,
      url: "https://github.com/GESHWAR123456/GESHWAR",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/feed/",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-poppins text-2xl font-bold mb-2">
              G. Eshwar
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Aspiring AI & ML Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target={social.url.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} G. Eshwar. Built with 
              <Heart className="w-4 h-4 mx-1 text-accent" />
              using React & TypeScript
            </p>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm max-w-2xl mx-auto">
            This portfolio showcases my journey as an AI/ML engineer with a strong foundation in 
            electrical engineering. I'm passionate about creating innovative solutions and contributing 
            to impactful technology projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;