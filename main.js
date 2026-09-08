/* ==========================================================================
   KamiDigitalin - Master JavaScript Logic
   Includes: i18n Translation Engine, Theme Toggle, Live Search/Filter,
   FAQ Accordions, WhatsApp Order Link Builder, Dynamic Counters, Modals.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initNavbar();
  initFAQ();
  initProductSearchAndFilter();
  initStatsCounter();
  initWhatsAppButtons();
  initTestimonialFilter();
});

/* --- 1. Theme Switcher (Dark / Light) --- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('kamidigitalin_theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('kamidigitalin_theme', newTheme);
      
      themeToggleBtn.innerHTML = newTheme === 'light' 
        ? '<i class="fas fa-moon"></i>' 
        : '<i class="fas fa-sun"></i>';
    });
  }
}

/* --- 2. Multi-Language i18n Translation Engine --- */
const translations = {
  id: {
    nav_home: "Beranda",
    nav_products: "Produk",
    nav_web: "Website",
    nav_academic: "Akademik",
    nav_testimonials: "Testimoni",
    nav_faq: "FAQ",
    nav_contact: "Kontak",
    btn_consult: "Konsultasi",
    announcement_msg: "Platform Digital Terpadu & Terpercaya Indonesia",
    hero_title: "Solusi Digital Terpadu untuk Kebutuhan Produktivitas & Akademik Anda",
    hero_subtitle: "Dapatkan akses resmi aplikasi premium, bimbingan riset & olah data statistik ilmiah, serta pembuatan website bisnis profesional dalam satu platform.",
    btn_catalog: "Jelajahi Katalog",
    stat_clients: "Pengguna Puas",
    stat_guarantee: "Garansi Respon",
    stat_speed: "Aktivasi Kilat",
    search_placeholder: "Cari aplikasi (ChatGPT, Google Drive, Canva, Netflix...)",
    cat_all: "Semua",
    cat_ai: "AI & Analisis",
    cat_design: "Desain & Media",
    cat_productivity: "Produktivitas & Cloud",
    cat_entertainment: "Hiburan & Streaming",
    order_wa: "Pesan via WA",
    footer_rights: "Hak Cipta Dilindungi Undang-Undang."
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_web: "Web Services",
    nav_academic: "Academic",
    nav_testimonials: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    btn_consult: "Consultation",
    announcement_msg: "Indonesia's Premier Integrated Digital Platform",
    hero_title: "Integrated Digital Solutions for Your Productivity & Academic Success",
    hero_subtitle: "Access official premium digital tools, academic research guidance, statistical analysis, and professional website creation all in one place.",
    btn_catalog: "Browse Catalog",
    stat_clients: "Happy Users",
    stat_guarantee: "Success Guarantee",
    stat_speed: "Instant Activation",
    search_placeholder: "Search tools (ChatGPT, Google Drive, Canva, Netflix...)",
    cat_all: "All",
    cat_ai: "AI & Analytics",
    cat_design: "Design & Media",
    cat_productivity: "Productivity & Cloud",
    cat_entertainment: "Entertainment & Streaming",
    order_wa: "Order via WA",
    footer_rights: "All Rights Reserved."
  },
  zh: {
    nav_home: "首页",
    nav_products: "数字产品",
    nav_web: "网站建设",
    nav_academic: "学术指导",
    nav_testimonials: "客户评价",
    nav_faq: "常见问题",
    nav_contact: "联系我们",
    btn_consult: "立即咨询",
    announcement_msg: "印度尼西亚领先的综合数字服务平台",
    hero_title: "为您的一站式高级数字工具与学术科研解决方案",
    hero_subtitle: "获取正版高级应用程序、学术论文辅导、统计数据分析以及专业企业网站定制开发。",
    btn_catalog: "浏览产品目录",
    stat_clients: "满意客户",
    stat_guarantee: "品质保证",
    stat_speed: "快速激活",
    search_placeholder: "搜索应用程序 (ChatGPT, Google Drive, Canva, Netflix...)",
    cat_all: "全部",
    cat_ai: "人工智能",
    cat_design: "设计与媒体",
    cat_productivity: "生产力与云端",
    cat_entertainment: "娱乐与流媒体",
    order_wa: "通过 WhatsApp 订购",
    footer_rights: "版权所有。"
  }
};

