
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { Technology } from '@/types';

const HeroSection = () => {
  const technologies: Technology[] = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' }
  ];

  return (
    <section id="o-mnie" className="py-20 lg:py-32">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Dostępny do współpracy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cześć, jestem <span className="text-primary">Jan Kowalski</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full Stack Developer z pasją do tworzenia nowoczesnych rozwiązań technologicznych. 
              Specjalizuję się w budowaniu skalowalnych aplikacji webowych i mobilnych.
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologie</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <Badge key={tech.name} variant="outline" className="px-3 py-2 text-sm">
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wykształcenie</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Informatyka, Politechnika Warszawska (2018-2022)</p>
                <p>• Certyfikat AWS Solutions Architect (2023)</p>
                <p>• Udemy - Advanced React Development (2022)</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                jan@example.com
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-blue-600 rounded-full p-2">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop&crop=face"
                  alt="Jan Kowalski"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
