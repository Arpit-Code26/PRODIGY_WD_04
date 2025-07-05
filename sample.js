

// Smooth scroll behavior for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: Toggle menu for mobile navigation
// You can add a burger icon and toggle the nav class "active"
// Not implemented here but can be extended easily

// Highlight current section while scrolling (optional improvement)
// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('section');
//   const scrollPos = window.scrollY + 100;
//   sections.forEach(sec => {
//     if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
//       navLinks.forEach(link => link.classList.remove('active'));
//       document.querySelector(`nav a[href="#${sec.id}"]`).classList.add('active');
//     }
//   });
// });
