export type Lang = "fr" | "en" | "ar";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      pricing: "Tarifs",
      why: "Pourquoi nous",
      contact: "Contact",
    },
    hero: {
      tagline: "Votre Partenaire Technologique à l'Ère Numérique",
      subtitle:
        "TechPro Solutions est une société IT full-service basée à Paris, spécialisée dans le développement web & mobile, le cloud, la cybersécurité, l'IA et bien plus encore.",
      cta: "Découvrir nos services",
      cta2: "Nous contacter",
    },
    stats: [
      { value: "10+", label: "Années d'expérience" },
      { value: "200+", label: "Projets réalisés" },
      { value: "50+", label: "Clients satisfaits" },
      { value: "15", label: "Experts" },
    ],
    about: {
      title: "À propos de nous",
      text: "TechPro Solutions est une société IT full-service qui livre des solutions numériques sur mesure aux entreprises en France et en Europe. Avec plus de 10 ans d'expérience, notre équipe pluridisciplinaire d'ingénieurs, de designers et de consultants accompagne les organisations dans la transformation de leur présence numérique, l'optimisation de leurs opérations et l'accélération de leur croissance grâce à la technologie.",
    },
    services: {
      title: "Nos Services",
      subtitle: "Des solutions complètes pour tous vos besoins numériques",
      pricing_label: "Tarif",
      timeline_label: "Délai",
      deliverables_label: "Livrables clés",
      items: [
        {
          id: "01",
          tag: "Frontend & Backend",
          name: "Développement Web",
          description:
            "Nous concevons et développons des sites web et applications web modernes et responsives, adaptés à votre marque — des landing pages aux plateformes e-commerce complexes et produits SaaS.",
          deliverables: [
            "Design & développement de sites sur mesure (React, Next.js, Vue.js)",
            "Plateformes e-commerce (Shopify, WooCommerce, développements custom)",
            "Applications web (SPA, PWA)",
            "Conception API et développement backend (Python Flask, Node.js)",
            "Optimisation des performances & SEO",
            "Sites bilingues (Arabe/Anglais, support RTL complet)",
          ],
          pricing: "À partir de 2 000 EUR",
          timeline: "2 – 12 semaines",
        },
        {
          id: "02",
          tag: "iOS & Android",
          name: "Développement Mobile",
          description:
            "Applications mobiles cross-platform et natives pour iOS et Android. Des apps intuitives et performantes qui engagent les utilisateurs et génèrent des résultats.",
          deliverables: [
            "Développement iOS & Android (React Native, Flutter)",
            "Design UI/UX mobile",
            "Intégration d'API backend",
            "Soumission App Store & Google Play",
            "Notifications push et messagerie in-app",
            "Maintenance et mises à jour continues",
          ],
          pricing: "À partir de 5 000 EUR",
          timeline: "6 – 20 semaines",
        },
        {
          id: "03",
          tag: "Stratégie & Conseil",
          name: "Conseil IT",
          description:
            "Conseil technologique stratégique pour aider les organisations à prendre des décisions éclairées. Nous évaluons votre infrastructure, identifions les lacunes et définissons une feuille de route technologique claire.",
          deliverables: [
            "Évaluation & audit de l'infrastructure IT",
            "Stratégie de transformation numérique",
            "Sélection de la stack technologique & conception d'architecture",
            "Planification de migration cloud (AWS, Azure, GCP)",
            "Évaluation & recommandations en cybersécurité",
            "Conseil en sélection et implémentation ERP / CRM",
          ],
          pricing: "À partir de 1 500 EUR / engagement",
          timeline: "1 – 4 semaines",
        },
        {
          id: "04",
          tag: "Infrastructure & Automation",
          name: "Cloud & DevOps",
          description:
            "Infrastructure cloud moderne et pratiques DevOps pour améliorer la fiabilité, réduire les frictions de déploiement et faire évoluer vos systèmes efficacement.",
          deliverables: [
            "Mise en place d'infrastructure cloud (AWS / Azure / GCP)",
            "Déploiement et gestion Docker & Kubernetes",
            "Conception de pipeline CI/CD (GitHub Actions, GitLab CI)",
            "Infrastructure as Code (Terraform)",
            "Mise en place monitoring, alertes et observabilité",
            "Optimisation des coûts et performance",
          ],
          pricing: "À partir de 1 800 EUR",
          timeline: "1 – 6 semaines",
        },
        {
          id: "05",
          tag: "Recherche & Prototypage",
          name: "Design UI/UX",
          description:
            "Design centré utilisateur créant des interfaces intuitives et visuellement impactantes. Du concept initial aux prototypes pixel-perfect qui convertissent et fidélisent.",
          deliverables: [
            "Recherche utilisateur & développement de personas",
            "Architecture de l'information & wireframing",
            "Prototypes haute fidélité (Figma)",
            "Système de design & bibliothèque de composants",
            "Tests d'utilisabilité",
            "Design RTL pour interfaces en langue arabe",
          ],
          pricing: "À partir de 1 200 EUR",
          timeline: "1 – 6 semaines",
        },
        {
          id: "06",
          tag: "Audit & Conformité",
          name: "Cybersécurité",
          description:
            "Protégez vos actifs numériques avec des services de sécurité complets. Nous évaluons les vulnérabilités, mettons en place des contrôles et établissons des processus pour maintenir votre entreprise sécurisée et conforme.",
          deliverables: [
            "Tests de pénétration (web, API, infrastructure)",
            "Évaluation des vulnérabilités & feuille de route corrective",
            "Revue OWASP Top 10",
            "Développement de politiques & procédures de sécurité",
            "Évaluation conformité RGPD / CNIL",
            "Formation de sensibilisation à la sécurité pour le personnel",
          ],
          pricing: "À partir de 2 000 EUR",
          timeline: "1 – 3 semaines",
        },
        {
          id: "07",
          tag: "Intelligence & Efficacité",
          name: "IA & Automatisation",
          description:
            "Exploitez l'intelligence artificielle et l'automatisation des processus pour réduire la charge manuelle, extraire des insights des données et intégrer des fonctionnalités intelligentes dans vos produits.",
          deliverables: [
            "Développement de chatbots IA (Claude API, OpenAI GPT)",
            "Traitement de documents & automatisation OCR",
            "Analyses prédictives & modèles de machine learning",
            "Automatisation des processus métier (RPA)",
            "Conception de pipelines de données et développement ETL",
            "Intégration IA dans les systèmes existants",
          ],
          pricing: "À partir de 3 500 EUR",
          timeline: "4 – 16 semaines",
        },
        {
          id: "08",
          tag: "Fiabilité continue",
          name: "Support & Maintenance IT",
          description:
            "Support continu fiable pour maintenir vos systèmes en bon état. Du helpdesk à la surveillance proactive — votre équipe IT externalisée.",
          deliverables: [
            "Forfaits de maintenance mensuels (Bronze / Silver / Gold)",
            "Support helpdesk (email, téléphone, télémaintenance)",
            "Mises à jour logicielles & correctifs de sécurité",
            "Surveillance serveur & gestion des performances",
            "Sauvegarde de base de données & plan de reprise",
            "Temps de réponse basés sur SLA",
          ],
          pricing: "À partir de 400 EUR / mois",
          timeline: "Contrats flexibles",
        },
        {
          id: "09",
          tag: "Arabe · Anglais · Français",
          name: "Services de Traduction",
          description:
            "Services professionnels de traduction et localisation en arabe, anglais et français. Des documents techniques aux contrats juridiques et contenus marketing — précis, adaptés culturellement et livrés dans les délais.",
          deliverables: [
            "Traduction de documents (Arabe, Anglais, Français — toutes paires)",
            "Localisation de logiciels & apps (chaînes UI, adaptation RTL)",
            "Traduction de documents techniques et juridiques",
            "Localisation de contenus marketing et de sites web",
            "Traduction certifiée pour soumissions françaises / UE",
            "Relecture et assurance qualité par des locuteurs natifs",
          ],
          pricing: "À partir de 0,08 EUR / mot",
          timeline: "1 – 10 jours ouvrés",
        },
        {
          id: "10",
          tag: "Programmation · Tech · IA",
          name: "Formation & Éducation",
          description:
            "Programmes de formation pratiques en programmation, technologies modernes et intelligence artificielle. Des débutants aux professionnels, nos cours animés par des experts sont adaptés au niveau de votre équipe.",
          deliverables: [
            "Fondamentaux de programmation (Python, JavaScript, SQL)",
            "Bootcamps développement web & mobile",
            "Ateliers Cloud & DevOps (Docker, CI/CD, Terraform)",
            "Cours Intelligence Artificielle & Machine Learning",
            "Prompt engineering & outils IA pour les entreprises",
            "Programmes de formation interne sur mesure (présentiel ou distanciel)",
          ],
          pricing: "À partir de 500 EUR / jour",
          timeline: "1 – 5 jours par session",
        },
      ],
    },
    pricing: {
      title: "Résumé des Tarifs",
      subtitle: "Des prix transparents, sans frais cachés",
      service: "Service",
      startingPrice: "Prix de départ",
      timeline: "Délai type",
    },
    why: {
      title: "Pourquoi choisir TechPro Solutions ?",
      subtitle: "Ce qui nous différencie",
      items: [
        {
          title: "Bilan éprouvé",
          text: "200+ projets réalisés dans les délais et le budget en France et en Europe.",
        },
        {
          title: "Expertise réglementaire française",
          text: "Maîtrise approfondie du droit e-commerce français, de la protection des données RGPD et de la conformité CNIL.",
        },
        {
          title: "Capacité trilingue",
          text: "Équipe native français/arabe/anglais — le design RTL est notre standard, pas une option.",
        },
        {
          title: "Service complet",
          text: "De la stratégie et du design au développement, déploiement et support — un seul partenaire.",
        },
        {
          title: "Tarification transparente",
          text: "Engagements à prix fixe sans frais cachés. Calendrier de paiement basé sur les jalons.",
        },
        {
          title: "Support post-lancement",
          text: "Des forfaits de maintenance dédiés maintiennent votre produit rapide, sécurisé et à jour.",
        },
      ],
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Prêt à démarrer votre projet ? Parlons-en.",
      email: "contact@techpro.fr",
      phone: "+33 1 00 00 00 00",
      location: "Paris - France",
      form: {
        name: "Votre nom",
        email: "Votre email",
        subject: "Sujet",
        message: "Votre message",
        send: "Envoyer le message",
      },
    },
    footer: {
      tagline: "Votre Partenaire Technologique à l'Ère Numérique",
      rights: "© 2026 TechPro Solutions SAS — Tous droits réservés.",
      note: "Les prix sont indicatifs et soumis à confirmation du périmètre.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      pricing: "Pricing",
      why: "Why Us",
      contact: "Contact",
    },
    hero: {
      tagline: "Your Technology Partner in the Digital Era",
      subtitle:
        "TechPro Solutions is a full-service IT firm based in Paris, specialised in web & mobile development, cloud, cybersecurity, AI, and much more.",
      cta: "Explore our services",
      cta2: "Get in touch",
    },
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "200+", label: "Projects delivered" },
      { value: "50+", label: "Happy clients" },
      { value: "15", label: "Experts" },
    ],
    about: {
      title: "About Us",
      text: "TechPro Solutions is a full-service IT firm delivering custom digital solutions to businesses across France and Europe. With over 10 years of experience, our multidisciplinary team of engineers, designers, and consultants partners with organisations to transform their digital presence, streamline operations, and accelerate growth through technology.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for all your digital needs",
      pricing_label: "Pricing",
      timeline_label: "Timeline",
      deliverables_label: "Key Deliverables",
      items: [
        {
          id: "01",
          tag: "Frontend & Backend",
          name: "Web Development",
          description:
            "We design and build modern, responsive websites and web applications tailored to your brand and business objectives — from landing pages to complex e-commerce platforms and SaaS products.",
          deliverables: [
            "Custom website design & development (React, Next.js, Vue.js)",
            "E-commerce platforms (Shopify, WooCommerce, custom builds)",
            "Web application development (SPAs, PWAs)",
            "API design and backend development (Python Flask, Node.js)",
            "Performance optimisation & SEO",
            "Bilingual websites (Arabic/English, full RTL support)",
          ],
          pricing: "Starting from EUR 2,000",
          timeline: "2 – 12 weeks",
        },
        {
          id: "02",
          tag: "iOS & Android",
          name: "Mobile App Development",
          description:
            "Cross-platform and native mobile applications for iOS and Android. Intuitive, high-performance apps that engage users and drive results.",
          deliverables: [
            "iOS & Android app development (React Native, Flutter)",
            "UI/UX design for mobile",
            "Backend API integration",
            "App Store & Google Play submission",
            "Push notifications and in-app messaging",
            "Ongoing maintenance and updates",
          ],
          pricing: "Starting from EUR 5,000",
          timeline: "6 – 20 weeks",
        },
        {
          id: "03",
          tag: "Strategy & Advisory",
          name: "IT Consulting",
          description:
            "Strategic technology advisory to help organisations make informed decisions. We assess your infrastructure, identify gaps, and define a clear technology roadmap.",
          deliverables: [
            "IT infrastructure assessment & audit",
            "Digital transformation strategy",
            "Technology stack selection & architecture design",
            "Cloud migration planning (AWS, Azure, GCP)",
            "Cybersecurity assessment & recommendations",
            "ERP / CRM selection and implementation guidance",
          ],
          pricing: "Starting from EUR 1,500 / engagement",
          timeline: "1 – 4 weeks",
        },
        {
          id: "04",
          tag: "Infrastructure & Automation",
          name: "Cloud & DevOps",
          description:
            "Modern cloud infrastructure and DevOps practices to increase reliability, reduce deployment friction, and scale your systems efficiently.",
          deliverables: [
            "Cloud infrastructure setup (AWS / Azure / GCP)",
            "Docker & Kubernetes deployment and management",
            "CI/CD pipeline design (GitHub Actions, GitLab CI)",
            "Infrastructure as Code (Terraform)",
            "Monitoring, alerting, and observability setup",
            "Cost optimisation and performance tuning",
          ],
          pricing: "Starting from EUR 1,800",
          timeline: "1 – 6 weeks",
        },
        {
          id: "05",
          tag: "Research & Prototyping",
          name: "UI/UX Design",
          description:
            "User-centred design that creates intuitive, visually compelling interfaces. From initial concept to pixel-perfect prototypes that convert and retain users.",
          deliverables: [
            "User research & persona development",
            "Information architecture & wireframing",
            "High-fidelity prototypes (Figma)",
            "Design system & component library",
            "Usability testing",
            "RTL design for Arabic-language interfaces",
          ],
          pricing: "Starting from EUR 1,200",
          timeline: "1 – 6 weeks",
        },
        {
          id: "06",
          tag: "Audit & Compliance",
          name: "Cybersecurity",
          description:
            "Protect your digital assets with comprehensive security services. We assess vulnerabilities, implement controls, and establish processes to keep your business secure and compliant.",
          deliverables: [
            "Penetration testing (web, API, infrastructure)",
            "Vulnerability assessment & remediation roadmap",
            "OWASP Top 10 review",
            "Security policy & procedure development",
            "RGPD / CNIL compliance assessment",
            "Security awareness training for staff",
          ],
          pricing: "Starting from EUR 2,000",
          timeline: "1 – 3 weeks",
        },
        {
          id: "07",
          tag: "Intelligence & Efficiency",
          name: "AI & Automation",
          description:
            "Leverage artificial intelligence and process automation to reduce manual workload, extract insights from data, and build intelligent features into your products.",
          deliverables: [
            "AI chatbot development (Claude API, OpenAI GPT)",
            "Document processing & OCR automation",
            "Predictive analytics & machine learning models",
            "Business process automation (RPA)",
            "Data pipeline design and ETL development",
            "AI integration into existing systems",
          ],
          pricing: "Starting from EUR 3,500",
          timeline: "4 – 16 weeks",
        },
        {
          id: "08",
          tag: "Ongoing Reliability",
          name: "IT Support & Maintenance",
          description:
            "Reliable ongoing support to keep your systems running smoothly. From helpdesk to proactive monitoring — your extended IT team.",
          deliverables: [
            "Monthly maintenance packages (Bronze / Silver / Gold)",
            "Helpdesk support (email, phone, remote)",
            "Software updates & security patching",
            "Server monitoring & performance management",
            "Database backup & disaster recovery",
            "SLA-based response times",
          ],
          pricing: "From EUR 400 / month",
          timeline: "Ongoing — flexible contracts",
        },
        {
          id: "09",
          tag: "Arabic · English · French",
          name: "Translation Services",
          description:
            "Professional translation and localisation services across Arabic, English, and French. From technical documents and software interfaces to legal contracts and marketing content — accurate, culturally adapted, and delivered on time.",
          deliverables: [
            "Document translation (Arabic, English, French — all pairs)",
            "Software & app localisation (UI strings, RTL adaptation)",
            "Technical and legal document translation",
            "Marketing content and website localisation",
            "Certified translation for official French / EU submissions",
            "Proofreading and quality assurance by native speakers",
          ],
          pricing: "From EUR 0.08 / word",
          timeline: "1 – 10 business days",
        },
        {
          id: "10",
          tag: "Programming · Tech · AI",
          name: "Training & Education",
          description:
            "Practical, hands-on training programmes in programming, modern technologies, and artificial intelligence. From beginners to professionals, our expert-led courses are tailored to your team's level and business objectives.",
          deliverables: [
            "Programming fundamentals (Python, JavaScript, SQL)",
            "Web & mobile development bootcamps",
            "Cloud & DevOps workshops (Docker, CI/CD, Terraform)",
            "Artificial Intelligence & Machine Learning courses",
            "Prompt engineering & AI tools for business",
            "Custom in-house training programmes (on-site or remote)",
          ],
          pricing: "From EUR 500 / day",
          timeline: "1 – 5 days per session",
        },
      ],
    },
    pricing: {
      title: "Pricing Summary",
      subtitle: "Transparent pricing, no hidden fees",
      service: "Service",
      startingPrice: "Starting Price",
      timeline: "Typical Timeline",
    },
    why: {
      title: "Why Choose TechPro Solutions?",
      subtitle: "What sets us apart",
      items: [
        {
          title: "Proven Track Record",
          text: "200+ successful projects delivered on time and within budget across France and Europe.",
        },
        {
          title: "French Regulatory Expertise",
          text: "Deep understanding of French e-commerce law, RGPD data protection, and CNIL compliance.",
        },
        {
          title: "Trilingual Capability",
          text: "Native French/Arabic/English trilingual team — RTL design is our standard, not an afterthought.",
        },
        {
          title: "End-to-End Service",
          text: "From strategy and design to development, deployment, and support — one partner.",
        },
        {
          title: "Transparent Pricing",
          text: "Clear fixed-price engagements with no hidden fees. Milestone-based payment schedules.",
        },
        {
          title: "Post-Launch Support",
          text: "Dedicated maintenance packages keep your product fast, secure, and up to date.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your project? Let's talk.",
      email: "contact@techpro.fr",
      phone: "+33 1 00 00 00 00",
      location: "Paris - France",
      form: {
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Your message",
        send: "Send message",
      },
    },
    footer: {
      tagline: "Your Technology Partner in the Digital Era",
      rights: "© 2026 TechPro Solutions SAS — All rights reserved.",
      note: "Prices are indicative and subject to scope confirmation.",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      pricing: "الأسعار",
      why: "لماذا نحن",
      contact: "اتصل بنا",
    },
    hero: {
      tagline: "شريكك التكنولوجي في العصر الرقمي",
      subtitle:
        "TechPro Solutions شركة تقنية متكاملة مقرّها باريس، متخصصة في تطوير المواقع والتطبيقات، والحوسبة السحابية، والأمن السيبراني، والذكاء الاصطناعي وأكثر.",
      cta: "اكتشف خدماتنا",
      cta2: "تواصل معنا",
    },
    stats: [
      { value: "+10", label: "سنوات من الخبرة" },
      { value: "+200", label: "مشروع منجز" },
      { value: "+50", label: "عميل راضٍ" },
      { value: "15", label: "خبيراً متخصصاً" },
    ],
    about: {
      title: "من نحن",
      text: "TechPro Solutions شركة تقنية متكاملة تقدم حلولاً رقمية مخصصة للشركات في فرنسا وأوروبا. بفضل أكثر من 10 سنوات من الخبرة، يعمل فريقنا متعدد التخصصات من المهندسين والمصممين والمستشارين على تحويل الحضور الرقمي لمؤسساتنا العملاء وتحسين عملياتها وتسريع نموها من خلال التكنولوجيا.",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول شاملة لجميع احتياجاتك الرقمية",
      pricing_label: "السعر",
      timeline_label: "المدة الزمنية",
      deliverables_label: "المخرجات الرئيسية",
      items: [
        {
          id: "01",
          tag: "الواجهة الأمامية والخلفية",
          name: "تطوير المواقع",
          description:
            "نصمم ونبني مواقع ويب وتطبيقات ويب حديثة ومتجاوبة مصممة خصيصاً لعلامتك التجارية وأهدافك — من الصفحات التسويقية إلى منصات التجارة الإلكترونية المعقدة وتطبيقات SaaS.",
          deliverables: [
            "تصميم وتطوير مواقع مخصصة (React, Next.js, Vue.js)",
            "منصات التجارة الإلكترونية (Shopify, WooCommerce, تطوير مخصص)",
            "تطوير تطبيقات الويب (SPA, PWA)",
            "تصميم API وتطوير الواجهة الخلفية (Python Flask, Node.js)",
            "تحسين الأداء وتهيئة محركات البحث (SEO)",
            "مواقع ثنائية اللغة (عربي/إنجليزي، دعم كامل للكتابة من اليمين لليسار)",
          ],
          pricing: "ابتداءً من 2,000 يورو",
          timeline: "2 – 12 أسبوعاً",
        },
        {
          id: "02",
          tag: "iOS & Android",
          name: "تطوير التطبيقات المحمولة",
          description:
            "تطبيقات محمولة متعددة المنصات وأصلية لنظامي iOS وAndroid. تطبيقات بديهية وعالية الأداء تُشرك المستخدمين وتحقق نتائج.",
          deliverables: [
            "تطوير تطبيقات iOS وAndroid (React Native, Flutter)",
            "تصميم واجهة المستخدم وتجربة الاستخدام للجوال",
            "تكامل API الخلفي",
            "تقديم التطبيقات على App Store وGoogle Play",
            "الإشعارات الفورية والمراسلة داخل التطبيق",
            "الصيانة والتحديثات المستمرة",
          ],
          pricing: "ابتداءً من 5,000 يورو",
          timeline: "6 – 20 أسبوعاً",
        },
        {
          id: "03",
          tag: "الاستراتيجية والاستشارات",
          name: "الاستشارات التقنية",
          description:
            "استشارات تكنولوجية استراتيجية لمساعدة المؤسسات على اتخاذ قرارات مدروسة. نقيّم بنيتك التحتية، ونحدد الثغرات، ونضع خارطة طريق تقنية واضحة.",
          deliverables: [
            "تقييم وتدقيق البنية التحتية لتكنولوجيا المعلومات",
            "استراتيجية التحول الرقمي",
            "اختيار مكدس التكنولوجيا وتصميم البنية",
            "تخطيط الترحيل السحابي (AWS, Azure, GCP)",
            "تقييم الأمن السيبراني والتوصيات",
            "التوجيه في اختيار وتطبيق أنظمة ERP / CRM",
          ],
          pricing: "ابتداءً من 1,500 يورو / عقد",
          timeline: "1 – 4 أسابيع",
        },
        {
          id: "04",
          tag: "البنية التحتية والأتمتة",
          name: "السحابة وDevOps",
          description:
            "بنية تحتية سحابية حديثة وممارسات DevOps لزيادة الموثوقية وتقليل احتكاك النشر وتوسيع أنظمتك بكفاءة.",
          deliverables: [
            "إعداد البنية التحتية السحابية (AWS / Azure / GCP)",
            "نشر وإدارة Docker وKubernetes",
            "تصميم خط أنابيب CI/CD (GitHub Actions, GitLab CI)",
            "البنية التحتية كرمز (Terraform)",
            "إعداد المراقبة والتنبيهات والرصد",
            "تحسين التكاليف وضبط الأداء",
          ],
          pricing: "ابتداءً من 1,800 يورو",
          timeline: "1 – 6 أسابيع",
        },
        {
          id: "05",
          tag: "البحث والنماذج الأولية",
          name: "تصميم UI/UX",
          description:
            "تصميم يركز على المستخدم يخلق واجهات بديهية وجذابة بصرياً. من المفهوم الأولي إلى النماذج الأولية عالية الدقة التي تحوّل وتُبقي المستخدمين.",
          deliverables: [
            "بحث المستخدمين وتطوير الشخصيات",
            "هندسة المعلومات والرسوم الهيكلية",
            "نماذج أولية عالية الدقة (Figma)",
            "نظام التصميم ومكتبة المكونات",
            "اختبار قابلية الاستخدام",
            "تصميم RTL لواجهات اللغة العربية",
          ],
          pricing: "ابتداءً من 1,200 يورو",
          timeline: "1 – 6 أسابيع",
        },
        {
          id: "06",
          tag: "التدقيق والامتثال",
          name: "الأمن السيبراني",
          description:
            "احمِ أصولك الرقمية بخدمات أمنية شاملة. نقيّم الثغرات، وننفذ الضوابط، ونضع عمليات للحفاظ على أمان عملك وامتثاله.",
          deliverables: [
            "اختبار الاختراق (الويب، API، البنية التحتية)",
            "تقييم الثغرات وخارطة طريق المعالجة",
            "مراجعة OWASP Top 10",
            "تطوير سياسات وإجراءات الأمان",
            "تقييم الامتثال RGPD / CNIL",
            "تدريب توعية الأمان للموظفين",
          ],
          pricing: "ابتداءً من 2,000 يورو",
          timeline: "1 – 3 أسابيع",
        },
        {
          id: "07",
          tag: "الذكاء والكفاءة",
          name: "الذكاء الاصطناعي والأتمتة",
          description:
            "استفد من الذكاء الاصطناعي وأتمتة العمليات لتقليل العبء اليدوي واستخراج رؤى من البيانات وبناء ميزات ذكية في منتجاتك.",
          deliverables: [
            "تطوير روبوتات المحادثة بالذكاء الاصطناعي (Claude API, OpenAI GPT)",
            "معالجة الوثائق وأتمتة OCR",
            "التحليلات التنبؤية ونماذج التعلم الآلي",
            "أتمتة العمليات التجارية (RPA)",
            "تصميم خط أنابيب البيانات وتطوير ETL",
            "تكامل الذكاء الاصطناعي في الأنظمة الموجودة",
          ],
          pricing: "ابتداءً من 3,500 يورو",
          timeline: "4 – 16 أسبوعاً",
        },
        {
          id: "08",
          tag: "الموثوقية المستمرة",
          name: "الدعم والصيانة التقنية",
          description:
            "دعم موثوق ومستمر للحفاظ على سير أنظمتك بسلاسة. من مكتب المساعدة إلى المراقبة الاستباقية — فريق تقنيتك الموسّع.",
          deliverables: [
            "حزم الصيانة الشهرية (برونز / فضي / ذهبي)",
            "دعم مكتب المساعدة (بريد إلكتروني، هاتف، عن بُعد)",
            "تحديثات البرامج وتصحيحات الأمان",
            "مراقبة الخادم وإدارة الأداء",
            "النسخ الاحتياطي لقاعدة البيانات والتعافي من الكوارث",
            "أوقات الاستجابة المستندة إلى اتفاقية مستوى الخدمة",
          ],
          pricing: "ابتداءً من 400 يورو / شهر",
          timeline: "عقود مستمرة ومرنة",
        },
        {
          id: "09",
          tag: "عربي · إنجليزي · فرنسي",
          name: "خدمات الترجمة",
          description:
            "خدمات ترجمة وتوطين احترافية بين العربية والإنجليزية والفرنسية. من الوثائق التقنية وواجهات البرامج إلى العقود القانونية والمحتوى التسويقي — دقيقة، ومكيّفة ثقافياً، وتُسلَّم في الوقت المحدد.",
          deliverables: [
            "ترجمة الوثائق (عربي، إنجليزي، فرنسي — جميع الأزواج)",
            "توطين البرامج والتطبيقات (سلاسل واجهة المستخدم، التكيف مع RTL)",
            "ترجمة الوثائق التقنية والقانونية",
            "توطين محتوى التسويق والمواقع الإلكترونية",
            "ترجمة معتمدة للتقديمات الرسمية الفرنسية / الأوروبية",
            "التدقيق اللغوي وضمان الجودة من قِبل متحدثين أصليين",
          ],
          pricing: "ابتداءً من 0.08 يورو / كلمة",
          timeline: "1 – 10 أيام عمل",
        },
        {
          id: "10",
          tag: "البرمجة · التقنية · الذكاء الاصطناعي",
          name: "التدريب والتعليم",
          description:
            "برامج تدريبية عملية في البرمجة والتقنيات الحديثة والذكاء الاصطناعي. من المبتدئين إلى المحترفين، دوراتنا التي يقودها خبراء مصممة خصيصاً لمستوى فريقك.",
          deliverables: [
            "أساسيات البرمجة (Python, JavaScript, SQL)",
            "معسكرات التدريب على تطوير الويب والجوال",
            "ورش عمل السحابة وDevOps (Docker, CI/CD, Terraform)",
            "دورات الذكاء الاصطناعي والتعلم الآلي",
            "هندسة الأوامر وأدوات الذكاء الاصطناعي للأعمال",
            "برامج تدريب داخلي مخصصة (حضورياً أو عن بُعد)",
          ],
          pricing: "ابتداءً من 500 يورو / يوم",
          timeline: "1 – 5 أيام لكل جلسة",
        },
      ],
    },
    pricing: {
      title: "ملخص الأسعار",
      subtitle: "أسعار شفافة بدون رسوم خفية",
      service: "الخدمة",
      startingPrice: "السعر الابتدائي",
      timeline: "المدة الزمنية",
    },
    why: {
      title: "لماذا تختار TechPro Solutions؟",
      subtitle: "ما يميزنا عن غيرنا",
      items: [
        {
          title: "سجل حافل بالإنجازات",
          text: "أكثر من 200 مشروع ناجح تم تسليمه في الوقت المحدد وضمن الميزانية في فرنسا وأوروبا.",
        },
        {
          title: "خبرة تنظيمية فرنسية",
          text: "فهم عميق لقانون التجارة الإلكترونية الفرنسي، وحماية بيانات RGPD، وامتثال CNIL.",
        },
        {
          title: "قدرة ثلاثية اللغات",
          text: "فريق ثلاثي اللغة فرنسي/عربي/إنجليزي — تصميم RTL هو معيارنا، وليس مجرد إضافة.",
        },
        {
          title: "خدمة متكاملة",
          text: "من الاستراتيجية والتصميم إلى التطوير والنشر والدعم — شريك واحد.",
        },
        {
          title: "تسعير شفاف",
          text: "عقود بأسعار ثابتة وواضحة بدون رسوم خفية. جداول دفع مستندة إلى المعالم.",
        },
        {
          title: "دعم ما بعد الإطلاق",
          text: "حزم صيانة مخصصة تحافظ على منتجك سريعاً وآمناً ومحدّثاً.",
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "هل أنت مستعد لبدء مشروعك؟ لنتحدث.",
      email: "contact@techpro.fr",
      phone: "+33 1 00 00 00 00",
      location: "باريس - فرنسا",
      form: {
        name: "اسمك",
        email: "بريدك الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        send: "إرسال الرسالة",
      },
    },
    footer: {
      tagline: "شريكك التكنولوجي في العصر الرقمي",
      rights: "© 2026 TechPro Solutions SAS — جميع الحقوق محفوظة.",
      note: "الأسعار استرشادية وخاضعة لتأكيد النطاق.",
    },
  },
};

export type Translations = (typeof translations)["fr"];
