// JavaScript for Navbar
const checkbox = document.getElementById('click');
const navUl = document.querySelector('nav ul');

checkbox.addEventListener('click', function () {
  navUl.classList.toggle('show');
});
