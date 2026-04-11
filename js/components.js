// /js/components.js - Central configuration for entire site
(function() {
  'use strict';

  // ==================== CONFIGURATION (EDIT THIS SECTION) ====================
  const CONFIG = {
    languages: [
      { code: 'en', label: 'EN', name: 'English' },
      { code: 'fr', label: 'FR', name: 'Français' },
      { code: 'de', label: 'DE', name: 'Deutsch' },
      { code: 'ar', label: 'AR', name: 'العربية', rtl: true }
    ],
    siteName: 'EN-BOARDING',
    siteUrl: 'https://en-boarding.com',
    contactEmail: 'enboarding@gmail.com',
    social: {
      linkedin: '',
      twitter: '',
      instagram: ''
    },
    analyticsId: 'G-G6E7B0ECTW',
    cleanUrls: false
  };

  // ==================== TRANSLATIONS ====================
  const translations = {
    nav: {
      en: { home: 'Home', about: 'About', services: 'Services', blog: 'Blog', cta: 'Book your first session' },
      fr: { home: 'Accueil', about: 'À propos', services: 'Services', blog: 'Blog', cta: 'Réservez votre première séance' },
      de: { home: 'Startseite', about: 'Über mich', services: 'Leistungen', blog: 'Blog', cta: 'Erste Session buchen' },
      ar: { home: 'الرئيسية', about: 'من أنا', services: 'الخدمات', blog: 'المدونة', cta: 'احجز جلستك الأولى' }
    },
    footer: {
      en: { tagline: 'Strategic support for early-stage founders', privacy: 'Privacy', terms: 'Terms' },
      fr: { tagline: 'Accompagnement stratégique pour fondateurs en phase de démarrage', privacy: 'Confidentialité', terms: 'Conditions' },
      de: { tagline: 'Strategische Unterstützung für Gründer in der Frühphase', privacy: 'Datenschutz', terms: 'AGB' },
      ar: { tagline: 'دعم استراتيجي للمؤسسين في المراحل المبكرة', privacy: 'الخصوصية', terms: 'الشروط' }
    },
    cookie: {
      en: { text: 'We use cookies.', privacy: 'Privacy policy', accept: 'Accept' },
      fr: { text: 'Nous utilisons des cookies.', privacy: 'Politique de confidentialité', accept: 'Accepter' },
      de: { text: 'Wir verwenden Cookies.', privacy: 'Datenschutzerklärung', accept: 'Akzeptieren' },
      ar: { text: 'نحن نستخدم ملفات تعريف الارتباط.', privacy: 'سياسة الخصوصية', accept: 'قبول' }
    },
    langLabel: {
      en: 'Language', fr: 'Langue', de: 'Sprache', ar: 'اللغة'
    },
    pageTitles: {
      'index': { en: 'Free Business Clarity Session', fr: 'Séance gratuite de clarté business', de: 'Kostenlose Business-Klarheits-Session', ar: 'جلسة وضوح مجانية للأعمال' },
      'about': { en: 'About', fr: 'À propos', de: 'Über mich', ar: 'من أنا' },
      'blog': { en: 'Blog', fr: 'Blog', de: 'Blog', ar: 'المدونة' },
      'booking': { en: 'Book your first session', fr: 'Réservez votre première séance', de: 'Erste Session buchen', ar: 'احجز جلستك الأولى' },
      'services': { en: 'Services', fr: 'Services', de: 'Leistungen', ar: 'الخدمات' },
      'privacy': { en: 'Privacy Policy', fr: 'Politique de confidentialité', de: 'Datenschutzerklärung', ar: 'سياسة الخصوصية' },
      'terms': { en: 'Terms', fr: 'Conditions', de: 'AGB', ar: 'الشروط' }
    }
  };

  // ==================== DETECT CURRENT PAGE ====================
  const path = window.location.pathname;
  let currentFile = path.substring(path.lastIndexOf('/') + 1) || 'en_index.html';
  if (currentFile === '') currentFile = 'en_index.html';
  
  let currentLang = 'en';
  for (const lang of CONFIG.languages) {
    if (currentFile.startsWith(lang.code + '_')) {
      currentLang = lang.code;
      break;
    }
  }
  
  const baseFile = currentFile.replace(/^(en|fr|de|ar)_/, '').replace('.html', '');
  const fileExt = CONFIG.cleanUrls ? '' : '.html';
  
  const langConfig = CONFIG.languages.find(l => l.code === currentLang);
  if (langConfig && langConfig.rtl) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', currentLang);
  } else {
    document.documentElement.setAttribute('lang', currentLang);
  }

  window.SITE = { currentLang, baseFile, fileExt, config: CONFIG, t: translations };

  // ==================== INJECT ANALYTICS ====================
  if (CONFIG.analyticsId) {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.analyticsId}`;
    document.head.appendChild(gtagScript);
    
    const gtagInit = document.createElement('script');
    gtagInit.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${CONFIG.analyticsId}');`;
    document.head.appendChild(gtagInit);
  }

  // ==================== META TAGS ====================
  function setMetaTags() {
    const pageKey = baseFile === 'index' ? 'index' : 
                    baseFile.includes('about') ? 'about' :
                    baseFile.includes('blog') ? 'blog' :
                    baseFile.includes('booking') ? 'booking' :
                    baseFile.includes('services') || baseFile.includes('free-tools') ? 'services' :
                    baseFile.includes('privacy') ? 'privacy' :
                    baseFile.includes('terms') ? 'terms' : 'index';
    
    const pageTitle = translations.pageTitles[pageKey]?.[currentLang] || CONFIG.siteName;
    document.title = `${CONFIG.siteName} · ${pageTitle}`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageTitle);
  }

  // ==================== NAVIGATION (dropdown without arrow) ====================
  function createNavigation() {
    const container = document.getElementById('global-header');
    if (!container) return;
    
    const t = translations.nav[currentLang] || translations.nav.en;
    const lang = currentLang;
    
    let dropdownOptions = '';
    CONFIG.languages.forEach(l => {
      const href = l.code + '_' + baseFile + fileExt;
      const isActive = (l.code === currentLang);
      dropdownOptions += `<a href="${href}"${isActive ? ' class="active-lang"' : ''}>${l.label}</a>`;
    });
    
    const currentLangLabel = CONFIG.languages.find(l => l.code === currentLang)?.label || 'EN';
    
    const navHtml = `
      <div class="logo-wrap">
        <a href="${lang}_index${fileExt}" class="logo">EN-<span>BOARDING</span></a>
      </div>
      <div class="nav-links">
        <a href="${lang}_index${fileExt}">${t.home}</a>
        <a href="${lang}_about${fileExt}">${t.about}</a>
        <a href="${lang}_services${fileExt}">${t.services}</a>
        <a href="${lang}_blog${fileExt}">${t.blog}</a>
      </div>
      <div class="header-cta">
        <div class="lang-dropdown">
          <button class="lang-dropdown-btn">${currentLangLabel}</button>
          <div class="lang-dropdown-content">
            ${dropdownOptions}
          </div>
        </div>
        <a href="${lang}_booking${fileExt}" class="btn btn-primary">${t.cta}</a>
      </div>
    `;
    
    container.innerHTML = navHtml;
    
    // Highlight active nav link
    const pageMap = {
      'index': 'home', 'about': 'about', 
      'services': 'services', 'free-tools': 'services', 'archetype': 'services', 'structural-gap': 'services',
      'blog': 'blog', 'analysis-paralysis': 'blog', 'solo-founder-burnout': 'blog', 'monday-morning-test': 'blog', 'idea-vs-business': 'blog'
    };
    const activeKey = pageMap[baseFile] || '';
    const links = container.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.remove('active');
      if ((activeKey === 'home' && href.includes('index')) ||
          (activeKey === 'about' && href.includes('about')) ||
          (activeKey === 'services' && (href.includes('services') || href.includes('free-tools'))) ||
          (activeKey === 'blog' && (href.includes('blog') || href.includes('analysis') || href.includes('founder') || href.includes('morning') || href.includes('idea')))) {
        link.classList.add('active');
      }
    });
  }

  // ==================== FOOTER ====================
  function createFooter() {
    const container = document.getElementById('global-footer');
    if (!container) return;
    
    const t = translations.footer[currentLang] || translations.footer.en;
    const lang = currentLang;
    const email = CONFIG.contactEmail;
    
    let socialHtml = '';
    if (CONFIG.social.linkedin) {
      socialHtml += `<a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`;
    }
    
    const footerHtml = `
      <div style="font-weight:700;">En-boarding — ${t.tagline}</div>
      <div class="footer-links">
        ${socialHtml}
        <a href="${lang}_privacy${fileExt}">${t.privacy}</a>
        <a href="${lang}_terms${fileExt}">${t.terms}</a>
        <a href="mailto:${email}">${email}</a>
      </div>
    `;
    
    container.innerHTML = footerHtml;
  }

  // ==================== COOKIE CONSENT ====================
  function createCookieConsent() {
    if (localStorage.getItem('cookieConsent')) return;
    
    const container = document.getElementById('cookie-consent');
    if (!container) return;
    
    const t = translations.cookie[currentLang] || translations.cookie.en;
    const lang = currentLang;
    
    container.style.cssText = 'position:fixed; bottom:0; left:0; right:0; background:#f7f7f8; padding:12px; text-align:center; font-size:0.85rem; border-top:1px solid #e9eaec; z-index:999;';
    
    container.innerHTML = `
      <span>${t.text}</span>
      <a href="${lang}_privacy${fileExt}" style="margin:0 12px; color:var(--action);">${t.privacy}</a>
      <button id="accept-cookies" style="background:#ff824d; color:white; border:none; padding:6px 16px; border-radius:999px; cursor:pointer;">${t.accept}</button>
    `;
    
    container.style.display = 'block';
    document.getElementById('accept-cookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'true');
      container.style.display = 'none';
    });
  }

  // ==================== INIT ====================
  function init() {
    setMetaTags();
    createNavigation();
    createFooter();
    createCookieConsent();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
