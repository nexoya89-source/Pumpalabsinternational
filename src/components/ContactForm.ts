import {BUSINESS_EMAIL} from '../i18n/translations';
import type {ContactFormData, ServiceOption, TranslationContent} from '../types';
import {escapeHtml, isValidEmail} from '../utils/dom';

export interface FormErrors {
  name?: string;
  country?: string;
  email?: string;
  description?: string;
}

export interface PreparedEmail {
  subject: string;
  body: string;
  mailtoUrl: string;
}

export function buildPreparedEmail(
  data: ContactFormData,
  t: TranslationContent,
): PreparedEmail {
  const serviceEntry = t.contact.form.serviceOptions.find(
    (opt) => opt.value === data.service,
  );
  const serviceLabel = serviceEntry ? serviceEntry.label : data.service;

  const subject = `${t.contact.form.prepared.mailSubjectPrefix} — ${data.name.trim()}${data.company.trim() ? ` (${data.company.trim()})` : ''}`;

  const lines = [
    `${t.contact.form.nameLabel}: ${data.name.trim()}`,
    `${t.contact.form.companyLabel}: ${data.company.trim() || '-'}`,
    `${t.contact.form.countryLabel}: ${data.country.trim()}`,
    `${t.contact.form.emailLabel}: ${data.email.trim()}`,
    `${t.contact.form.serviceLabel}: ${serviceLabel}`,
    '',
    `${t.contact.form.descriptionLabel}:`,
    data.description.trim(),
  ];

  const body = lines.join('\n');
  const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return {subject, body, mailtoUrl};
}

export function validateContactForm(
  data: ContactFormData,
  t: TranslationContent,
): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = t.contact.form.errors.nameRequired;
  }
  if (!data.country.trim()) {
    errors.country = t.contact.form.errors.countryRequired;
  }
  if (!data.email.trim()) {
    errors.email = t.contact.form.errors.emailRequired;
  } else if (!isValidEmail(data.email)) {
    errors.email = t.contact.form.errors.emailInvalid;
  }
  if (!data.description.trim()) {
    errors.description = t.contact.form.errors.descriptionRequired;
  }

  return errors;
}

