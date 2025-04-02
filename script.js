const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const rememberforgotLink = document.querySelector('.rememberforgot-link');
const redefinirLink = document.querySelector('.redefinir-link');

const loginLinks = document.querySelectorAll('.login-link');

loginLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active', 'active-remember', 'active-redefinir');
  });
});

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.remove('active-remember');
});

rememberforgotLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.classList.add('active-remember');
});

redefinirLink.addEventListener('click', () => {
    wrapper.classList.remove('active', 'active-remember', 'active-redefinir');
    wrapper.classList.add('active-redefinir');
});


loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active', 'active-remember', 'active-redefinir');
   
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

