const modal = document.querySelector('.modalClass');
const modalContainer = document.querySelector('.modalContainer');
const Container = document.querySelector('.Container');
const closeButton = document.querySelector('.closeButton');
const modalButton = document.querySelector('.modalButton');

modalButton.onclick = function() {
  modal.style.display = "block";
  modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)";
  modalContainer.style.opacity = 0.3;
  
}
closeButton.onclick = function() {
    modal.style.display = "none";
    modalContainer.style.backgroundColor = "white";
    modalContainer.style.opacity = 1;
}
modal.onclick = function() {
  modal.style.display = "none";
  modalContainer.style.backgroundColor = "white";
  modalContainer.style.opacity = 1;
}
window.onclick = function(event) {
  if (event.target == Container) {
    modal.style.display = "none";
    modalContainer.style.backgroundColor = "white";
    modalContainer.style.opacity = 1;
  }
}