/* ============================================================
   SKIN TRUST HOSPITAL — Hair Restoration page
   Behaviour: before/after sliders + BA tab switcher + FAQ accordion
   Relies on the shared classes from ../css/style.css
   ============================================================ */

/* ---------- Before/after reveal (drag the overlay) ---------- */
function initHairSliders() {
  document.querySelectorAll('.ba').forEach(function (box) {
    var range = box.querySelector('.ba-range');
    var before = box.querySelector('.ba-before');
    var line = box.querySelector('.ba-line');
    var knob = box.querySelector('.ba-knob');
    if (!range) return;
    function paint() {
      var v = range.value;
      before.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
      line.style.left = v + '%';
      knob.style.left = v + '%';
    }
    range.addEventListener('input', paint);
    paint();
  });
}

/* ---------- Before/after tab switcher ---------- */
function switchBA(btn, panelId) {
  document.querySelectorAll('.ba-tab').forEach(function (t) {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.ba-panel').forEach(function (p) {
    p.classList.remove('active');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  var panel = document.getElementById(panelId);
  if (panel) {
    panel.classList.add('active');
  }
}

/* ---------- Smooth FAQ accordion ----------
   Each .faq-item holds a question button (.faq-question) and an
   answer (.faq-answer). The answer's natural height is measured
   ONCE at init and stored in the --answer-h custom property on the
   item. Toggling the .open class switches the answer height between
   0 and var(--answer-h); animating an explicit height is smooth in
   BOTH directions (no max-height 0 -> none snap).      */
function initFaqAccordion() {
  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    var q = item.querySelector('.faq-question');
    var a = item.querySelector('.faq-answer');
    if (!q || !a) return;

    // Temporarily reveal the answer so scrollHeight is the real height.
    a.style.height = 'auto';
    var h = a.scrollHeight;
    a.style.height = ''; // back to CSS control (0 or var(--answer-h))
    item.style.setProperty('--answer-h', h + 'px');

    q.addEventListener('click', function () {
      var isOpen = item.classList.toggle('open');
      q.setAttribute('aria-expanded', isOpen);
    });
  });
}

/* ---------- Run after the DOM is parsed (script loaded with defer) ---------- */
document.addEventListener('DOMContentLoaded', function () {
  initHairSliders();
  initFaqAccordion();
});
