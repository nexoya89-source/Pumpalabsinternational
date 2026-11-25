import type {Language, TranslationContent} from '../types';

export interface HeaderHandlers {
  onToggleLanguage: () => void;
  onNavigate: (sectionId: string) => void;
}

export function renderHeader(
  t: TranslationContent,
  lang: Language,
  isMenuOpen: boolean,
): string {
  const nextLangLabel = lang === 'en' ? 'ES' : 'EN';
  const currentLangDisplay = lang === 'en' ? 'EN / ES' : 'ES / EN';

  return `
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <a href="#top" class="brand-wordmark" data-nav-target="top">PUMPALABS</a>

        <nav class="desktop-nav" aria-label="Primary navigation">
          <a href="#divisions" class="nav-link" data-nav-target="divisions">${t.nav.divisions}</a>
          <a href="#coverage" class="nav-link" data-nav-target="coverage">${t.nav.coverage}</a>
          <a href="#demos" class="nav-link" data-nav-target="demos">${t.nav.demos}</a>
          <a href="#contact" class="nav-link" data-nav-target="contact">${t.nav.contact}</a>
        </nav>

        <div class="header-actions">
          <button
            type="button"
            class="lang-toggle"
            id="lang-toggle-btn"
            aria-label="${t.nav.languageLabel}"
            title="${t.nav.languageLabel}"
          >
            ${currentLangDisplay}
          </button>

          <a href="#contact" class="header-cta" data-nav-target="contact">
            ${t.nav.cta}
          </a>

          <button
            type="button"
            class="menu-toggle"
            id="mobile-menu-btn"
            aria-expanded="${isMenuOpen ? 'true' : 'false'}"
            aria-controls="mobile-nav-drawer"
            aria-label="${isMenuOpen ? t.nav.menuCloseLabel : t.nav.menuOpenLabel}"
          >
            ${
              isMenuOpen
                ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
                : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/></svg>`
            }
          </button>
        </div>
      </div>
    </header>

    <div
      id="mobile-nav-drawer"
      class="mobile-drawer ${isMenuOpen ? 'is-open' : ''}"
      aria-hidden="${isMenuOpen ? 'false' : 'true'}"
    >
      <nav class="mobile-nav-list" aria-label="Mobile navigation">
        <a href="#divisions" class="mobile-nav-link" data-nav-target="divisions">${t.nav.divisions}</a>
        <a href="#coverage" class="mobile-nav-link" data-nav-target="coverage">${t.nav.coverage}</a>
        <a href="#demos" class="mobile-nav-link" data-nav-target="demos">${t.nav.demos}</a>
        <a href="#contact" class="mobile-nav-link" data-nav-target="contact">${t.nav.contact}</a>
      </nav>
      <div class="mobile-drawer-footer">
        <button type="button" class="btn-secondary" id="mobile-lang-toggle-btn">
          ${lang === 'en' ? 'Cambiar a Español' : 'Switch to English'} (${nextLangLabel})
        </button>
        <a href="#contact" class="btn-primary" data-nav-target="contact">${t.nav.cta}</a>
      </div>
    </div>
  `;
}

export function bindHeaderEvents(
  container: HTMLElement,
  handlers: HeaderHandlers,
  setMenuOpen: (open: boolean) => void,
  getMenuOpen: () => boolean,
): void {
  const langBtn = container.querySelector<HTMLButtonElement>('#lang-toggle-btn');
  const mobileLangBtn = container.querySelector<HTMLButtonElement>(
    '#mobile-lang-toggle-btn',
  );
  const menuBtn = container.querySelector<HTMLButtonElement>('#mobile-menu-btn');

  langBtn?.addEventListener('click', () => {
    handlers.onToggleLanguage();
  });

  mobileLangBtn?.addEventListener('click', () => {
    setMenuOpen(false);
    handlers.onToggleLanguage();
  });

  menuBtn?.addEventListener('click', () => {
    setMenuOpen(!getMenuOpen());
  });

  const navLinks = container.querySelectorAll<HTMLElement>('[data-nav-target]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('data-nav-target');
      if (!targetId) return;
      event.preventDefault();
      setMenuOpen(false);
      if (targetId === 'top') {
        window.scrollTo({top: 0, behavior: 'smooth'});
      } else {
        handlers.onNavigate(targetId);
      }
    });
  });
}
