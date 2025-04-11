
import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-theme-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-theme-dark to-transparent"></div>
      
      <div className="section-container">
        <h2 className="section-title before:content-[''] before:block before:w-20 before:h-1 before:bg-theme-purple before:mb-4">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-white/80 mb-8">
                Feel free to reach out for collaboration opportunities, job inquiries, or just to say hello! I'm always open to discussing new projects and ideas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-theme-purple/20 rounded-lg">
                    <Mail className="w-5 h-5 text-theme-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:gauthamkrishnaarun1679@gmail.com" className="text-theme-gray hover:text-theme-purple transition-colors">
                      gauthamkrishnaarun1679@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-theme-purple/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-theme-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-theme-gray">Pathanamthitta, Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-white/80 mb-2 block">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-theme-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-white/80 mb-2 block">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-theme-purple"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="text-white/80 mb-2 block">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Message subject"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-theme-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-white/80 mb-2 block">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-theme-purple min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-theme-purple hover:bg-theme-purple-dark text-white w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
