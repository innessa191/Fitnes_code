document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback__inputs-container');
  const inputs = form.querySelectorAll('.feedback__input');

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      const errorSpan = input.nextElementSibling;

      if (!input.checkValidity()) {
        input.classList.add('input--error');
        errorSpan.classList.remove('visually-hidden');
      } else {
        input.classList.remove('input--error');
        errorSpan.classList.add('visually-hidden');
      }
    });
  });

  form.addEventListener('submit', (event) => {
    let isValid = true;

    inputs.forEach((input) => {
      const errorSpan = input.nextElementSibling;

      if (!input.checkValidity()) {
        input.classList.add('input--error');
        errorSpan.classList.remove('visually-hidden');
        isValid = false;
      } else {
        input.classList.remove('input--error');
        errorSpan.classList.add('visually-hidden');
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });
});
