document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  hamburger.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar links
    navbarLinks.classList.toggle('active');
  });
});