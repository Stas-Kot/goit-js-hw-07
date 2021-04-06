// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.



const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const allLi = ingredients.map((ingredient) => {
    const i = ingredients.indexOf(ingredient);
    let name = `li${i + 1}`;
     name = document.createElement('li')
    name.textContent = ingredient;
    
    return name
});

const ingredientsEl = document.querySelector('#ingredients')
ingredientsEl.append(...allLi);



