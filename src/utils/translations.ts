
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
      badge: 'Nowy Produkt',
      title: 'Odkryj Mój Produkt',
      description: 'Zaawansowana aplikacja desktopowa zbudowana z użyciem .NET i WinForms, zaprojektowana aby uprościć procesy biznesowe i zwiększyć produktywność.',
      benefitsTitle: 'Kluczowe korzyści',
      benefits: {
        performance: 'Wysoka wydajność',
        security: 'Bezpieczeństwo danych',
        userFriendly: 'Łatwość użytkowania'
      },
      targetAudienceTitle: 'Dla kogo?',
      targetAudience: 'Idealne dla średnich i dużych przedsiębiorstw poszukujących kompleksowych rozwiązań do zarządzania procesami biznesowymi.',
      learnMore: 'Dowiedz się więcej',
      tryNow: 'Wypróbuj teraz'
    },
    services: {
      title: 'Moje Usługi',
      subtitle: 'Jak mogę Ci pomóc?',
      development: {
        title: 'Rozwój Oprogramowania',
        description: 'Tworzenie nowoczesnych aplikacji desktopowych i webowych z użyciem .NET, WinForms, React i najnowszych technologii.'
      },
      consulting: {
        title: 'Konsultacje Techniczne',
        description: 'Doradztwo w zakresie architektury systemów i wyboru optymalnych rozwiązań technologicznych.'
      },
      optimization: {
        title: 'Optymalizacja Wydajności',
        description: 'Analiza i optymalizacja wydajności aplikacji oraz infrastruktury chmurowej Azure.'
      },
      training: {
        title: 'Szkolenia VBA',
        description: 'Kompleksowe szkolenia z VBA i automatyzacji procesów w Microsoft Office.'
      }
    },
    contact: {
      title: 'Skontaktuj się ze mną',
      subtitle: 'Masz pytanie? Napisz do mnie!',
      formTitle: 'Formularz kontaktowy',
      formDescription: 'Wypełnij formularz, a odpowiem najszybciej jak to możliwe.',
      infoTitle: 'Informacje kontaktowe',
      responseTime: 'Czas odpowiedzi',
      responseDescription: 'Zazwyczaj odpowiadam w ciągu 24 godzin.',
      form: {
        name: 'Imię',
        namePlaceholder: 'Twoje imię',
        email: 'E-mail',
        emailPlaceholder: 'twoj@email.com',
        subject: 'Temat',
        subjectPlaceholder: 'Temat wiadomości',
        message: 'Wiadomość',
        messagePlaceholder: 'Opisz swój projekt lub pytanie...',
        send: 'Wyślij Wiadomość'
      }
    },
    footer: {
      description: 'Full Stack Developer specjalizujący się w .NET, WinForms, React i Azure.',
      quickLinks: 'Szybkie linki',
      followMe: 'Śledź mnie',
      copyright: '© 2024 Jan Kowalski. Wszystkie prawa zastrzeżone.'
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
      badge: 'New Product',
      title: 'Discover My Product',
      description: 'Advanced desktop application built with .NET and WinForms, designed to simplify business processes and increase productivity.',
      benefitsTitle: 'Key Benefits',
      benefits: {
        performance: 'High Performance',
        security: 'Data Security',
        userFriendly: 'User Friendly'
      },
      targetAudienceTitle: 'Target Audience',
      targetAudience: 'Perfect for medium and large enterprises looking for comprehensive business process management solutions.',
      learnMore: 'Learn more',
      tryNow: 'Try now'
    },
    services: {
      title: 'My Services',
      subtitle: 'How can I help you?',
      development: {
        title: 'Software Development',
        description: 'Creating modern desktop and web applications using .NET, WinForms, React and latest technologies.'
      },
      consulting: {
        title: 'Technical Consulting',
        description: 'Consulting on system architecture and choosing optimal technological solutions.'
      },
      optimization: {
        title: 'Performance Optimization',
        description: 'Analysis and optimization of application performance and Azure cloud infrastructure.'
      },
      training: {
        title: 'VBA Training',
        description: 'Comprehensive VBA training and Microsoft Office process automation.'
      }
    },
    contact: {
      title: 'Contact me',
      subtitle: 'Have a question? Write to me!',
      formTitle: 'Contact Form',
      formDescription: 'Fill out the form and I will respond as soon as possible.',
      infoTitle: 'Contact Information',
      responseTime: 'Response Time',
      responseDescription: 'I usually respond within 24 hours.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Describe your project or question...',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'Full Stack Developer specializing in .NET, WinForms, React and Azure.',
      quickLinks: 'Quick Links',
      followMe: 'Follow Me',
      copyright: '© 2024 Jan Kowalski. All rights reserved.'
    }
  }
};

export const useTranslations = (language: 'pl' | 'en') => {
  return translations[language];
};
