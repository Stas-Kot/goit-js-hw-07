const allCategoriesEl = document.querySelectorAll('.item');
console.log(`'В списке ${allCategoriesEl.length} категории.'`);

const textOfItemTitle = document.querySelector('h2');
const allElementsOfCategoryEl = 


allCategoriesEl.forEach((category) => console.log(
    `'- Категория: ${category.querySelector('h2').textContent}
- Количество элементов: ${category.querySelectorAll('li').length}'`));