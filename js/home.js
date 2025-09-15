const toggleMenu = document.getElementById('toggle-menu');
const menu = document.querySelector('header nav');
const main = document.querySelector('main');

toggleMenu.onclick = () => {
  menu.classList.toggle('hidden');
  main.classList.toggle('hidden')
}
if (window.outerWidth >= 1024) {
  menu.classList.remove('hidden');
}

window.addEventListener('resize', (e) => {
  if (e.target.outerWidth >= 1024) {
    menu.classList.remove('hidden');
    return
  }
  menu.classList.add('hidden');
})

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

const sliderList = document.querySelector('.slider-list');

let isPressed = false;
let startX = 0;
let scrollLeft = 0;

sliderList.addEventListener('mousedown', (e) => {
  isPressed = true;
  startX = e.pageX - sliderList.offsetLeft
  scrollLeft = sliderList.scrollLeft;
})

sliderList.addEventListener('mouseup', () => isPressed = false)
sliderList.addEventListener('mouseleave', () => isPressed = false)

sliderList.addEventListener('mousemove', (e) => {
  if (!isPressed) {
    return;
  }

  const x = e.pageX - sliderList.offsetLeft;
  const move = (x - startX)
  sliderList.scrollLeft = scrollLeft - move;

})

sliderList.addEventListener('touchstart', (e) => {
  isPressed = true;
  startX = e.touches[0].pageX - sliderList.offsetLeft
  scrollLeft = sliderList.scrollLeft;
})

sliderList.addEventListener('touchend', () => isPressed = false)
sliderList.addEventListener('touchcancel', () => isPressed = false)

sliderList.addEventListener('touchmove', (e) => {
  if (!isPressed) {
    return;
  }

  const x = e.touches[0].pageX - sliderList.offsetLeft;
  const move = (x - startX)
  sliderList.scrollLeft = scrollLeft - move;

})