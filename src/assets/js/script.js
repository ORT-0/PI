// JavaScript central do prototipo EmbarqueAi.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.back').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (window.history.length <= 1) return;

      event.preventDefault();
      window.history.back();
    });
  });
});
