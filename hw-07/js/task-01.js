const categoriesRef = document.querySelector('#categories');

const arrayCategories = [...categoriesRef.children];

console.log(`В списке ${arrayCategories.length} категории.`)

arrayCategories.forEach((category, i) => {
    console.group(i+1);
    console.log(`Категория: ${category.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${[...category.lastElementChild.children].length}`);
    console.groupEnd();
});