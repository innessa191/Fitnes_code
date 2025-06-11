document.addEventListener('DOMContentLoaded', () => {
  const priceElement = document.querySelector('.subscriptions__price');
  const container = document.querySelector('.subscriptions__price-container');

  function updateBackgroundText() {
    const newText = `"${priceElement.textContent}"`;
    container.style.setProperty('--price-text', newText);
  }

  updateBackgroundText();

  const observer = new MutationObserver(updateBackgroundText);
  observer.observe(priceElement, { childList: true, characterData: true });
});
