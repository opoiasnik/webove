document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn-group .btn');
    const cards = document.querySelectorAll('.custom-card');
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const dataCategory = button.getAttribute('data-category');
  
  
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
  