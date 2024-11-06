
const textSizeSlider = document.getElementById('textSizeSlider');
textSizeSlider.addEventListener('input', () => {
  const scale = textSizeSlider.value;
  document.querySelectorAll('.card-body h2').forEach(cardBody => {
    cardBody.style.fontSize = `${16 * scale}px`;
  });
  document.querySelectorAll('.card-body p').forEach(cardBody => {
    cardBody.style.fontSize = `${16 * scale}px`;
  });
});


const imageSizeSlider = document.getElementById('imageSizeSlider');
imageSizeSlider.addEventListener('input', () => {
  const scale = imageSizeSlider.value;
  document.querySelectorAll('.custom-card').forEach(card => {
    card.style.width = `${100 * scale}%`; 
    card.style.height = 'auto'; 
  });
});






const cardsPerRowDisplay = document.getElementById('cardsPerRowDisplay');
const rowContainer = document.querySelector('.row.g-4');
let cardsPerRow = 3;


function updateCardsPerRow() {
  rowContainer.className = `row g-4 row-${cardsPerRow}`;
  cardsPerRowDisplay.textContent = cardsPerRow;
}


document.getElementById('increaseCards').addEventListener('click', () => {
  if (cardsPerRow < 4) {
    cardsPerRow++;
    updateCardsPerRow();
  }
});


document.getElementById('decreaseCards').addEventListener('click', () => {
  if (cardsPerRow > 2) {
    cardsPerRow--;
    updateCardsPerRow();
  }
});


updateCardsPerRow();

