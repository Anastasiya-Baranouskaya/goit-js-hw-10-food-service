import menuItems from './menu.json';
// console.log(menuItems);

const refs = {
  menu: document.querySelector('.js-menu'),
};
// функция добавления меню

function createMenu(items) {
  return items
    .map(({ name, description, image, price, ingredients }) => {
      return `
        <li class="menu__item">
            <article class="card">
                <img
                src="${image}"
                alt="${name}"
                class="card__image"
                />
                <div class="card__content">
                <h2 class="card__name">${image}</h2>
                <p class="card__price">
                    <i class="material-icons"> monetization_on </i>
                    ${price} кредитов
                </p>

                <p class="card__descr">${description}</p>

                <ul class="tag-list">
                    <li class="tag-list__item">${ingredients[0]}</li>
                    <li class="tag-list__item">${ingredients[1]}</li>
                    <li class="tag-list__item">${ingredients[2]}</li>
                    <li class="tag-list__item">${ingredients[3]}</li>
                    <li class="tag-list__item">${ingredients[4]}</li>
                    <li class="tag-list__item">${ingredients[5]}</li>
                </ul>
                </div>

                <button class="card__button button">
                <i class="material-icons button__icon"> shopping_cart </i>
                В корзину
                </button>
            </article>
        </li>
        `;
    })
    .join('');
}
console.log(createMenu(menuItems));

const menuMarkup = createMenu(menuItems);
refs.menu.insertAdjacentHTML('beforeend', menuMarkup);
