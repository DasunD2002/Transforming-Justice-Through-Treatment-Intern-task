
//alert for subscription section
const form = document.querySelector('.newsletter-form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const email = form.querySelector('input[type="email"]').value;
  if(email) alert('Thanks for subscribing: ' + email);
  form.reset(); 
});

// hover effect for event cards
document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('mouseenter', () => card.style.background = '#f0f0f0');
  card.addEventListener('mouseleave', () => card.style.background = '#fff');
});
