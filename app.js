// Reveal cards animation when scrolled
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0) {
      entry.target.classList.add('cards-show');
    }
  });
}, { 
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] 
});


document.querySelectorAll('.card, .TOC, .edp-heading, #EDP-timeline ol li, .deliverables-heading, #capstone-deliverables > ul > li, .gallery-heading, .slider, .gallery .btn, .faq-heading').forEach(el => {
  sectionObserver.observe(el);
});

// Reveal dividers animation when scrolled
const dividerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0) {
      entry.target.classList.add('divider-show');
    } 
    else {
      entry.target.classList.remove('divider-show');
    }
  });
});

document.querySelectorAll('.divider').forEach(el => {
  dividerObserver.observe(el);
});

