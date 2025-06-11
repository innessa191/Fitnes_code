document.addEventListener('DOMContentLoaded', () => {
  const priceData = {
    1: [5000, 1700, 2700],
    6: [30000, 10200, 16200],
    12: [60000, 20400, 32400]
  };

  const tabs = document.querySelectorAll('.subscriptions__tab');
  const priceElements = document.querySelectorAll('.subscriptions__item .subscriptions__price');

  // Функция обновления цен
  function updatePrices(duration) {
    priceElements.forEach((priceElement, index) => {
      const newPrice = priceData[duration][index];
      priceElement.textContent = newPrice;

      // Обновляем CSS-переменную для ::before (серый фон)
      const priceContainer = priceElement.closest('.subscriptions__price-container') || priceElement;
      priceContainer.style.setProperty('--price-text', `"${newPrice}"`);
    });
  }

  // Устанавливаем активный таб
  function setActiveTab(duration) {
    tabs.forEach((tab) => {
      const isActive = tab.getAttribute('data-duration') === String(duration);
      tab.classList.toggle('subscriptions__tab--active', isActive);
      tab.classList.toggle('subscriptions__tab--check', isActive); // Добавляем нужный класс
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    updatePrices(duration);
  }

  setActiveTab(1); // Устанавливаем активный таб "1 месяц" при загрузке

  // Обработчик кликов по табам
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      setActiveTab(this.getAttribute('data-duration'));
    });
  });
});
