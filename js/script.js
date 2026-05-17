// JavaScript bàsic per obrir i tancar el menú en pantalles petites.
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.site-nav ul');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let msg = form.querySelector('.form-success');
      if (!msg) {
        msg = document.createElement('p');
        msg.className = 'form-success';
        form.appendChild(msg);
      }
      msg.textContent = 'Missatge enviat! Gràcies pel teu contacte.';
    });
  }
});
