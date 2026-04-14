// /js/components.js - Central configuration for entire site
(function() {
  'use strict';

  // ==================== CONFIGURATION ====================
  const CONFIG = {
    languages: [
      { code: 'en', label: 'EN', name: 'English' },
      { code: 'fr', label: 'FR', name: 'Français' },
      { code: 'de', label: 'DE', name: 'Deutsch' },
      { code: 'ar', label: 'AR', name: 'العربية', rtl: true }
    ],
    siteName: 'Onboarding for Entrepreneurs',
    siteUrl: 'https://en-boarding.com',
    contactEmail: 'contact@en-boarding.com',
    social: {
      linkedin: '',
      twitter: '',
      instagram: ''
    },
    analyticsId: 'G-G6E7B0ECTW',
    gtmId: 'GTM-5FDK4KN2',
    cleanUrls: false
  };

  // ==================== TRANSLATIONS ====================
  const translations = {
    nav: {
      en: { home: 'Home', about: 'About', services: 'Services', blog: 'Blog', cta: 'Book your first session' },
      fr: { home: 'Accueil', about: 'À propos', services: 'Services', blog: 'Blog', cta: 'Réservez votre première séance' },
      de: { home: 'Startseite', about: 'Über uns', services: 'Leistungen', blog: 'Blog', cta: 'Erste Session buchen' },
      ar: { home: 'الرئيسية', about: 'من نحن', services: 'الخدمات', blog: 'المدونة', cta: 'احجز جلستك الأولى' }
    },
    footer: {
      en: { tagline: 'Strategic support for early-stage founders', privacy: 'Privacy', terms: 'Terms' },
      fr: { tagline: 'Accompagnement stratégique pour fondateurs en phase de démarrage', privacy: 'Confidentialité', terms: 'Conditions' },
      de: { tagline: 'Strategische Unterstützung für Gründer in der Frühphase', privacy: 'Datenschutz', terms: 'AGB' },
      ar: { tagline: 'دعم استراتيجي للمؤسسين في المراحل المبكرة', privacy: 'الخصوصية', terms: 'الشروط' }
    },
    cookie: {
      en: { text: 'We use cookies to improve your experience.', privacy: 'Privacy policy', accept: 'Accept' },
      fr: { text: 'Nous utilisons des cookies pour améliorer votre expérience.', privacy: 'Politique de confidentialité', accept: 'Accepter' },
      de: { text: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.', privacy: 'Datenschutzerklärung', accept: 'Akzeptieren' },
      ar: { text: 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك.', privacy: 'سياسة الخصوصية', accept: 'قبول' }
    },
    langLabel: {
      en: 'Language', fr: 'Langue', de: 'Sprache', ar: 'اللغة'
    },
    pageTitles: {
      'index': {
        en: 'Turn Your Idea or Skills Into Revenue | Business Consultancy | en-boarding',
        fr: 'Transformez votre idée ou compétences en revenus | Consultance business | en-boarding',
        de: 'Verwandeln Sie Ihre Idee oder Fähigkeiten in Einkommen | Unternehmensberatung | en-boarding',
        ar: 'حوّل فكرتك أو مهاراتك إلى دخل | استشارات أعمال | en-boarding'
      },
      'about': {
        en: 'About | Business Consultancy for Entrepreneurs | en-boarding',
        fr: 'À propos | Consultance business pour entrepreneurs | en-boarding',
        de: 'Über uns | Unternehmensberatung für Gründer | en-boarding',
        ar: 'من نحن | استشارات أعمال لرواد الأعمال | en-boarding'
      },
      'blog': {
        en: 'Blog | Insights for Early-Stage Founders | en-boarding',
        fr: 'Blog | Perspectives pour fondateurs en phase de démarrage | en-boarding',
        de: 'Blog | Einblicke für Gründer in der Frühphase | en-boarding',
        ar: 'المدونة | رؤى للمؤسسين في المراحل المبكرة | en-boarding'
      },
      'booking': {
        en: 'Book Your Free Clarity Session | en-boarding',
        fr: 'Réservez votre séance de clarté gratuite | en-boarding',
        de: 'Buchen Sie Ihre kostenlose Klarheitssitzung | en-boarding',
        ar: 'احجز جلستك المجانية للوضوح | en-boarding'
      },
      'services': {
        en: 'Services | Diagnose Your Business | en-boarding',
        fr: 'Services | Diagnostiquez votre entreprise | en-boarding',
        de: 'Leistungen | Diagnostizieren Sie Ihr Business | en-boarding',
        ar: 'الخدمات | شخّص مشروعك | en-boarding'
      },
      'privacy': {
        en: 'Privacy Policy | en-boarding',
        fr: 'Politique de confidentialité | en-boarding',
        de: 'Datenschutzerklärung | en-boarding',
        ar: 'سياسة الخصوصية | en-boarding'
      },
      'terms': {
        en: 'Terms of Service | en-boarding',
        fr: 'Conditions d\'utilisation | en-boarding',
        de: 'AGB | en-boarding',
        ar: 'الشروط | en-boarding'
      },
      'analysis-paralysis': {
        en: 'The Analysis Paralysis Tax | Blog | en-boarding',
        fr: 'La taxe de la paralysie d\'analyse | Blog | en-boarding',
        de: 'Die Analyse-Paralyse-Steuer | Blog | en-boarding',
        ar: 'ضريبة شلل التحليل | المدونة | en-boarding'
      },
      'solo-founder-burnout': {
        en: 'Why Solo Founders Burn Out | Blog | en-boarding',
        fr: 'Pourquoi les fondateurs solo s\'épuisent | Blog | en-boarding',
        de: 'Warum Solo-Gründer ausbrennen | Blog | en-boarding',
        ar: 'لماذا يحترق المؤسسون المنفردون | المدونة | en-boarding'
      },
      'monday-morning-test': {
        en: 'The Monday Morning Test | Blog | en-boarding',
        fr: 'Le test du lundi matin | Blog | en-boarding',
        de: 'Der Montagmorgen-Test | Blog | en-boarding',
        ar: 'اختبار صباح الاثنين | المدونة | en-boarding'
      },
      'idea-vs-business': {
        en: 'Idea vs. Business: The 5 Missing Links | Blog | en-boarding',
        fr: 'Idée vs. Business : les 5 chaînons manquants | Blog | en-boarding',
        de: 'Idee vs. Business: Die 5 fehlenden Glieder | Blog | en-boarding',
        ar: 'فكرة مقابل مشروع: الحلقات الخمس المفقودة | المدونة | en-boarding'
      },
      'archetype': {
        en: 'Entrepreneurial Archetypes | Free Tool | en-boarding',
        fr: 'Archétypes entrepreneuriaux | Outil gratuit | en-boarding',
        de: 'Unternehmerische Archetypen | Kostenloses Tool | en-boarding',
        ar: 'النماذج الريادية | أداة مجانية | en-boarding'
      },
      'structural-gap': {
        en: 'Structural Gap Assessment | Free Tool | en-boarding',
        fr: 'Évaluation des lacunes structurelles | Outil gratuit | en-boarding',
        de: 'Strukturlücken-Analyse | Kostenloses Tool | en-boarding',
        ar: 'تقييم الفجوات الهيكلية | أداة مجانية | en-boarding'
      }
    },
    metaDescriptions: {
      'index': {
        en: 'Have an idea, skills, or a business but no income? Gain clarity on how to turn it into revenue — starting with a free consultation.',
        fr: 'Vous avez une idée, des compétences ou une entreprise mais pas de revenus ? Clarifiez comment les transformer en revenus — commencez par une consultation gratuite.',
        de: 'Sie haben eine Idee, Fähigkeiten oder ein Geschäft, aber kein Einkommen? Erfahren Sie, wie Sie es in Einnahmen umwandeln — beginnen Sie mit einer kostenlosen Beratung.',
        ar: 'لديك فكرة أو مهارات أو مشروع ولكن بدون دخل؟ احصل على وضوح حول كيفية تحويلها إلى إيرادات — بدءًا باستشارة مجانية.'
      },
      'about': {
        en: 'en-boarding helps entrepreneurs turn ideas into revenue through structured clarity sessions. Learn about our mission and founder Bouchra Driouach.',
        fr: 'en-boarding aide les entrepreneurs à transformer leurs idées en revenus grâce à des séances de clarté structurées. Découvrez notre mission et la fondatrice Bouchra Driouach.',
        de: 'en-boarding hilft Gründern, Ideen durch strukturierte Klarheitssitzungen in Einnahmen zu verwandeln. Erfahren Sie mehr über unsere Mission und Gründerin Bouchra Driouach.',
        ar: 'تساعد en-boarding رواد الأعمال على تحويل الأفكار إلى إيرادات من خلال جلسات وضوح منظمة. تعرف على مهمتنا والمؤسسة بشرى دريوش.'
      },
      'blog': {
        en: 'Honest insights and frameworks for early-stage founders. Articles on analysis paralysis, burnout, and turning ideas into businesses.',
        fr: 'Analyses honnêtes et frameworks pour fondateurs en phase de démarrage. Articles sur la paralysie d\'analyse, l\'épuisement et la transformation d\'idées en entreprises.',
        de: 'Ehrliche Einblicke und Frameworks für Gründer in der Frühphase. Artikel über Analyse-Paralyse, Burnout und die Umwandlung von Ideen in Unternehmen.',
        ar: 'رؤى وأطر عمل صادقة للمؤسسين في المراحل المبكرة. مقالات عن شلل التحليل والاحتراق وتحويل الأفكار إلى مشاريع.'
      },
      'booking': {
        en: 'Book a free 30-minute clarity session. Get direction on turning your idea, skills, or business into revenue. No commitment.',
        fr: 'Réservez une séance de clarté gratuite de 30 minutes. Obtenez une direction pour transformer votre idée, vos compétences ou votre entreprise en revenus. Sans engagement.',
        de: 'Buchen Sie eine kostenlose 30-minütige Klarheitssitzung. Erhalten Sie eine Richtung, wie Sie Ihre Idee, Fähigkeiten oder Ihr Geschäft in Einkommen verwandeln. Keine Verpflichtung.',
        ar: 'احجز جلسة وضوح مجانية لمدة 30 دقيقة. احصل على توجيه لتحويل فكرتك أو مهاراتك أو مشروعك إلى دخل. بدون التزام.'
      },
      'services': {
        en: 'Free tools to diagnose your business: Structural Gap Assessment and Entrepreneurial Archetypes. Understand where you\'re stuck.',
        fr: 'Outils gratuits pour diagnostiquer votre entreprise : Évaluation des lacunes structurelles et Archétypes entrepreneuriaux. Comprenez où vous êtes bloqué.',
        de: 'Kostenlose Tools zur Diagnose Ihres Unternehmens: Strukturlücken-Analyse und Unternehmerische Archetypen. Verstehen Sie, wo Sie feststecken.',
        ar: 'أدوات مجانية لتشخيص مشروعك: تقييم الفجوات الهيكلية والنماذج الريادية. افهم أين أنت عالق.'
      },
      'privacy': {
        en: 'Privacy policy for en-boarding. Learn how we collect, use, and protect your personal information.',
        fr: 'Politique de confidentialité d\'en-boarding. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles.',
        de: 'Datenschutzerklärung von en-boarding. Erfahren Sie, wie wir Ihre personenbezogenen Daten erheben, verwenden und schützen.',
        ar: 'سياسة الخصوصية لـ en-boarding. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.'
      },
      'terms': {
        en: 'Terms of service for en-boarding. By using our website, you agree to these terms.',
        fr: 'Conditions d\'utilisation d\'en-boarding. En utilisant notre site web, vous acceptez ces conditions.',
        de: 'AGB von en-boarding. Durch die Nutzung unserer Website stimmen Sie diesen Bedingungen zu.',
        ar: 'شروط الخدمة لـ en-boarding. باستخدامك لموقعنا، فإنك توافق على هذه الشروط.'
      },
      'analysis-paralysis': {
        en: 'Thinking about your startup is not work. Learn how to break free from analysis paralysis and start taking action.',
        fr: 'Penser à votre startup n\'est pas du travail. Apprenez à vous libérer de la paralysie d\'analyse et à passer à l\'action.',
        de: 'Über Ihr Startup nachzudenken ist keine Arbeit. Erfahren Sie, wie Sie die Analyse-Paralyse überwinden und ins Handeln kommen.',
        ar: 'التفكير في شركتك الناشئة ليس عملاً. تعلم كيف تتحرر من شلل التحليل وتبدأ في اتخاذ الإجراءات.'
      },
      'solo-founder-burnout': {
        en: 'Burnout doesn\'t just come from working too much. It comes from not knowing if what you do matters. Learn to break the cycle.',
        fr: 'L\'épuisement ne vient pas seulement du travail excessif. Il vient de ne pas savoir si ce que vous faites compte. Apprenez à briser le cycle.',
        de: 'Burnout entsteht nicht nur durch zu viel Arbeit. Es entsteht, wenn man nicht weiß, ob das, was man tut, zählt. Durchbrechen Sie den Kreislauf.',
        ar: 'الاحتراق لا يأتي فقط من العمل الكثير. إنه يأتي من عدم معرفة ما إذا كان ما تفعله مهمًا. تعلم كيف تكسر الحلقة.'
      },
      'monday-morning-test': {
        en: 'If you have to decide what to work on when you sit down, you\'ve already lost part of the day. Learn the Sunday reset method.',
        fr: 'Si vous devez décider quoi faire en vous asseyant, vous avez déjà perdu une partie de la journée. Découvrez la méthode de réinitialisation du dimanche.',
        de: 'Wenn Sie beim Hinsetzen entscheiden müssen, woran Sie arbeiten, haben Sie bereits einen Teil des Tages verloren. Lernen Sie die Sonntag-Reset-Methode.',
        ar: 'إذا كان عليك أن تقرر ما ستعمل عليه عندما تجلس، فقد فقدت بالفعل جزءًا من اليوم. تعلم طريقة إعادة الضبط يوم الأحد.'
      },
      'idea-vs-business': {
        en: 'A good idea is not yet a business. Discover the 5 structural links that turn an idea into a revenue-generating business.',
        fr: 'Une bonne idée n\'est pas encore une entreprise. Découvrez les 5 chaînons structurels qui transforment une idée en entreprise génératrice de revenus.',
        de: 'Eine gute Idee ist noch kein Geschäft. Entdecken Sie die 5 strukturellen Glieder, die eine Idee in ein umsatzgenerierendes Geschäft verwandeln.',
        ar: 'الفكرة الجيدة ليست مشروعًا بعد. اكتشف الحلقات الهيكلية الخمس التي تحول الفكرة إلى مشروع يدر دخلاً.'
      },
      'archetype': {
        en: 'Understand your natural entrepreneurial tendencies. Are you an Overthinker, Starter, or Balanced Founder?',
        fr: 'Comprenez vos tendances entrepreneuriales naturelles. Êtes-vous un Réflexif excessif, un Démarreur ou un Fondateur Équilibré ?',
        de: 'Verstehen Sie Ihre natürlichen unternehmerischen Tendenzen. Sind Sie ein Überdenker, Starter oder Ausgeglichener Gründer?',
        ar: 'افهم ميولك الريادية الطبيعية. هل أنت مفرط في التفكير، منطلق، أم مؤسس متوازن؟'
      },
      'structural-gap': {
        en: '40 questions to reveal where your business is stuck: clarity, direction, leverage, or execution. Free personalized report.',
        fr: '40 questions pour révéler où votre entreprise est bloquée : clarté, direction, levier ou exécution. Rapport personnalisé gratuit.',
        de: '40 Fragen, die aufzeigen, wo Ihr Unternehmen feststeckt: Klarheit, Richtung, Hebelwirkung oder Umsetzung. Kostenloser persönlicher Bericht.',
        ar: '40 سؤالاً لتكشف أين يتعطل مشروعك: الوضوح، الاتجاه، التأثير، أو التنفيذ. تقرير شخصي مجاني.'
      }
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

  // ==================== INJECT GOOGLE TAG MANAGER ====================
  function injectGTM() {
    if (!CONFIG.gtmId) return;
    const gtmScript = document.createElement('script');
    gtmScript.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${CONFIG.gtmId}');`;
    document.head.insertBefore(gtmScript, document.head.firstChild);
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${CONFIG.gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscript, document.body.firstChild);
  }

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
                    baseFile.includes('terms') ? 'terms' :
                    baseFile.includes('analysis-paralysis') ? 'analysis-paralysis' :
                    baseFile.includes('solo-founder-burnout') ? 'solo-founder-burnout' :
                    baseFile.includes('monday-morning-test') ? 'monday-morning-test' :
                    baseFile.includes('idea-vs-business') ? 'idea-vs-business' :
                    baseFile.includes('archetype') ? 'archetype' :
                    baseFile.includes('structural-gap') ? 'structural-gap' : 'index';
    
    const pageTitle = translations.pageTitles[pageKey]?.[currentLang] || CONFIG.siteName;
    document.title = pageTitle;
    
    const metaDescText = translations.metaDescriptions[pageKey]?.[currentLang] || 
                         translations.metaDescriptions['index'][currentLang];
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescText);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${CONFIG.siteUrl}/${currentLang}_${baseFile}${fileExt}`);
  }

  // ==================== JSON-LD STRUCTURED DATA ====================
  function injectStructuredData() {
    const pageKey = baseFile === 'index' ? 'index' : 
                    baseFile.includes('about') ? 'about' :
                    baseFile.includes('blog') ? 'blog' :
                    baseFile.includes('booking') ? 'booking' :
                    baseFile.includes('services') || baseFile.includes('free-tools') ? 'services' : 'index';
    
    let schema = {};
    if (pageKey === 'index') {
      schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "en-boarding",
        "description": translations.metaDescriptions['index'][currentLang] || translations.metaDescriptions['index']['en'],
        "url": CONFIG.siteUrl,
        "founder": {
          "@type": "Person",
          "name": "Bouchra Driouach",
          "jobTitle": "Startup Consultant"
        },
        "serviceType": "Business Consultancy",
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        },
        "offers": {
          "@type": "Offer",
          "description": currentLang === 'en' ? "Free introductory consultation" :
                           currentLang === 'fr' ? "Consultation gratuite" :
                           currentLang === 'de' ? "Kostenlose Erstberatung" :
                           "استشارة مجانية",
          "price": "0",
          "priceCurrency": "USD"
        }
      };
    } else {
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "en-boarding",
        "url": CONFIG.siteUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${CONFIG.siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
    }
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // ==================== NAVIGATION (with in-page links on homepage) ====================
  function createNavigation() {
    const container = document.getElementById('global-header');
    if (!container) return;
    
    const t = translations.nav[currentLang] || translations.nav.en;
    const lang = currentLang;
    const isHomepage = (baseFile === 'index');
    
    let dropdownOptions = '';
    CONFIG.languages.forEach(l => {
      const href = l.code + '_' + baseFile + fileExt;
      const isActive = (l.code === currentLang);
      dropdownOptions += `<a href="${href}"${isActive ? ' class="active-lang"' : ''}>${l.label}</a>`;
    });
    
    const currentLangLabel = CONFIG.languages.find(l => l.code === currentLang)?.label || 'EN';
    
    let navItems = [
      { key: 'home', href: `${lang}_index${fileExt}`, text: t.home },
      { key: 'about', href: isHomepage ? '#about' : `${lang}_about${fileExt}`, text: t.about },
      { key: 'services', href: isHomepage ? '#services' : `${lang}_services${fileExt}`, text: t.services },
      { key: 'blog', href: `${lang}_blog${fileExt}`, text: t.blog }
    ];
    
    const orderedNavItems = (currentLang === 'ar') ? [...navItems].reverse() : navItems;
    
    const navLinksHtml = orderedNavItems.map(item => 
      `<a href="${item.href}">${item.text}</a>`
    ).join('');
    
    const navHtml = `
      <div class="logo-wrap">
        <a href="${lang}_index${fileExt}" class="logo">EN-<span>BOARDING</span></a>
      </div>
      <div class="nav-links">
        ${navLinksHtml}
      </div>
      <div class="header-cta">
        <div class="lang-dropdown">
          <button class="lang-dropdown-btn" id="langDropdownBtn">${currentLangLabel}</button>
          <div class="lang-dropdown-content" id="langDropdownContent">
            ${dropdownOptions}
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML = navHtml;
    
    const dropdownBtn = document.getElementById('langDropdownBtn');
    const dropdownContent = document.getElementById('langDropdownContent');
    if (dropdownBtn && dropdownContent) {
      dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
      });
      document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
          dropdownContent.classList.remove('show');
        }
      });
      dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
    
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
      if ((activeKey === 'home' && (href.includes('index') || href === '#' || href === '')) ||
          (activeKey === 'about' && (href.includes('about') || href === '#about')) ||
          (activeKey === 'services' && (href.includes('services') || href.includes('free-tools') || href === '#services')) ||
          (activeKey === 'blog' && (href.includes('blog') || href.includes('analysis') || href.includes('founder') || href.includes('morning') || href.includes('idea')))) {
        link.classList.add('active');
      }
    });
    
    if (isHomepage) {
      const anchorLinks = container.querySelectorAll('.nav-links a[href^="#"]');
      anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }
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
      <div style="font-weight:700;">EN-BOARDING — ${t.tagline}</div>
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

  // ==================== GA4 EVENT TRACKING ====================
  function trackBookingClicks() {
    const bookingButtons = document.querySelectorAll('a[href*="booking"]');
    bookingButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'book_free_session', {
            'event_category': 'engagement',
            'event_label': button.innerText.trim() || 'booking_cta',
            'page_location': window.location.href,
            'language': currentLang
          });
        }
      });
    });
  }

  // ==================== HEADER SCROLL EFFECT (HOMEPAGE) ====================
  function initHeaderScroll() {
    // Only run on homepage
    if (window.SITE.baseFile !== 'index') return;
    
    const header = document.querySelector('.header');
    const heroSection = document.querySelector('.hero-full');
    
    if (!header || !heroSection) return;
    
    // Add smooth transition to the header background
    header.style.transition = 'background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease';
    
    function checkScroll() {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const scrollPosition = window.scrollY;
      
      // Add a small offset so the header changes slightly before the hero ends
      if (scrollPosition > heroBottom - 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll); // Recalculate on resize
    checkScroll(); // Run on load
  }

  // ==================== INIT ====================
  function init() {
    injectGTM();
    setMetaTags();
    injectStructuredData();
    createNavigation();
    createFooter();
    createCookieConsent();
    trackBookingClicks();
    initHeaderScroll(); // <-- NEW: Activate scroll-aware header
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();