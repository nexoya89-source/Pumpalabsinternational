import {ASSETS} from '../data/assets';
import {BUSINESS_EMAIL, TRANSLATIONS} from '../i18n/translations';
import type {ContactFormData, Language, ServiceOption} from '../types';
import {escapeHtml, scrollToSection} from '../utils/dom';
import {
  buildPreparedEmail,
  type FormErrors,
  type PreparedEmail,
  readFormInputs,
  renderContactForm,
  validateContactForm,
} from './ContactForm';
import {bindHeaderEvents, renderHeader} from './Header';

const STORAGE_LANG_KEY = 'pumpalabs_lang';

export class PumpalabsApp {
  private root: HTMLElement;
  private lang: Language = 'en';
  private isMenuOpen = false;
  private formData: ContactFormData = {
    name: '',
    company: '',
    country: '',
    email: '',
    service: 'integrated',
    description: '',
  };
  private formErrors: FormErrors = {};
  private preparedEmail: PreparedEmail | null = null;
  private copyState: 'idle' | 'copied' | 'failed' = 'idle';

  constructor(root: HTMLElement) {
    this.root = root;
    this.lang = this.detectInitialLanguage();
  }

  private detectInitialLanguage(): Language {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'es' || urlLang === 'en') {
        return urlLang;
      }
      const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
      if (saved === 'es' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore storage access restrictions
    }
    return 'en';
  }

  public mount(): void {
    this.syncDocumentMeta();
    this.render();
  }

  private syncDocumentMeta(): void {
    const t = TRANSLATIONS[this.lang];
    document.documentElement.lang = this.lang;
    document.title = t.meta.title;
    const metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (metaDesc) {
      metaDesc.content = t.meta.description;
    }
  }

  private toggleLanguage(): void {
    // Preserve typed form values before re-rendering
    if (!this.preparedEmail) {
      this.formData = readFormInputs(this.root, this.formData);
    }
    this.lang = this.lang === 'en' ? 'es' : 'en';
    try {
      window.localStorage.setItem(STORAGE_LANG_KEY, this.lang);
    } catch {
      // Ignore storage access restrictions
    }
    this.formErrors = {};
    this.copyState = 'idle';
    this.syncDocumentMeta();
    this.render();
  }

  private selectDivisionAndScroll(service: ServiceOption): void {
    if (!this.preparedEmail) {
      this.formData = readFormInputs(this.root, this.formData);
    }
    this.preparedEmail = null;
    this.formData.service = service;
    this.render();
    scrollToSection('contact');
  }

  private render(): void {
    const t = TRANSLATIONS[this.lang];

    this.root.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to content</a>

      ${renderHeader(t, this.lang, this.isMenuOpen)}

      <main id="main-content">
        <!-- HERO SECTION -->
        <section id="top" class="hero-section">
          <div class="container">
            <div class="hero-grid">
              <div class="hero-content">
                <p class="hero-kicker">${escapeHtml(t.hero.kicker)}</p>
                <h1 class="hero-headline">${escapeHtml(t.hero.headline)}</h1>
                <p class="hero-subheadline">${escapeHtml(t.hero.subheadline)}</p>
                <div class="hero-actions">
                  <a href="#contact" class="btn-primary" data-scroll-target="contact">
                    ${escapeHtml(t.hero.primaryCta)}
                  </a>
                  <a href="#divisions" class="btn-secondary" data-scroll-target="divisions">
                    ${escapeHtml(t.hero.secondaryCta)}
                  </a>
                </div>
              </div>

              <div class="hero-media">
                <img
                  src="${ASSETS.heroArchitecture}"
                  alt="${escapeHtml(t.hero.imageAlt)}"
                  referrerpolicy="no-referrer"
                  loading="eager"
                />
              </div>
            </div>

            <div class="hero-facts-strip" aria-label="Operational overview">
              ${t.hero.facts
                .map(
                  (fact) => `
                  <div class="fact-item">
                    <span class="fact-label">${escapeHtml(fact.label)}</span>
                    <span class="fact-value">${escapeHtml(fact.value)}</span>
                  </div>
                `,
                )
                .join('')}
            </div>
          </div>
        </section>

        <!-- DIVISIONS SECTION -->
        <section id="divisions" class="section">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">${escapeHtml(t.divisions.heading)}</h2>
              <p class="section-subtitle">${escapeHtml(t.divisions.subheading)}</p>
            </div>

            <div class="divisions-grid">
              ${t.divisions.items
                .map((division) => {
                  const imgSrc =
                    division.id === 'intelligence'
                      ? ASSETS.divisionIntelligence
                      : ASSETS.divisionDigital;

                  return `
                    <article class="division-card">
                      <div class="division-media">
                        <img
                          src="${imgSrc}"
                          alt="${escapeHtml(division.imageAlt)}"
                          referrerpolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>
                      <div class="division-body">
                        <div class="division-header">
                          <span class="division-index">${escapeHtml(division.index)}</span>
                          <h3 class="division-title">${escapeHtml(division.name)}</h3>
                          <p class="division-tagline">${escapeHtml(division.tagline)}</p>
                        </div>
                        <p class="division-summary">${escapeHtml(division.summary)}</p>
                        <ul class="capability-list">
                          ${division.capabilities
                            .map(
                              (cap) => `
                              <li class="capability-item">
                                <span class="capability-num">${escapeHtml(cap.index)}</span>
                                <div>
                                  <h4 class="capability-title">${escapeHtml(cap.title)}</h4>
                                  <p class="capability-desc">${escapeHtml(cap.description)}</p>
                                </div>
                              </li>
                            `,
                            )
                            .join('')}
                        </ul>
                        <div class="division-footer">
                          <button
                            type="button"
                            class="btn-secondary"
                            data-select-service="${division.id}"
                          >
                            ${escapeHtml(division.ctaLabel)}
                          </button>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join('')}
            </div>
          </div>
        </section>

        <!-- COVERAGE & WORKFLOW SECTION -->
        <section id="coverage" class="section">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">${escapeHtml(t.coverage.heading)}</h2>
              <p class="section-subtitle">${escapeHtml(t.coverage.subheading)}</p>
            </div>

            <div class="coverage-layout">
              <div>
                <div class="base-panel">
                  <p class="base-label">${escapeHtml(t.coverage.baseLabel)}</p>
                  <h3 class="base-value">${escapeHtml(t.coverage.baseValue)}</h3>
                  <p class="base-desc">${escapeHtml(t.coverage.baseDescription)}</p>
                </div>

                <div class="workflow-list">
                  <h3 class="workflow-heading">${escapeHtml(t.coverage.workflowTitle)}</h3>
                  ${t.coverage.workflow
                    .map(
                      (step) => `
                      <div class="workflow-step">
                        <span class="workflow-index">${escapeHtml(step.index)}</span>
                        <div>
                          <h4 class="workflow-title">${escapeHtml(step.title)}</h4>
                          <p class="workflow-desc">${escapeHtml(step.description)}</p>
                        </div>
                      </div>
                    `,
                    )
                    .join('')}
                </div>
              </div>

              <div class="markets-panel">
                <h3 class="markets-title">${escapeHtml(t.coverage.marketsTitle)}</h3>
                <div class="markets-grid">
                  ${t.coverage.markets
                    .map(
                      (market) => `
                      <div class="market-item">
                        <div class="market-top">
                          <span class="market-code">${escapeHtml(market.code)}</span>
                          <h4 class="market-name">${escapeHtml(market.name)}</h4>
                        </div>
                        <p class="market-region">${escapeHtml(market.region)}</p>
                        <p class="market-focus">${escapeHtml(market.focus)}</p>
                      </div>
                    `,
                    )
                    .join('')}
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- PORTFOLIO / DEMONSTRATION PROJECTS SECTION -->
        <section id="demos" class="section">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">${escapeHtml(t.demos.heading)}</h2>
              <p class="section-subtitle">${escapeHtml(t.demos.subheading)}</p>
              <p class="demos-disclaimer">${escapeHtml(t.demos.disclaimer)}</p>
            </div>

            <div class="demos-grid">
              ${t.demos.items
                .map((demo) => {
                  const imgSrc =
                    demo.id === 'demo-unas' ? ASSETS.demoUnas : ASSETS.demoTaller;

                  return `
                    <article class="demo-card">
                      <div class="demo-media">
                        <img
                          src="${imgSrc}"
                          alt="${escapeHtml(demo.imageAlt)}"
                          referrerpolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>
                      <div class="demo-body">
                        <div class="demo-meta">
                          <span>${escapeHtml(demo.classification)}</span>
                          <span aria-hidden="true">·</span>
                          <span>${escapeHtml(demo.sector)}</span>
                        </div>
                        <h3 class="demo-title">${escapeHtml(demo.title)}</h3>
                        <p class="demo-desc">${escapeHtml(demo.description)}</p>
                        <ul class="demo-deliverables">
                          ${demo.deliverables
                            .map((item) => `<li>${escapeHtml(item)}</li>`)
                            .join('')}
                        </ul>
                        <div class="demo-footer">
                          <a
                            href="${escapeHtml(demo.url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-secondary"
                          >
                            ${escapeHtml(demo.ctaLabel)}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join('')}
            </div>
          </div>
        </section>

        <!-- CONTACT SECTION -->
        <section id="contact" class="section">
          <div class="container">
            <div class="section-header">
              <h2 class="section-title">${escapeHtml(t.contact.heading)}</h2>
              <p class="section-subtitle">${escapeHtml(t.contact.subheading)}</p>
            </div>

            <div class="contact-layout">
              <aside class="contact-info-card" aria-label="Direct contact information">
                <div class="contact-detail">
                  <p class="contact-detail-label">${escapeHtml(t.contact.directEmailLabel)}</p>
                  <a href="mailto:${BUSINESS_EMAIL}" class="contact-email-link">${BUSINESS_EMAIL}</a>
                  <p class="contact-detail-note">${escapeHtml(t.contact.directEmailNote)}</p>
                </div>

                <div class="contact-detail">
                  <p class="contact-detail-label">${escapeHtml(t.contact.baseLabel)}</p>
                  <p class="contact-detail-value">${escapeHtml(t.contact.baseValue)}</p>
                </div>

                <div class="contact-detail">
                  <p class="contact-detail-label">${escapeHtml(t.contact.marketsLabel)}</p>
                  <p class="contact-detail-value">${escapeHtml(t.contact.marketsValue)}</p>
                </div>
              </aside>

              <div class="contact-form-card">
                ${renderContactForm(
                  t,
                  this.formData,
                  this.formErrors,
                  this.preparedEmail,
                  this.copyState,
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <!-- FOOTER -->
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <p class="footer-brand">PUMPALABS</p>
            <p class="footer-text">${escapeHtml(t.footer.descriptor)}</p>
            <p class="footer-motto">${escapeHtml(t.footer.motto)}</p>
          </div>

          <div class="footer-right">
            <nav class="footer-links" aria-label="Footer navigation">
              <a href="#divisions" data-scroll-target="divisions">${escapeHtml(t.nav.divisions)}</a>
              <a href="#coverage" data-scroll-target="coverage">${escapeHtml(t.nav.coverage)}</a>
              <a href="#demos" data-scroll-target="demos">${escapeHtml(t.nav.demos)}</a>
              <a href="#contact" data-scroll-target="contact">${escapeHtml(t.nav.contact)}</a>
              <a href="mailto:${BUSINESS_EMAIL}">${BUSINESS_EMAIL}</a>
            </nav>
            <p class="footer-text">${escapeHtml(t.footer.baseNotice)}</p>
            <p class="footer-text">${escapeHtml(t.footer.copyright)}</p>
          </div>
        </div>
      </footer>
    `;

    this.bindEvents();
  }

  private bindEvents(): void {
    const t = TRANSLATIONS[this.lang];

    bindHeaderEvents(
      this.root,
      {
        onToggleLanguage: () => this.toggleLanguage(),
        onNavigate: (id) => scrollToSection(id),
      },
      (open) => {
        this.isMenuOpen = open;
        this.updateDrawerDOM();
      },
      () => this.isMenuOpen,
    );

    const scrollLinks = this.root.querySelectorAll<HTMLElement>('[data-scroll-target]');
    scrollLinks.forEach((el) => {
      el.addEventListener('click', (event) => {
        const target = el.getAttribute('data-scroll-target');
        if (!target) return;
        event.preventDefault();
        scrollToSection(target);
      });
    });

    const serviceBtns = this.root.querySelectorAll<HTMLButtonElement>(
      '[data-select-service]',
    );
    serviceBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const svc = btn.getAttribute('data-select-service') as ServiceOption | null;
        if (svc) this.selectDivisionAndScroll(svc);
      });
    });

    const form = this.root.querySelector<HTMLFormElement>('#pumpalabs-contact-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.formData = readFormInputs(this.root, this.formData);
        this.formErrors = validateContactForm(this.formData, t);

        if (Object.keys(this.formErrors).length > 0) {
          this.render();
          const firstError = this.root.querySelector<HTMLElement>('.is-invalid');
          firstError?.focus();
          return;
        }

        const prepared = buildPreparedEmail(this.formData, t);
        this.preparedEmail = prepared;
        this.copyState = 'idle';
        this.render();

        // Trigger default email client with pre-filled inquiry without simulating server delivery
        window.location.href = prepared.mailtoUrl;
      });
    }

    const resetBtn = this.root.querySelector<HTMLButtonElement>('#reset-form-btn');
    resetBtn?.addEventListener('click', () => {
      this.formData = {
        name: '',
        company: '',
        country: '',
        email: '',
        service: 'integrated',
        description: '',
      };
      this.formErrors = {};
      this.preparedEmail = null;
      this.copyState = 'idle';
      this.render();
    });

    const editBtn = this.root.querySelector<HTMLButtonElement>('#edit-inquiry-btn');
    editBtn?.addEventListener('click', () => {
      this.preparedEmail = null;
      this.copyState = 'idle';
      this.render();
    });

    const copyBtn = this.root.querySelector<HTMLButtonElement>('#copy-prepared-btn');
    copyBtn?.addEventListener('click', async () => {
      if (!this.preparedEmail) return;
      const textToCopy = `${this.preparedEmail.subject}\n\n${this.preparedEmail.body}`;
      try {
        await navigator.clipboard.writeText(textToCopy);
        this.copyState = 'copied';
      } catch {
        this.copyState = 'failed';
      }
      this.render();
    });
  }

  private updateDrawerDOM(): void {
    const t = TRANSLATIONS[this.lang];
    const drawer = this.root.querySelector<HTMLElement>('#mobile-nav-drawer');
    const menuBtn = this.root.querySelector<HTMLButtonElement>('#mobile-menu-btn');
    if (!drawer || !menuBtn) return;

    drawer.classList.toggle('is-open', this.isMenuOpen);
    drawer.setAttribute('aria-hidden', this.isMenuOpen ? 'false' : 'true');
    menuBtn.setAttribute('aria-expanded', this.isMenuOpen ? 'true' : 'false');
    menuBtn.setAttribute(
      'aria-label',
      this.isMenuOpen ? t.nav.menuCloseLabel : t.nav.menuOpenLabel,
    );
    menuBtn.innerHTML = this.isMenuOpen
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/></svg>`;
  }
}
