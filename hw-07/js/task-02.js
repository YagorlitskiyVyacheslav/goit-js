const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ItemArray = () => ingredients.map(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        return listItem;
    });

ingredientsList.append(...ItemArray());