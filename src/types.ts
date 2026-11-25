export type Language = 'en' | 'es';

export type ServiceOption = 'intelligence' | 'digital' | 'integrated';

export interface DivisionCapability {
  index: string;
  title: string;
  description: string;
}

export interface DivisionContent {
  id: 'intelligence' | 'digital';
  index: string;
  name: string;
  tagline: string;
  summary: string;
  imageAlt: string;
  ctaLabel: string;
  capabilities: DivisionCapability[];
}

export interface MarketItem {
  code: string;
  name: string;
  region: string;
  focus: string;
}

export interface WorkflowStep {
  index: string;
  title: string;
  description: string;
}

export interface DemoProject {
  id: string;
  index: string;
  classification: string;
  title: string;
  sector: string;
  description: string;
  deliverables: string[];
  url: string;
  ctaLabel: string;
  imageAlt: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  country: string;
  email: string;
  service: ServiceOption;
  description: string;
}

export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    divisions: string;
    coverage: string;
    demos: string;
    contact: string;
    cta: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    motto: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    facts: Array<{
      label: string;
      value: string;
    }>;
  };
  divisions: {
    heading: string;
    subheading: string;
    items: [DivisionContent, DivisionContent];
  };
  coverage: {
    heading: string;
    subheading: string;
    baseLabel: string;
    baseValue: string;
    baseDescription: string;
    marketsTitle: string;
    markets: MarketItem[];
    workflowTitle: string;
    workflow: WorkflowStep[];
  };
  demos: {
    heading: string;
    subheading: string;
    disclaimer: string;
    items: DemoProject[];
  };
  contact: {
    heading: string;
    subheading: string;
    directEmailLabel: string;
    directEmailNote: string;
    baseLabel: string;
    baseValue: string;
    marketsLabel: string;
    marketsValue: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      countryLabel: string;
      countryPlaceholder: string;
      countryOptions: string[];
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      serviceOptions: Array<{
        value: ServiceOption;
        label: string;
      }>;
      descriptionLabel: string;
      descriptionPlaceholder: string;
      submitLabel: string;
      resetLabel: string;
      privacyNote: string;
      errors: {
        nameRequired: string;
        countryRequired: string;
        emailRequired: string;
        emailInvalid: string;
        descriptionRequired: string;
      };
      prepared: {
        title: string;
        notice: string;
        subjectLabel: string;
        openMailLabel: string;
        copyLabel: string;
        copiedLabel: string;
        copyFailedLabel: string;
        editLabel: string;
        mailSubjectPrefix: string;
      };
    };
  };
  footer: {
    descriptor: string;
    motto: string;
    baseNotice: string;
    copyright: string;
  };
}
