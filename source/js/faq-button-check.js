document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.faq__tabs-button');
  const tabPanels = document.querySelectorAll('.faq__panel-list');

  tabButtons.forEach((button, index) => {
    button.setAttribute('data-index', index); // Добавляем атрибут data-index

    button.addEventListener('click', function () {
      const selectedIndex = this.getAttribute('data-index');

      // Удаляем активные классы у всех кнопок и списков
      tabButtons.forEach((btn) => btn.classList.remove('faq__tabs-button--checked'));
      tabPanels.forEach((panel) => panel.classList.remove('faq__panel-list--checked'));

      // Добавляем активный класс только нужным элементам
      this.classList.add('faq__tabs-button--checked');
      document.querySelector(`.faq__panel-list[data-index="${selectedIndex}"]`).classList.add('faq__panel-list--checked');
    });
  });
});