function initLanguage() {
  const langSwitcherBtn = document.querySelector('.lang-switcher-btn');
  const langDropdownMenu = document.querySelector('.lang-dropdown-menu');
  const langOptBtns = document.querySelectorAll('.lang-opt-btn');
  const langCurrentLabel = document.querySelector('.lang-current-label');

  let currentLang = localStorage.getItem('kamidigitalin_lang') || 'id';
  applyLanguage(currentLang);

  if (langSwitcherBtn && langDropdownMenu) {
    langSwitcherBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdownMenu.classList.remove('show');
    });
  }

  langOptBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      currentLang = selectedLang;
      localStorage.setItem('kamidigitalin_lang', selectedLang);

      langOptBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      applyLanguage(selectedLang);
      if (langDropdownMenu) langDropdownMenu.classList.remove('show');
    });
  });
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations['id'];

  const langLabelMap = { id: 'ID', en: 'EN', zh: 'ZH' };
  const currentLabelEl = document.querySelector('.lang-current-label');
  if (currentLabelEl) currentLabelEl.textContent = langLabelMap[lang] || 'ID';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput && dict.search_placeholder) {
    searchInput.placeholder = dict.search_placeholder;
  }
}

/* --- 3. Header Scroll Effect & Mobile Nav --- */
function initNavbar() {
  const header = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('show') 
          ? 'fas fa-times' 
          : 'fas fa-bars';
      }
    });
  }
}

/* --- 4. FAQ Accordion Logic --- */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('is-open');
          }
        });

        // Toggle current item
        if (!isOpen) {
          item.classList.add('is-open');
        } else {
          item.classList.remove('is-open');
        }
      });
    }
  });
}

/* --- 5. Live Product Search & Category Filter --- */
function initProductSearchAndFilter() {
  const searchInput = document.getElementById('searchInput');
  const tabBtns = document.querySelectorAll('.cat-tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (!productCards.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterProducts() {
    productCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.product-desc')?.textContent.toLowerCase() || '';
      const brand = card.querySelector('.product-brand')?.textContent.toLowerCase() || '';

      const matchesCat = currentCategory === 'all' || category === currentCategory;
      const matchesSearch = !searchQuery || name.includes(searchQuery) || desc.includes(searchQuery) || brand.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterProducts();
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      currentCategory = btn.getAttribute('data-category') || 'all';
      filterProducts();
    });
  });
}

/* --- 6. Dynamic Animated Numbers Counter --- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (!statNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const speed = target / 50;

          const updateCount = () => {
            count += speed;
            if (count < target) {
              counter.innerText = Math.ceil(count).toLocaleString() + suffix;
              setTimeout(updateCount, 25);
            } else {
              counter.innerText = target.toLocaleString() + suffix;
            }
          };

          updateCount();
        });
      }
    });
  }, { threshold: 0.5 });

  const statsRow = document.querySelector('.hero-stats-row');
  if (statsRow) observer.observe(statsRow);
}

/* --- 7. WhatsApp Instant Message Builder --- */
function initWhatsAppButtons() {
  const waNumber = "62887435645772";

  document.querySelectorAll('[data-wa-item]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemName = btn.getAttribute('data-wa-item');
      const itemPrice = btn.getAttribute('data-wa-price') || '';
      
      let msg = `Halo KamiDigitalin, saya ingin memesan layanan *${itemName}*`;
      if (itemPrice) {
        msg += ` dengan harga *${itemPrice}*`;
      }
      msg += `. Mohon info prosedur aktivasi & pembayarannya. Terima kasih!`;

      const encodedMsg = encodeURIComponent(msg);
      window.open(`https://wa.me/${waNumber}?text=${encodedMsg}`, '_blank');
    });
  });
}

/* --- 8. Testimonial Filter --- */
function initTestimonialFilter() {
  const filterBtns = document.querySelectorAll('.testi-filter-btn');
  const testiCards = document.querySelectorAll('.testimonial-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.getAttribute('data-filter');
      testiCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
