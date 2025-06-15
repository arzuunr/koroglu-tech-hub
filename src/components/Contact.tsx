
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm always eager to discuss opportunities in data science, blockchain technology, 
          or any intersection of physics and innovation. Let's build something amazing together!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            asChild 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            <a href="mailto:arzunurkoroglu@hotmail.com">
              Get In Touch
            </a>
          </Button>
          
          <div className="flex gap-4">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
            >
              <a href="https://github.com/arzuunrk" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
            >
              <a href="https://www.linkedin.com/in/arzu-koroglu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Location</h4>
              <p className="text-slate-300">Istanbul, Türkiye</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Email</h4>
              <p className="text-slate-300">arzunurkoroglu@hotmail.com</p>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Phone</h4>
              <p className="text-slate-300">+90 536 834 3357</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-sm">
            © 2024 Arzu Köroğlu. Bridging physics and technology for a better tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
