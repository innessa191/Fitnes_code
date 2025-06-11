import './faq-button-check';

document.querySelectorAll('details').forEach((detail) => {
  const summary = detail.querySelector('summary');
  const content = detail.querySelector('.faq__content');

  // Устанавливаем height: 0 для скрытых блоков
  if (!detail.hasAttribute('open')) {
    content.style.height = '0';
    content.style.overflow = 'hidden';
    content.style.opacity = '0';
  }

  summary.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (detail.open) {
      // Закрываем блок с анимацией
      content.style.height = `${content.scrollHeight}px`; // Фиксируем текущую высоту
      requestAnimationFrame(() => {
        content.style.transition = 'height 0.3s ease, opacity 0.3s ease';
        content.style.height = '0';
        content.style.opacity = '0';
      });

      setTimeout(() => {
        detail.removeAttribute('open');
      }, 300);
    } else {
      detail.setAttribute('open', 'true');

      // Даём браузеру время для обработки открытия
      requestAnimationFrame(() => {
        content.style.transition = 'none';
        content.style.height = 'auto';
        const fullHeight = `${content.scrollHeight}px`;
        content.style.height = '0';

        requestAnimationFrame(() => {
          content.style.transition = 'height 0.3s ease, opacity 0.3s ease';
          content.style.height = fullHeight;
          content.style.opacity = '1';
        });
      });
    }
  });
});
