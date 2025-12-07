// Small interactions: set year, smooth scroll, contact form handler
document.addEventListener('DOMContentLoaded',function(){
  // footer year
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // contact form: open mail client with mailto (no backend)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const email = data.get('email') || '';
      const message = data.get('message') || '';
      const subject = encodeURIComponent('網站聯絡：' + name);
      const body = encodeURIComponent(`來自: ${name} <${email}>\n\n${message}`);
      window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
    });
  }
});
