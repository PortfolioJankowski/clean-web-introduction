
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Code, Database, Cloud, Smartphone, Monitor, Users, Zap, Shield, ArrowRight, Menu, X } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('o-mnie');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['o-mnie', 'moj-produkt', 'uslugi', 'kontakt'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Rozwój Oprogramowania",
      description: "Tworzenie nowoczesnych aplikacji webowych i mobilnych z użyciem najnowszych technologii."
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Konsultacje Techniczne",
      description: "Doradztwo w zakresie architektury systemów i wyboru optymalnych rozwiązań technologicznych."
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Optymalizacja Wydajności",
      description: "Analiza i optymalizacja wydajności aplikacji oraz infrastruktury chmurowej."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Audyty Bezpieczeństwa",
      description: "Kompleksowe audyty bezpieczeństwa aplikacji i systemów informatycznych."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                JK
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-900">Jan Kowalski</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'o-mnie', label: 'O mnie' },
                { id: 'moj-produkt', label: 'Mój Produkt' },
                { id: 'uslugi', label: 'Usługi' },
                { id: 'kontakt', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              {[
                { id: 'o-mnie', label: 'O mnie' },
                { id: 'moj-produkt', label: 'Mój Produkt' },
                { id: 'uslugi', label: 'Usługi' },
                { id: 'kontakt', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - O mnie */}
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

      {/* Product Section */}
      <section id="moj-produkt" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Mój Produkt
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Odkryj TaskFlow Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nowoczesna aplikacja do zarządzania projektami, która pomaga zespołom 
              współpracować efektywniej i osiągać cele biznesowe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="TaskFlow Pro na laptopie"
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kluczowe Korzyści
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Users className="w-5 h-5" />, text: "Współpraca zespołowa w czasie rzeczywistym" },
                  { icon: <Zap className="w-5 h-5" />, text: "Automatyzacja powtarzalnych zadań" },
                  { icon: <Monitor className="w-5 h-5" />, text: "Intuicyjny dashboard z analitykami" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Aplikacja mobilna dla iOS i Android" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Dla kogo?</h4>
                <p className="text-gray-600">
                  Idealny dla startupów, zespołów projektowych i małych firm, które chcą 
                  zwiększyć produktywność i lepiej zarządzać swoimi projektami.
                </p>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Wypróbuj teraz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline">
                  Dowiedz się więcej
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Moje Usługi
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Jak mogę Ci pomóc?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferuję kompleksowe usługi z zakresu rozwoju oprogramowania 
              i konsultacji technicznych.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Kontakt
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Masz pytanie? Skontaktuj się ze mną
            </h2>
            <p className="text-xl text-gray-600">
              Jestem zawsze otwarty na nowe projekty i współpracę. 
              Napisz do mnie, a odpowiem w ciągu 24 godzin.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Imię
                      </label>
                      <Input id="name" placeholder="Twoje imię" className="border-gray-200" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail
                      </label>
                      <Input id="email" type="email" placeholder="twoj@email.com" className="border-gray-200" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Temat
                    </label>
                    <Input id="subject" placeholder="Temat wiadomości" className="border-gray-200" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Wiadomość
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Opisz swój projekt lub zadaj pytanie..." 
                      className="min-h-32 border-gray-200"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                    Wyślij Wiadomość
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                  * Formularz wykorzystuje Formspree do wysyłki e-maili
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
