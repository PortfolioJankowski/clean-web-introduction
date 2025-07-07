
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Shield } from 'lucide-react';
import { Service } from '@/types';

const ServicesSection = () => {
  const services: Service[] = [
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
  );
};

export default ServicesSection;
