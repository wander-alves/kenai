const labelSearch = document.querySelector('label');
const inputSearch = document.querySelector('#search');

labelSearch.addEventListener("mousedown", () => {
  inputSearch.classList.remove('hidden');
})

inputSearch.addEventListener("focusout", () => {
  if (inputSearch.value == "") {
    inputSearch.classList.add('hidden');
  }
})
