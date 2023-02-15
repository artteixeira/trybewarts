const buttonLogin = document.querySelector('#login-button');
const emailLogin = document.querySelector('#login-email');
const senhaLogin = document.querySelector('#login-password');

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitBtn.disabled = '';
  } else {
    submitBtn.disabled = 'disabled';
  }
});
