
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});


document.querySelectorAll('.card, .TOC, .divider.b').forEach((el) => observer.observe(el));
