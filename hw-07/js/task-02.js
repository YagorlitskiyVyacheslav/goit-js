const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ItemArray = () => {
    const ItemAray = [];
    ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ItemAray.push(listItem);
    })
    return ItemAray
};

ingredientsList.append(...ItemArray());