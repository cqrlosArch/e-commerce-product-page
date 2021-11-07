export default function select() {
  const select = document.getElementById('select');
  const selectAmount = document.getElementById('select-amount');
  let value = 1;
  select.addEventListener('click', (e) => {
    if (
      (e.target.parentElement.classList.contains('select__button--less') ||
        e.target.id === 'select-less') &&
      value > 1
    ) {
      selectAmount.textContent = --value;
    }
    if (
      (e.target.parentElement.classList.contains('select__button--plus') ||
        e.target.id === 'select-plus') &&
      value < 10
    ) {
      selectAmount.textContent = ++value;
    }
  });
}
