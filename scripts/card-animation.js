document.addEventListener('DOMContentLoaded', () => {
    let activeCard = null;
  
    const cards = document.querySelectorAll('.custom-card');
    const overlay = document.getElementById('overlay');
  
    cards.forEach((card) => {
      card.addEventListener('click', (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
  
        // Если эта карточка уже активна, ничего не делаем
        if (card === activeCard) {
          return;
        }
  
        // Если есть другая активная карточка, деактивируем ее
        if (activeCard) {
          deselectCard(activeCard);
        }
  
        // Активируем выбранную карточку
        selectCard(card);
      });
    });
  
    // Обработчик клика по оверлею для закрытия активной карточки
    overlay.addEventListener('click', () => {
      if (activeCard) {
        deselectCard(activeCard);
      }
    });
  
    function selectCard(card) {
      // Показываем оверлей
      overlay.style.display = 'block';
  
      // Получаем размеры и позицию карточки перед активацией
      const cardRect = card.getBoundingClientRect();
  
      // Устанавливаем начальные стили карточки
      card.style.position = 'fixed';
      card.style.left = `${cardRect.left}px`;
      card.style.top = `${cardRect.top}px`;
      card.style.width = `${cardRect.width}px`;
      card.style.height = `${cardRect.height}px`;
      card.style.margin = '0';
      card.style.transform = `translate(0, 0)`;
  
      // Задержка перед запуском анимации
      requestAnimationFrame(() => {
        card.classList.add('active');
  
        // После применения класса 'active' карточка изменит размер
        // Получаем новые размеры карточки
        const newCardRect = card.getBoundingClientRect();
  
        // Вычисляем смещение для центрирования
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
  
        const translateX = (windowWidth / 2) - (newCardRect.left + newCardRect.width / 2);
        const translateY = (windowHeight / 2) - (newCardRect.top + newCardRect.height / 2);
  
        // Применяем трансформацию с вращением
        card.style.transformOrigin = 'center center';
        card.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(360deg)`;
  
        // Добавляем обработчик события окончания анимации
        card.addEventListener('transitionend', function onTransitionEnd(event) {
          // Проверяем, что событие относится к свойству transform
          if (event.propertyName === 'transform') {
            // Показываем описание плавно
            const description = card.querySelector('.card-description');
            if (description) {
              description.classList.add('visible');
            }
            // Убираем обработчик
            card.removeEventListener('transitionend', onTransitionEnd);
          }
        });
      });
  
      activeCard = card;
    }
  
    function deselectCard(card) {
      // Скрываем описание плавно
      const description = card.querySelector('.card-description');
      if (description) {
        description.classList.remove('visible');
      }
  
      // Возвращаем карточку в исходное положение
      card.style.transform = `translate(0, 0) rotateY(0deg) scale(1)`;
  
      // После завершения перехода
      card.addEventListener('transitionend', function onTransitionEnd() {
        // Убираем обработчик события
        card.removeEventListener('transitionend', onTransitionEnd);
  
        // Сбрасываем инлайновые стили
        card.style.position = '';
        card.style.left = '';
        card.style.top = '';
        card.style.width = '';
        card.style.height = '';
        card.style.margin = '';
        card.style.transform = '';
        card.style.transformOrigin = '';
  
        // Убираем класс активной карточки
        card.classList.remove('active');
  
        // Скрываем оверлей
        overlay.style.display = 'none';
  
        // Сбрасываем переменную активной карточки
        activeCard = null;
      }, { once: true });
    }
  });
  