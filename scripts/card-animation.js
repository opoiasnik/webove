document.addEventListener('DOMContentLoaded', () => {
    let activeCard = null;
  
    const cards = document.querySelectorAll('.custom-card');
    const overlay = document.getElementById('overlay');
  
    cards.forEach((card) => {
      card.addEventListener('click', (event) => {
        event.stopPropagation();
  
        if (card === activeCard) {
          return;
        }
  
        if (activeCard) {
          deselectCard(activeCard);
        }
  
        selectCard(card);
      });
    });
  
    overlay.addEventListener('click', () => {
      if (activeCard) {
        deselectCard(activeCard);
      }
    });
  
    function selectCard(card) {
      overlay.style.display = 'block';
  
      const cardRect = card.getBoundingClientRect();
  
      card.style.position = 'fixed';
      card.style.left = `${cardRect.left}px`;
      card.style.top = `${cardRect.top}px`;
      card.style.width = `${cardRect.width}px`;
      card.style.height = `${cardRect.height}px`;
      card.style.margin = '0';
      card.style.transform = `translate(0, 0)`;
  
      requestAnimationFrame(() => {
        card.classList.add('active');
  
        const newCardRect = card.getBoundingClientRect();
  

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
  
        const translateX = (windowWidth / 2) - (newCardRect.left + newCardRect.width / 2);
        const translateY = (windowHeight / 2) - (newCardRect.top + newCardRect.height / 2);
  
        card.style.transformOrigin = 'center center';
        card.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(360deg)`;
  
        card.addEventListener('transitionend', function onTransitionEnd(event) {
          if (event.propertyName === 'transform') {
            const description = card.querySelector('.card-description');
            if (description) {
              description.classList.add('visible');
            }
            card.removeEventListener('transitionend', onTransitionEnd);
          }
        });
      });
  
      activeCard = card;
    }
  
    function deselectCard(card) {
      const description = card.querySelector('.card-description');
      if (description) {
        description.classList.remove('visible');
      }
  
      card.style.transform = `translate(0, 0) rotateY(0deg) scale(1)`;
  
      card.addEventListener('transitionend', function onTransitionEnd() {
        card.removeEventListener('transitionend', onTransitionEnd);
  
        card.style.position = '';
        card.style.left = '';
        card.style.top = '';
        card.style.width = '';
        card.style.height = '';
        card.style.margin = '';
        card.style.transform = '';
        card.style.transformOrigin = '';
  

        card.classList.remove('active');
  

        overlay.style.display = 'none';
  

        activeCard = null;
      }, { once: true });
    }
  });
  