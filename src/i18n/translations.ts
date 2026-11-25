import type {Language, TranslationContent} from '../types';

export const BUSINESS_EMAIL = 'nexoya89@gmail.com';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    meta: {
      title: 'PUMPALABS — International Digital Solutions & Business Intelligence',
      description:
        'From Business Intelligence to Digital Solutions. Commercial intelligence, B2B prospecting, web development, digital catalogs, and enterprise automations from Argentina.',
    },
    nav: {
      divisions: 'Divisions',
      coverage: 'Markets',
      demos: 'Demos',
      contact: 'Contact',
      cta: 'Start Inquiry',
      menuOpenLabel: 'Open navigation menu',
      menuCloseLabel: 'Close navigation menu',
      languageLabel: 'Switch language to Spanish',
    },
    hero: {
      kicker: 'International Digital Solutions & Business Intelligence · Argentina',
      headline: 'From Business Intelligence to Digital Solutions.',
      motto: 'FROM BUSINESS INTELLIGENCE TO DIGITAL SOLUTIONS.',
      subheadline:
        'We connect commercial research, B2B market prospecting, and practical web engineering to help companies expand across the Americas and Europe.',
      primaryCta: 'Request Consultation',
      secondaryCta: 'Explore Divisions',
      imageAlt:
        'Minimalist architectural glass and concrete executive workspace overlooking a calm city horizon',
      facts: [
        {
          label: 'Operational Base',
          value: 'Argentina',
        },
        {
          label: 'Target Markets',
          value: 'US · CA · UK · ES · CL · UY',
        },
        {
          label: 'Core Divisions',
          value: 'Intelligence & Digital',
        },
        {
          label: 'Direct Contact',
          value: 'nexoya89@gmail.com',
        },
      ],
    },
    divisions: {
      heading: 'Two Integrated Divisions',
      subheading:
        'Every engagement combines structured market intelligence with execution-ready digital architecture—moving from verified opportunities to operational tools.',
      items: [
        {
          id: 'intelligence',
          index: '01',
          name: 'PUMPALABS Intelligence',
          tagline: 'Commercial intelligence & international market analysis',
          summary:
            'Research-backed market mapping, counterparty identification, and outbound commercial clarity before you commit capital or engineering resources.',
          imageAlt:
            'Overhead view of dark slate desk with analytical chart diagrams and precision scale',
          ctaLabel: 'Inquire about Intelligence',
          capabilities: [
            {
              index: '01',
              title: 'Commercial Intelligence',
              description:
                'Structured competitive benchmarks, pricing references, and channel assessments tailored to target sectors.',
            },
            {
              index: '02',
              title: 'Market Research',
              description:
                'Demand evaluation, regulatory considerations, and entry-readiness studies across North America, Europe, and Southern Cone.',
            },
            {
              index: '03',
              title: 'B2B Prospecting',
              description:
                'Curated lists of relevant decision-makers, importers, distributors, and commercial partners.',
            },
            {
              index: '04',
              title: 'Buyer & Supplier Identification',
              description:
                'Verification and mapping of qualified supply-chain counterparts and commercial buyers.',
            },
            {
              index: '05',
              title: 'International Opportunity Analysis',
              description:
                'Cross-border trade and expansion evaluation connecting Argentine operations with international demand.',
            },
          ],
        },
        {
          id: 'digital',
          index: '02',
          name: 'PUMPALABS Digital',
          tagline: 'Web engineering, digital catalogs & business automation',
          summary:
            'Fast, accessible, conversion-oriented digital systems designed for mobile and desktop users without unnecessary software complexity.',
          imageAlt:
            'Modern minimalist workstation displaying a clean dark-mode geometric interface layout',
          ctaLabel: 'Inquire about Digital',
          capabilities: [
            {
              index: '01',
              title: 'Web Development',
              description:
                'Responsive corporate websites, multilingual landing pages, and technical web architectures built for speed and SEO.',
            },
            {
              index: '02',
              title: 'Digital Catalogs',
              description:
                'Structured, mobile-first product and service showcases engineered for clear browsing and direct commercial inquiries.',
            },
            {
              index: '03',
              title: 'Automations',
              description:
                'Streamlined lead routing, inquiry formatting, and operational workflow connections that reduce manual overhead.',
            },
            {
              index: '04',
              title: 'Client Acquisition',
              description:
                'Clear value positioning, frictionless inquiry funnels, and international search visibility.',
            },
            {
              index: '05',
              title: 'Enterprise Digital Solutions',
              description:
                'Practical, maintainable software systems aligned with real commercial and operational requirements.',
            },
          ],
        },
      ],
    },
    coverage: {
      heading: 'International Coverage',
      subheading:
        'Operating from Argentina with direct timezone alignment for North America, Europe, and Southern Cone commercial corridors.',
      baseLabel: 'Operational Base',
      baseValue: 'Argentina',
      baseDescription:
        'Central engineering and commercial intelligence operations coordinated from Argentina for bilingual English and Spanish execution.',
      marketsTitle: 'Target Markets',
      markets: [
        {
          code: 'US',
          name: 'United States',
          region: 'North America',
          focus: 'B2B prospecting, supplier sourcing, and English-first digital presence.',
        },
        {
          code: 'CA',
          name: 'Canada',
          region: 'North America',
          focus: 'Cross-border commercial research and enterprise web solutions.',
        },
        {
          code: 'UK',
          name: 'United Kingdom',
          region: 'Europe',
          focus: 'Market entry analysis, buyer mapping, and corporate digital platforms.',
        },
        {
          code: 'ES',
          name: 'Spain',
          region: 'Europe',
          focus: 'Bilingual commercial expansion and European distributor identification.',
        },
        {
          code: 'CL',
          name: 'Chile',
          region: 'Southern Cone',
          focus: 'Regional trade intelligence, digital catalogs, and B2B acquisition.',
        },
        {
          code: 'UY',
          name: 'Uruguay',
          region: 'Southern Cone',
          focus: 'Commercial operations support, automation, and regional web platforms.',
        },
      ],
      workflowTitle: 'Execution Model',
      workflow: [
        {
          index: '01',
          title: 'Define Target & Intelligence',
          description:
            'We clarify the commercial objective, target country, and buyer or supplier profile before building.',
        },
        {
          index: '02',
          title: 'Architect Digital Presence',
          description:
            'We translate positioning into clean, fast web platforms, digital catalogs, or automated workflows.',
        },
        {
          index: '03',
          title: 'Connect & Capture Demand',
          description:
            'We align outreach, bilingual messaging, and direct contact channels so qualified prospects convert cleanly.',
        },
      ],
    },
    demos: {
      heading: 'Demonstration Projects',
      subheading:
        'Live interactive prototypes showcasing layout discipline, mobile responsiveness, and structured digital catalog execution.',
      disclaimer:
        'Demonstration projects — built to showcase interface structure, mobile usability, and functional user journeys.',
      items: [
        {
          id: 'demo-unas',
          index: '01',
          classification: 'Demonstration Project',
          title: 'Demo Uñas — Service Studio Catalog',
          sector: 'Beauty & Personal Care',
          description:
            'Mobile-first service showcase and digital appointment catalog built for fast browsing on Android and desktop devices.',
          deliverables: [
            'Responsive mobile layout',
            'Structured service catalog',
            'Direct booking flow',
          ],
          url: 'https://pumpalabs-ar.github.io/Demo-unas/',
          ctaLabel: 'Open Live Demo',
          imageAlt:
            'Minimalist beauty and nail studio reception counter with travertine stone and glass bottles',
        },
        {
          id: 'demo-taller-ar',
          index: '02',
          classification: 'Demonstration Project',
          title: 'Demo Taller AR — Automotive Workshop Platform',
          sector: 'Automotive Services',
          description:
            'Service presentation, technical capabilities overview, and direct customer inquiry interface tailored for local automotive workshops.',
          deliverables: [
            'Clear service breakdown',
            'Mobile-optimized UX',
            'Lead capture structure',
          ],
          url: 'https://pumpalabs-ar.github.io/Demo-taller-ar/',
          ctaLabel: 'Open Live Demo',
          imageAlt:
            'Clean modern automotive service bay with brushed steel tool bench and natural daylight',
        },
      ],
    },
    contact: {
      heading: 'Start a Project Inquiry',
      subheading:
        'Share your target market, division of interest, and project scope. Completing this form prepares a structured email directly addressed to our commercial desk.',
      directEmailLabel: 'Commercial Email',
      directEmailNote:
        'No third-party intermediary or paid backend required. Submitting prepares a direct email draft to nexoya89@gmail.com.',
      baseLabel: 'Operational Base',
      baseValue: 'Argentina',
      marketsLabel: 'Target Markets',
      marketsValue: 'United States, Canada, United Kingdom, Spain, Chile, Uruguay',
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Your name',
        companyLabel: 'Company / Organization',
        companyPlaceholder: 'Company name (optional)',
        countryLabel: 'Country / Target Market',
        countryPlaceholder: 'Select or enter country',
        countryOptions: [
          'United States',
          'Canada',
          'United Kingdom',
          'Spain',
          'Chile',
          'Uruguay',
          'Argentina',
          'Other',
        ],
        emailLabel: 'Work Email',
        emailPlaceholder: 'name@company.com',
        serviceLabel: 'Requested Service',
        serviceOptions: [
          {
            value: 'intelligence',
            label: 'PUMPALABS Intelligence (Research, B2B Prospecting, Buyers/Suppliers)',
          },
          {
            value: 'digital',
            label: 'PUMPALABS Digital (Web Development, Catalogs, Automations)',
          },
          {
            value: 'integrated',
            label: 'Integrated Scope (Intelligence + Digital Solutions)',
          },
        ],
        descriptionLabel: 'Project Description',
        descriptionPlaceholder:
          'Briefly describe your business objectives, target markets, and timeline.',
        submitLabel: 'Prepare Email Inquiry',
        resetLabel: 'Clear Form',
        privacyNote:
          'Your browser opens your default email client with the formatted message. You can also copy the message directly.',
        errors: {
          nameRequired: 'Please enter your name.',
          countryRequired: 'Please select or enter your country.',
          emailRequired: 'Please enter your email address.',
          emailInvalid: 'Please enter a valid email address.',
          descriptionRequired: 'Please include a short description of your project.',
        },
        prepared: {
          title: 'Inquiry Email Prepared',
          notice:
            'Your email client was prompted to open with the pre-filled message below. If it did not open automatically on your device, use the direct link or copy the message to send to nexoya89@gmail.com.',
          subjectLabel: 'Subject',
          openMailLabel: 'Open Email App',
          copyLabel: 'Copy Prepared Message',
          copiedLabel: 'Message Copied',
          copyFailedLabel: 'Copy manually below',
          editLabel: 'Edit Inquiry',
          mailSubjectPrefix: 'PUMPALABS Inquiry',
        },
      },
    },
    footer: {
      descriptor: 'International Digital Solutions & Business Intelligence',
      motto: 'FROM BUSINESS INTELLIGENCE TO DIGITAL SOLUTIONS.',
      baseNotice: 'Operating from Argentina · Serving US, CA, UK, ES, CL & UY',
      copyright: '© 2026 PUMPALABS. All rights reserved.',
    },
  },
  es: {
    meta: {
      title: 'PUMPALABS — Soluciones Digitales Internacionales e Inteligencia Comercial',
      description:
        'From Business Intelligence to Digital Solutions. Inteligencia comercial, prospección B2B, desarrollo web, catálogos digitales y automatizaciones desde Argentina.',
    },
    nav: {
      divisions: 'Divisiones',
      coverage: 'Mercados',
      demos: 'Demos',
      contact: 'Contacto',
      cta: 'Consultar',
      menuOpenLabel: 'Abrir menú de navegación',
      menuCloseLabel: 'Cerrar menú de navegación',
      languageLabel: 'Cambiar idioma a inglés',
    },
    hero: {
      kicker: 'Soluciones Digitales Internacionales e Inteligencia Comercial · Argentina',
      headline: 'De la Inteligencia Comercial a las Soluciones Digitales.',
      motto: 'FROM BUSINESS INTELLIGENCE TO DIGITAL SOLUTIONS.',
      subheadline:
        'Conectamos investigación de mercados, prospección B2B e ingeniería web práctica para impulsar operaciones en América y Europa.',
      primaryCta: 'Solicitar Consulta',
      secondaryCta: 'Explorar Divisiones',
      imageAlt:
        'Espacio ejecutivo minimalista de vidrio y hormigón con vista a un horizonte urbano al amanecer',
      facts: [
        {
          label: 'Base Operativa',
          value: 'Argentina',
        },
        {
          label: 'Mercados Objetivo',
          value: 'EE. UU. · CA · UK · ES · CL · UY',
        },
        {
          label: 'Divisiones',
          value: 'Intelligence & Digital',
        },
        {
          label: 'Contacto Directo',
          value: 'nexoya89@gmail.com',
        },
      ],
    },
    divisions: {
      heading: 'Dos Divisiones Integradas',
      subheading:
        'Cada proyecto combina inteligencia de mercado estructurada con arquitectura digital lista para operar—pasando de oportunidades concretas a herramientas funcionales.',
      items: [
        {
          id: 'intelligence',
          index: '01',
          name: 'PUMPALABS Intelligence',
          tagline: 'Inteligencia comercial y análisis de oportunidades internacionales',
          summary:
            'Mapeo de mercados basado en investigación, identificación de contrapartes y claridad comercial B2B antes de asignar recursos.',
          imageAlt:
            'Vista superior de escritorio de pizarra oscura con gráficos analíticos y regla de precisión',
          ctaLabel: 'Consultar por Intelligence',
          capabilities: [
            {
              index: '01',
              title: 'Inteligencia Comercial',
              description:
                'Comparativas competitivas estructuradas, referencias de mercado y evaluación de canales según cada sector.',
            },
            {
              index: '02',
              title: 'Investigación de Mercados',
              description:
                'Evaluación de demanda, variables de entrada y análisis sectorial en Norteamérica, Europa y Cono Sur.',
            },
            {
              index: '03',
              title: 'Prospección B2B',
              description:
                'Selección estructurada de tomadores de decisión, importadores, distribuidores y socios comerciales.',
            },
            {
              index: '04',
              title: 'Identificación de Compradores y Proveedores',
              description:
                'Búsqueda y mapeo de contrapartes calificadas para abastecimiento o comercialización internacional.',
            },
            {
              index: '05',
              title: 'Análisis de Oportunidades Internacionales',
              description:
                'Evaluación de oportunidades transfronterizas conectando operaciones desde Argentina con demanda externa.',
            },
          ],
        },
        {
          id: 'digital',
          index: '02',
          name: 'PUMPALABS Digital',
          tagline: 'Desarrollo web, catálogos digitales y automatizaciones',
          summary:
            'Sistemas digitales rápidos, accesibles y orientados a conversión para dispositivos Android y escritorio, sin complejidad innecesaria.',
          imageAlt:
            'Estación de trabajo minimalista con pantalla mostrando una interfaz geométrica en modo oscuro',
          ctaLabel: 'Consultar por Digital',
          capabilities: [
            {
              index: '01',
              title: 'Desarrollo Web',
              description:
                'Sitios corporativos adaptables, páginas bilingües y arquitecturas web rápidas optimizadas para buscadores.',
            },
            {
              index: '02',
              title: 'Catálogos Digitales',
              description:
                'Catálogos estructurados de productos y servicios pensados para navegación móvil fluida y consulta directa.',
            },
            {
              index: '03',
              title: 'Automatizaciones',
              description:
                'Flujos de captación y ordenamiento de consultas que reducen tareas manuales repetitivas.',
            },
            {
              index: '04',
              title: 'Captación de Clientes',
              description:
                'Propuesta de valor clara, recorridos sin fricción y visibilidad en mercados internacionales.',
            },
            {
              index: '05',
              title: 'Soluciones Digitales Empresariales',
              description:
                'Herramientas web mantenibles y alineadas con necesidades comerciales y operativas reales.',
            },
          ],
        },
      ],
    },
    coverage: {
      heading: 'Cobertura Internacional',
      subheading:
        'Operando desde Argentina con alineación horaria directa para corredores comerciales de América y Europa.',
      baseLabel: 'Base Operativa',
      baseValue: 'Argentina',
      baseDescription:
        'Coordinación central de ingeniería e inteligencia comercial desde Argentina con ejecución bilingüe en inglés y español.',
      marketsTitle: 'Mercados Objetivo',
      markets: [
        {
          code: 'US',
          name: 'Estados Unidos',
          region: 'Norteamérica',
          focus: 'Prospección B2B, búsqueda de proveedores y presencia digital en inglés.',
        },
        {
          code: 'CA',
          name: 'Canadá',
          region: 'Norteamérica',
          focus: 'Investigación comercial internacional y soluciones web empresariales.',
        },
        {
          code: 'UK',
          name: 'Reino Unido',
          region: 'Europa',
          focus: 'Análisis de entrada al mercado, mapeo de compradores y plataformas web.',
        },
        {
          code: 'ES',
          name: 'España',
          region: 'Europa',
          focus: 'Expansión comercial en español e identificación de distribuidores.',
        },
        {
          code: 'CL',
          name: 'Chile',
          region: 'Cono Sur',
          focus: 'Inteligencia comercial regional, catálogos digitales y captación B2B.',
        },
        {
          code: 'UY',
          name: 'Uruguay',
          region: 'Cono Sur',
          focus: 'Soporte comercial, automatización de procesos y plataformas web regionales.',
        },
      ],
      workflowTitle: 'Modelo de Ejecución',
      workflow: [
        {
          index: '01',
          title: 'Definir Mercado e Inteligencia',
          description:
            'Precisamos el objetivo comercial, país destino y perfil de comprador o proveedor antes de construir.',
        },
        {
          index: '02',
          title: 'Diseñar Arquitectura Digital',
          description:
            'Traducimos el posicionamiento en sitios web rápidos, catálogos digitales o automatizaciones prácticas.',
        },
        {
          index: '03',
          title: 'Conectar y Captar Demanda',
          description:
            'Alineamos prospección, comunicación bilingüe y canales de contacto directo para generar oportunidades reales.',
        },
      ],
    },
    demos: {
      heading: 'Proyectos Demostrativos',
      subheading:
        'Prototipos interactivos en línea que muestran estructura visual, adaptación móvil en Android y diseño de catálogos digitales.',
      disclaimer:
        'Proyectos demostrativos — desarrollados para ilustrar arquitectura de interfaz, usabilidad móvil y recorridos de usuario.',
      items: [
        {
          id: 'demo-unas',
          index: '01',
          classification: 'Proyecto Demostrativo',
          title: 'Demo Uñas — Catálogo para Estudio de Servicios',
          sector: 'Estética y Cuidado Personal',
          description:
            'Catálogo digital adaptable a dispositivos móviles para presentación de servicios, navegación rápida y solicitud directa de turnos.',
          deliverables: [
            'Diseño adaptable móvil',
            'Catálogo estructurado de servicios',
            'Flujo de contacto directo',
          ],
          url: 'https://pumpalabs-ar.github.io/Demo-unas/',
          ctaLabel: 'Ver Demo en Vivo',
          imageAlt:
            'Recepción minimalista de estudio de manicura con mostrador de travertino y frascos de vidrio',
        },
        {
          id: 'demo-taller-ar',
          index: '02',
          classification: 'Proyecto Demostrativo',
          title: 'Demo Taller AR — Plataforma para Taller Automotor',
          sector: 'Servicios Automotrices',
          description:
            'Presentación técnica de servicios mecánicos, detalle de capacidades e interfaz directa de consultas pensada para uso móvil.',
          deliverables: [
            'Detalle claro de servicios',
            'Experiencia móvil optimizada',
            'Estructura de captación',
          ],
          url: 'https://pumpalabs-ar.github.io/Demo-taller-ar/',
          ctaLabel: 'Ver Demo en Vivo',
          imageAlt:
            'Taller mecánico moderno con mesa de acero cepillado, herramientas organizadas y luz natural',
        },
      ],
    },
    contact: {
      heading: 'Iniciar una Consulta',
      subheading:
        'Indicá tu mercado objetivo, división de interés y alcance del proyecto. Al enviar este formulario se prepara un correo estructurado dirigido a nuestra casilla comercial.',
      directEmailLabel: 'Correo Comercial',
      directEmailNote:
        'Sin servidores pagos ni intermediarios. El formulario prepara un borrador real de correo dirigido a nexoya89@gmail.com.',
      baseLabel: 'Base Operativa',
      baseValue: 'Argentina',
      marketsLabel: 'Mercados Objetivo',
      marketsValue: 'Estados Unidos, Canadá, Reino Unido, España, Chile, Uruguay',
      form: {
        nameLabel: 'Nombre Completo',
        namePlaceholder: 'Tu nombre',
        companyLabel: 'Empresa / Organización',
        companyPlaceholder: 'Nombre de la empresa (opcional)',
        countryLabel: 'País / Mercado',
        countryPlaceholder: 'Seleccioná o ingresá un país',
        countryOptions: [
          'Estados Unidos',
          'Canadá',
          'Reino Unido',
          'España',
          'Chile',
          'Uruguay',
          'Argentina',
          'Otro',
        ],
        emailLabel: 'Correo Electrónico',
        emailPlaceholder: 'nombre@empresa.com',
        serviceLabel: 'Servicio Solicitado',
        serviceOptions: [
          {
            value: 'intelligence',
            label: 'PUMPALABS Intelligence (Investigación, Prospección B2B, Compradores/Proveedores)',
          },
          {
            value: 'digital',
            label: 'PUMPALABS Digital (Desarrollo Web, Catálogos, Automatizaciones)',
          },
          {
            value: 'integrated',
            label: 'Solución Integral (Intelligence + Digital)',
          },
        ],
        descriptionLabel: 'Descripción del Proyecto',
        descriptionPlaceholder:
          'Contanos brevemente tus objetivos comerciales, mercados de interés y plazos estimados.',
        submitLabel: 'Preparar Correo de Consulta',
        resetLabel: 'Limpiar Formulario',
        privacyNote:
          'Tu navegador abrirá la aplicación de correo con el mensaje preparado. También podés copiarlo con un toque.',
        errors: {
          nameRequired: 'Por favor ingresá tu nombre.',
          countryRequired: 'Por favor seleccioná tu país.',
          emailRequired: 'Por favor ingresá tu correo electrónico.',
          emailInvalid: 'Por favor ingresá un correo electrónico válido.',
          descriptionRequired: 'Por favor incluí una breve descripción del proyecto.',
        },
        prepared: {
          title: 'Correo de Consulta Preparado',
          notice:
            'Se solicitó abrir tu aplicación de correo con el mensaje preparado abajo. Si no se abrió automáticamente en tu dispositivo, usá el enlace directo o copiá el texto para enviarlo a nexoya89@gmail.com.',
          subjectLabel: 'Asunto',
          openMailLabel: 'Abrir App de Correo',
          copyLabel: 'Copiar Mensaje Preparado',
          copiedLabel: 'Mensaje Copiado',
          copyFailedLabel: 'Copialo manualmente abajo',
          editLabel: 'Editar Consulta',
          mailSubjectPrefix: 'Consulta PUMPALABS',
        },
      },
    },
    footer: {
      descriptor: 'Soluciones Digitales Internacionales e Inteligencia Comercial',
      motto: 'FROM BUSINESS INTELLIGENCE TO DIGITAL SOLUTIONS.',
      baseNotice: 'Operando desde Argentina · Mercados: EE. UU., CA, UK, ES, CL y UY',
      copyright: '© 2026 PUMPALABS. Todos los derechos reservados.',
    },
  },
};
