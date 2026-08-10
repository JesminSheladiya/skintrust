/* Before/after reveal */
document.querySelectorAll('.ba').forEach(function(box){
  var range  = box.querySelector('.ba-range');
  var before = box.querySelector('.ba-before');
  var line   = box.querySelector('.ba-line');
  var knob   = box.querySelector('.ba-knob');
  function paint(){
    var v = range.value;
    before.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
    line.style.left = v + '%';
    knob.style.left = v + '%';
  }
  range.addEventListener('input', paint);
  paint();
});

/* Dynamically load JSON-LD schemas */
function loadSchema(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    })
    .catch(error => console.error('Error loading schema from ' + url + ':', error));
}

// Load clinic schema and FAQ schema
loadSchema('assets/data/clinic-schema.json');
loadSchema('assets/data/faq-schema.json');

/* ---------- Video Gallery Logic ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const vgCarousel = document.querySelector('.vg-carousel');
  if (vgCarousel) {
    const prevBtn = document.querySelector('.vg-prev');
    const nextBtn = document.querySelector('.vg-next');
    const cards = document.querySelectorAll('.vg-card');
    const playBtns = document.querySelectorAll('.vg-play');
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        vgCarousel.scrollBy({ left: -320, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', () => {
        vgCarousel.scrollBy({ left: 320, behavior: 'smooth' });
      });
    }

    playBtns.forEach((btn) => {
      btn.addEventListener('click', function(e) {
        const card = e.currentTarget.closest('.vg-card');
        
        // Toggle play state
        if (card.classList.contains('playing')) {
          card.classList.remove('playing');
          vgCarousel.classList.remove('is-playing');
          btn.innerHTML = '▶';
        } else {
          // Stop others
          cards.forEach(c => {
            c.classList.remove('playing');
            c.querySelector('.vg-play').innerHTML = '▶';
          });
          
          card.classList.add('playing');
          vgCarousel.classList.add('is-playing');
          btn.innerHTML = '❚❚';
        }
      });
    });
  }
});
