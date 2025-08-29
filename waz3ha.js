// waz3ha.js
// تفضيل اللغة فقط
let currentLang = sessionStorage.getItem('lang') || 'en';

// تطبيق اللغة
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langText').textContent = currentLang === 'ar' ? 'English' : 'العربية';
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = currentLang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
  });
}

// التهيئة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage();
  document.getElementById('year').textContent = new Date().getFullYear();
});

// زر الترجمة
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  sessionStorage.setItem('lang', currentLang);
  applyLanguage();
});

// نجاح الإرسال
document.querySelector('form')?.addEventListener('submit', () => {
  setTimeout(() => {
    alert(currentLang === 'ar'
      ? 'تم اشتراكك بنجاح! سنتواصل معك عند الإطلاق.'
      : 'You’ve been subscribed! We’ll contact you at launch.');
  }, 500);
});

// زر البدء
document.getElementById('getStarted')?.addEventListener('click', () => {
  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
});
