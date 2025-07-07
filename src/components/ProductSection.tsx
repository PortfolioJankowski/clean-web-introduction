
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Zap, Monitor, Smartphone, ArrowRight } from 'lucide-react';
import { Benefit } from '@/types';

const ProductSection = () => {
  const benefits: Benefit[] = [
    { icon: <Users className="w-5 h-5" />, text: "Współpraca zespołowa w czasie rzeczywistym" },
    { icon: <Zap className="w-5 h-5" />, text: "Automatyzacja powtarzalnych zadań" },
    { icon: <Monitor className="w-5 h-5" />, text: "Intuicyjny dashboard z analitykami" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Aplikacja mobilna dla iOS i Android" }
  ];

  return (
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
              {benefits.map((benefit, index) => (
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
  );
};

export default ProductSection;
