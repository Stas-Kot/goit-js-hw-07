const name = 'Генератор защитного поля';
let price = 1000;

console.log(`'Выбран «${name}», цена за штуку ${price} кредитов'`);
price = 2000;

console.log(`'Выбран «${name}», цена за штуку ${price} кредитов'`);

// =======================================или так========================================

const product = {
    name: 'Генератор защитного поля',
    price: 1000,
    updatePrice(newPrice) {
        this.price = newPrice;
        return
    }
};

console.log(`'Выбран «${product.name}», цена за штуку ${product.price} кредитов'`);

product.updatePrice(2000);
console.log(`'Выбран «${product.name}», цена за штуку ${product.price} кредитов'`);