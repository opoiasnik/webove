document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.btn-group .btn');
  const cards = document.querySelectorAll('.custom-card');
  const cardsPerRowControl = document.querySelector('.cards-per-row-control'); // Контейнер для контроля количества карточек в ряду

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const dataCategory = button.getAttribute('data-category');

      // Показать или скрыть элемент "Cards per Row" в зависимости от выбранного фильтра
      if (dataCategory === 'All') {
        cardsPerRowControl.style.display = 'block';
      } else {
        cardsPerRowControl.style.display = 'none';
      }

      cards.forEach((card) => {
        const cardCategory = card.getAttribute('data-group');
        const article = card.closest('article');

        if (dataCategory === 'All' || dataCategory === cardCategory) {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
});
