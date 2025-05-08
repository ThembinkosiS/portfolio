AOS.init();

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function submitForm(event) {
  event.preventDefault();
  alert("Thanks for your message! I'll get back to you soon.");
}
