import menuList from './menu.json';
import menuTemplate from './templates/arr.hbs';

import './styles.css';

const root = document.querySelector('.js-menu');
const markup = menuTemplate(menuList);
root.insertAdjacentHTML('beforeend', markup);
// console.log(markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');
document.body.classList.add(Theme.LIGHT);

if (localStorage.getItem('theme_localStorage')) {
  document.body.classList.add(Theme.DARK);
  checkbox.checked = true;
}
checkbox.addEventListener('change', checkboxChange);
function checkboxChange() {
  if (checkbox.checked) {
    changeClass(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme_localStorage', JSON.stringify(Theme.DARK));
    return;
  }
  changeClass(Theme.LIGHT, Theme.DARK);
  localStorage.removeItem('theme_localStorage');
}
function changeClass(add, remove) {
  document.body.classList.add(add);
  document.body.classList.remove(remove);
}
