'use strict';
//select each modal button on the page
const btns = document.querySelectorAll('.show-modal');

//select modal from the document
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.close-modal');

//select overlay from the document
const overlay = document.querySelector('.overlay');

//add an event listener to each button
btns.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

//on a click of the close button, hide modal
modalCloseBtn.addEventListener('click', closeModal);

//on a click of the overlay, hide overlay
overlay.addEventListener('click', closeModal);

// on pressing esc key, hide overlay
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});

/*******************************functions**************************/
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function openModal() {
  //on a click, display the modal
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