export function renderContactForm(
  t: TranslationContent,
  formData: ContactFormData,
  errors: FormErrors,
  prepared: PreparedEmail | null,
  copyState: 'idle' | 'copied' | 'failed',
): string {
  if (prepared) {
    const feedbackText =
      copyState === 'copied'
        ? t.contact.form.prepared.copiedLabel
        : copyState === 'failed'
          ? t.contact.form.prepared.copyFailedLabel
          : '';

    return `
      <div class="prepared-box" aria-live="polite">
        <div class="prepared-banner">
          <h3 class="prepared-title">${t.contact.form.prepared.title}</h3>
          <p class="prepared-notice">${t.contact.form.prepared.notice}</p>
        </div>

        <div>
          <p class="contact-detail-label">${t.contact.form.prepared.subjectLabel}</p>
          <p class="contact-detail-value">${escapeHtml(prepared.subject)}</p>
        </div>

        <pre class="prepared-preview">${escapeHtml(prepared.body)}</pre>

        <div class="form-actions">
          <a href="${escapeHtml(prepared.mailtoUrl)}" class="btn-primary">
            ${t.contact.form.prepared.openMailLabel}
          </a>
          <button type="button" class="btn-secondary" id="copy-prepared-btn">
            ${t.contact.form.prepared.copyLabel}
          </button>
          <button type="button" class="btn-secondary" id="edit-inquiry-btn">
            ${t.contact.form.prepared.editLabel}
          </button>
        </div>
        ${feedbackText ? `<p class="copy-feedback" role="status">${escapeHtml(feedbackText)}</p>` : ''}
      </div>
    `;
  }

  const f = t.contact.form;

  return `
    <form id="pumpalabs-contact-form" class="form-grid" novalidate>
      <div class="form-grid-two">
        <div class="field-group">
          <label for="contact-name" class="field-label">${f.nameLabel} *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autocomplete="name"
            class="field-input ${errors.name ? 'is-invalid' : ''}"
            placeholder="${escapeHtml(f.namePlaceholder)}"
            value="${escapeHtml(formData.name)}"
            aria-invalid="${errors.name ? 'true' : 'false'}"
            aria-describedby="error-name"
            required
          />
          <p id="error-name" class="field-error" aria-live="polite">${errors.name ? escapeHtml(errors.name) : ''}</p>
        </div>

        <div class="field-group">
          <label for="contact-company" class="field-label">${f.companyLabel}</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autocomplete="organization"
            class="field-input"
            placeholder="${escapeHtml(f.companyPlaceholder)}"
            value="${escapeHtml(formData.company)}"
          />
          <p class="field-error" aria-hidden="true"></p>
        </div>
      </div>

      <div class="form-grid-two">
        <div class="field-group">
          <label for="contact-country" class="field-label">${f.countryLabel} *</label>
          <select
            id="contact-country"
            name="country"
            class="field-select ${errors.country ? 'is-invalid' : ''}"
            aria-invalid="${errors.country ? 'true' : 'false'}"
            aria-describedby="error-country"
            required
          >
            <option value="">${escapeHtml(f.countryPlaceholder)}</option>
            ${f.countryOptions
              .map(
                (country) =>
                  `<option value="${escapeHtml(country)}" ${formData.country === country ? 'selected' : ''}>${escapeHtml(country)}</option>`,
              )
              .join('')}
          </select>
          <p id="error-country" class="field-error" aria-live="polite">${errors.country ? escapeHtml(errors.country) : ''}</p>
        </div>

        <div class="field-group">
          <label for="contact-email" class="field-label">${f.emailLabel} *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autocomplete="email"
            class="field-input ${errors.email ? 'is-invalid' : ''}"
            placeholder="${escapeHtml(f.emailPlaceholder)}"
            value="${escapeHtml(formData.email)}"
            aria-invalid="${errors.email ? 'true' : 'false'}"
            aria-describedby="error-email"
            required
          />
          <p id="error-email" class="field-error" aria-live="polite">${errors.email ? escapeHtml(errors.email) : ''}</p>
        </div>
      </div>

      <div class="field-group">
        <label for="contact-service" class="field-label">${f.serviceLabel} *</label>
        <select id="contact-service" name="service" class="field-select" required>
          ${f.serviceOptions
            .map(
              (option) =>
                `<option value="${option.value}" ${formData.service === option.value ? 'selected' : ''}>${escapeHtml(option.label)}</option>`,
            )
            .join('')}
        </select>
      </div>

      <div class="field-group">
        <label for="contact-description" class="field-label">${f.descriptionLabel} *</label>
        <textarea
          id="contact-description"
          name="description"
          class="field-textarea ${errors.description ? 'is-invalid' : ''}"
          placeholder="${escapeHtml(f.descriptionPlaceholder)}"
          aria-invalid="${errors.description ? 'true' : 'false'}"
          aria-describedby="error-description"
          required
        >${escapeHtml(formData.description)}</textarea>
        <p id="error-description" class="field-error" aria-live="polite">${errors.description ? escapeHtml(errors.description) : ''}</p>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-primary">${f.submitLabel}</button>
        <button type="button" class="btn-secondary" id="reset-form-btn">${f.resetLabel}</button>
      </div>
      <p class="form-note">${f.privacyNote}</p>
    </form>
  `;
}

export function readFormInputs(root: HTMLElement, fallback: ContactFormData): ContactFormData {
  const nameInput = root.querySelector<HTMLInputElement>('#contact-name');
  const companyInput = root.querySelector<HTMLInputElement>('#contact-company');
  const countrySelect = root.querySelector<HTMLSelectElement>('#contact-country');
  const emailInput = root.querySelector<HTMLInputElement>('#contact-email');
  const serviceSelect = root.querySelector<HTMLSelectElement>('#contact-service');
  const descInput = root.querySelector<HTMLTextAreaElement>('#contact-description');

  return {
    name: nameInput ? nameInput.value : fallback.name,
    company: companyInput ? companyInput.value : fallback.company,
    country: countrySelect ? countrySelect.value : fallback.country,
    email: emailInput ? emailInput.value : fallback.email,
    service: (serviceSelect ? serviceSelect.value : fallback.service) as ServiceOption,
    description: descInput ? descInput.value : fallback.description,
  };
}
