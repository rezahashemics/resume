// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// PDF Download functionality with loading state
document.getElementById('downloadBtn').addEventListener('click', () => {
  showLoading();
  setTimeout(() => {
    window.print();
    hideLoading();
  }, 800); // Matches enhanced animations
});

// Smooth scrolling for navigation links with offset for sticky navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const navbarHeight = navbar.offsetHeight;
    if (window.scrollY >= sectionTop - navbarHeight - 50) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Loading state functions
function showLoading() {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('downloadBtn').style.display = 'none';
}

function hideLoading() {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('downloadBtn').style.display = 'block';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('Resume with enhanced navbar and dynamic hover effects loaded successfully!');
});
