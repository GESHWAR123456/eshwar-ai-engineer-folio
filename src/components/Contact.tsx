import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageSquare,
  User,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b6214f2f-6904-440f-91c5-d05d475d18b5',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: formData.name,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Bellari, Karnataka, India",
      link: null
    },
    {
      icon: Mail,
      label: "Email",
      value: "p.kamalakamala12@gmail.com",
      link: "mailto:p.kamalakamala12@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7019254382",
      link: "tel:+917019254382"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/GESHWAR123456/GESHWAR",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://www.linkedin.com/feed/",
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI/ML projects or discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="mb-8">
              <h3 className="font-poppins text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently seeking opportunities in AI/ML engineering, data science, 
                and related fields. Whether you're a recruiter, potential collaborator, 
                or fellow tech enthusiast, I'm excited to connect and discuss possibilities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-xl flex items-center justify-center shadow-glow">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="font-medium text-foreground">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Follow Me Online
              </h4>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 bg-card p-4 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover-lift border border-transparent hover:border-accent/20`}
                  >
                    <div className={`p-2 bg-gradient-to-r ${social.gradient} rounded-lg shadow-glow`}>
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div>
                      <div className="font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {social.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Connect with me
                      </div>
                    </div>
                    
                    <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="shadow-elegant border-0 bg-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="font-poppins text-2xl font-bold text-foreground mb-2">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-foreground">
                      <User className="w-4 h-4 mr-2 text-accent" />
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-border focus:border-accent focus:ring-accent/20"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4 mr-2 text-accent" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-border focus:border-accent focus:ring-accent/20"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-foreground">
                      <MessageSquare className="w-4 h-4 mr-2 text-accent" />
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, opportunity, or how we can work together..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-border focus:border-accent focus:ring-accent/20 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent text-accent-foreground shadow-glow hover:shadow-hover transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Quick Response Note */}
                <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    ⚡ I typically respond within 24 hours. Looking forward to connecting with you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;