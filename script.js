let accordionButton = document.querySelectorAll('.q-title');
let accordionContainer = document.querySelectorAll('.q-content');

accordionButton.forEach(item => {
    item.addEventListener('click', () => {

        item.classList.toggle('show');
        item.nextElementSibling.classList.toggle('open');
  });
});