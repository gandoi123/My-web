document.addEventListener('DOMContentLoaded', function() {
  // Fade-in animasi section
  document.querySelectorAll('section').forEach(function(sec, i) {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
    setTimeout(function() {
      sec.style.transition = 'all 0.8s cubic-bezier(.4,2,.3,1)';
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }, 300 + i * 200);
  });

  // Efek hover pada projek
  document.querySelectorAll('.projects li').forEach(function(li) {
    li.style.transition = 'background 0.3s, color 0.3s, transform 0.3s';
    li.addEventListener('mouseenter', function() {
      li.style.background = '#ffd60033';
      li.style.color = '#3a7bd5';
      li.style.transform = 'scale(1.04)';
    });
    li.addEventListener('mouseleave', function() {
      li.style.background = '';
      li.style.color = '';
      li.style.transform = 'scale(1)';
    });
  });

  // Toggle dark mode
  const darkBtn = document.getElementById('darkToggle');
  darkBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    darkBtn.textContent = document.body.classList.contains('dark-mode') ? 'Tampilan Normal' : 'Tampilan Dark Mode';
  };

  // Modal login sebelum masuk web
  const loginModal = document.getElementById('loginModal');
  document.body.style.overflow = 'hidden';
  const formLogin = document.getElementById('formLogin');
  const loginError = document.getElementById('loginError');
  formLogin.onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if (!email.includes('@') || pass.length < 3) {
      loginError.textContent = 'Email harus valid dan password minimal 3 karakter!';
      loginError.style.display = 'block';
      return;
    }
    loginError.style.display = 'none';
    loginModal.style.display = 'none';
    document.body.style.overflow = '';
    // Notifikasi selamat datang
    const notif = document.createElement('div');
    notif.textContent = 'Selamat datang, ' + email + '!';
    notif.style.position = 'fixed';
    notif.style.bottom = '32px';
    notif.style.right = '32px';
    notif.style.background = '#ffd600';
    notif.style.color = '#222';
    notif.style.padding = '14px 28px';
    notif.style.borderRadius = '12px';
    notif.style.fontWeight = 'bold';
    notif.style.boxShadow = '0 2px 12px #0002';
    notif.style.zIndex = 9999;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3500);
  };

  // Login dengan Google (dummy)
  document.getElementById('btnGoogle').onclick = function() {
    loginModal.style.display = 'none';
    document.body.style.overflow = '';
    const notif = document.createElement('div');
    notif.textContent = 'Login Google berhasil!';
    notif.style.position = 'fixed';
    notif.style.bottom = '32px';
    notif.style.right = '32px';
    notif.style.background = '#3a7bd5';
    notif.style.color = '#fff';
    notif.style.padding = '14px 28px';
    notif.style.borderRadius = '12px';
    notif.style.fontWeight = 'bold';
    notif.style.boxShadow = '0 2px 12px #0002';
    notif.style.zIndex = 9999;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3500);
  };

  // Tampilkan waktu dibuat di deskripsi
  const createdTime = new Date('2025-07-12T09:00:00');
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const timeSpan = document.getElementById('createdTime');
  if (timeSpan) timeSpan.textContent = createdTime.toLocaleString('id-ID', options);

  // Tampilkan jam Waktu Indonesia Barat (WIB) yang selalu update
  function updateWIB() {
    const now = new Date();
    // WIB = UTC+7
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const wib = new Date(utc + (7 * 3600000));
    const jam = wib.getHours().toString().padStart(2, '0');
    const menit = wib.getMinutes().toString().padStart(2, '0');
    const detik = wib.getSeconds().toString().padStart(2, '0');
    const waktuStr = jam + ':' + menit + ':' + detik;
    const waktuWIB = document.getElementById('waktuWIB');
    if (waktuWIB) waktuWIB.textContent = waktuStr;
  }
  updateWIB();
  setInterval(updateWIB, 1000);
});