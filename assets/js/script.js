const lastname = document.querySelector('input[type="text"]');
lastname.addEventListener('blur', (event) => {
  lastname.textContent = alert('Merci de votre participation');
});
