const categoriesRef = document.querySelector('#categories');

const arrayCategories = [...categoriesRef.children];

console.log(`В списке ${arrayCategories.length} категории.`)

arrayCategories.forEach((category, i) => {
    const categoryTitle = category.firstElementChild.textContent;
    const categoryItems = [...category.lastElementChild.children];
    
    console.group(i+1);
    console.log(`Категория: ${categoryTitle}`);
    console.log(`Количество элементов: ${categoryItems.length}`);
    console.groupEnd();
});