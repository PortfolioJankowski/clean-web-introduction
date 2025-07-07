
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
