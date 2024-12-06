document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const showPopupButton = document.getElementById('show-popup');
    const closeButton = document.querySelector('.close-button');
  
    showPopupButton.addEventListener('click', () => {
      popup.classList.remove('hidden');
    });
  
    closeButton.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  
    popup.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.classList.add('hidden');
      }
    });
  });