const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');

    answer.classList.toggle('show');

    if (answer.classList.contains('show')) {
      icon.textContent = '-';
    } else {
      icon.textContent = '+';
    }
  });
});

const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameValue = document.querySelector('#name').value.trim();
  const emailValue = document.querySelector('#email').value.trim();
  const messageValue = document.querySelector('#message').value.trim();

  if (nameValue === '' || emailValue === '' || messageValue === '') {
    formFeedback.style.color = '#e74c3c';
    formFeedback.textContent = 'Please fill out all fields.';
    return;
  }

  if (emailValue.includes('@') === false) {
    formFeedback.style.color = '#e74c3c';
    formFeedback.textContent = 'Please enter a valid email.';
    return;
  }

  formFeedback.style.color = '#2ecc71';
  formFeedback.textContent = 'Message sent successfully!';

  contactForm.reset();
});
