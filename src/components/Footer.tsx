
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max section-padding">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              JK
            </div>
            <span className="ml-3 text-xl font-semibold">Jan Kowalski</span>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2024 Jan Kowalski. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
