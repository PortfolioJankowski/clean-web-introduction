
export const translations = {
  pl: {
    nav: {
      about: 'O mnie',
      product: 'Mój Produkt',
      services: 'Usługi',
      contact: 'Kontakt'
    },
    hero: {
      available: 'Dostępny do współpracy',
      greeting: 'Cześć, jestem',
      description: 'Full Stack Developer z pasją do tworzenia nowoczesnych rozwiązań technologicznych. Specjalizuję się w budowaniu skalowalnych aplikacji webowych i desktopowych.',
      technologies: 'Technologie',
      education: 'Wykształcenie',
      educationItems: [
        'Informatyka, Politechnika Warszawska (2018-2022)',
        'Certyfikat Microsoft Azure Solutions Architect (2023)',
        'Udemy - Advanced .NET Development (2022)'
      ]
    },
    product: {
      title: 'Odkryj Mój Produkt',
      subtitle: 'Nowoczesne Rozwiązanie Biznesowe',
      description: 'Zaawansowana aplikacja webowa zbudowana z użyciem najnowszych technologii .NET i React, zaprojektowana aby uprościć procesy biznesowe i zwiększyć produktywność.',
      benefits: [
        'Intuicyjny interfejs użytkownika',
        'Zaawansowana analityka i raporty',
        'Integracja z systemami zewnętrznymi',
        'Bezpieczeństwo na najwyższym poziomie'
      ],
      targetAudience: 'Idealne dla średnich i dużych przedsiębiorstw poszukujących kompleksowych rozwiązań do zarządzania procesami biznesowymi.',
      learnMore: 'Dowiedz się więcej',
      tryNow: 'Wypróbuj teraz'
    },
    services: {
      title: 'Moje Usługi',
      subtitle: 'Jak mogę Ci pomóc?',
      description: 'Oferuję kompleksowe usługi z zakresu rozwoju oprogramowania i konsultacji technicznych.',
      items: [
        {
          title: 'Rozwój Oprogramowania',
          description: 'Tworzenie nowoczesnych aplikacji webowych i desktopowych z użyciem .NET, React i najnowszych technologii.'
        },
        {
          title: 'Konsultacje Techniczne',
          description: 'Doradztwo w zakresie architektury systemów i wyboru optymalnych rozwiązań technologicznych.'
        },
        {
          title: 'Optymalizacja Wydajności',
          description: 'Analiza i optymalizacja wydajności aplikacji oraz infrastruktury chmurowej Azure.'
        },
        {
          title: 'Audyty Bezpieczeństwa',
          description: 'Kompleksowe audyty bezpieczeństwa aplikacji i systemów informatycznych.'
        }
      ]
    },
    contact: {
      title: 'Skontaktuj się ze mną',
      subtitle: 'Masz Pytanie?',
      description: 'Jestem otwarty na nowe możliwości współpracy. Skontaktuj się ze mną, aby omówić Twój projekt.',
      form: {
        name: 'Imię',
        email: 'E-mail',
        subject: 'Temat',
        message: 'Wiadomość',
        send: 'Wyślij Wiadomość'
      }
    },
    footer: {
      rights: 'Wszystkie prawa zastrzeżone.'
    }
  },
  en: {
    nav: {
      about: 'About',
      product: 'My Product',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      available: 'Available for collaboration',
      greeting: "Hi, I'm",
      description: 'Full Stack Developer passionate about creating modern technological solutions. I specialize in building scalable web and desktop applications.',
      technologies: 'Technologies',
      education: 'Education',
      educationItems: [
        'Computer Science, Warsaw University of Technology (2018-2022)',
        'Microsoft Azure Solutions Architect Certificate (2023)',
        'Udemy - Advanced .NET Development (2022)'
      ]
    },
    product: {
      title: 'Discover My Product',
      subtitle: 'Modern Business Solution',
      description: 'Advanced web application built with cutting-edge .NET and React technologies, designed to simplify business processes and increase productivity.',
      benefits: [
        'Intuitive user interface',
        'Advanced analytics and reports',
        'External systems integration',
        'Top-level security'
      ],
      targetAudience: 'Perfect for medium and large enterprises looking for comprehensive business process management solutions.',
      learnMore: 'Learn more',
      tryNow: 'Try now'
    },
    services: {
      title: 'My Services',
      subtitle: 'How can I help you?',
      description: 'I offer comprehensive software development and technical consulting services.',
      items: [
        {
          title: 'Software Development',
          description: 'Creating modern web and desktop applications using .NET, React and latest technologies.'
        },
        {
          title: 'Technical Consulting',
          description: 'Consulting on system architecture and choosing optimal technological solutions.'
        },
        {
          title: 'Performance Optimization',
          description: 'Analysis and optimization of application performance and Azure cloud infrastructure.'
        },
        {
          title: 'Security Audits',
          description: 'Comprehensive security audits of applications and IT systems.'
        }
      ]
    },
    contact: {
      title: 'Contact me',
      subtitle: 'Have a Question?',
      description: "I'm open to new collaboration opportunities. Contact me to discuss your project.",
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      }
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

export const useTranslations = (language: 'pl' | 'en') => {
  return translations[language];
};
