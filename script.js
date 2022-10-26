let Arr1 = [1, 5, 4, 'hello'];
const Arr2  = [true, 2, {}, ['a'], 222];

console.log(Arr1[1] + Arr2[1]);

Arr1[4] = 22;

console.log(Arr1);

for (const elem of Arr2) {
    console.log(elem, typeof(elem));
}

const message = 'Welcome to Ukraine!';
let Arr3 = message.split('')

console.log(Arr3, Arr3.indexOf('l'));

const styles = ['Джаз', 'Блюз'];

styles[2] = 'Класика';

console.log(styles.shift());

styles.unshift('Реп', 'Реггі');
console.log(styles);



let country = prompt('Введіть країну');

switch (country) {
    case 'Китай':
        console.log('Доставка в Китай буде крштувати 100 кредитів');
        break;

    case 'Чилі':
        console.log('Доставка в Чилі буде крштувати 250 кредитів');
        break;

    case 'Австралія':
        console.log('Доставка в Австралію буде крштувати 170 кредитів');
        break;

    case 'Індія':
        console.log('Доставка в Індію буде крштувати 80 кредитів');
        break;

    case 'Ямайка':
        console.log('Доставка в Ямайка буде крштувати 120 кредитів');
        break;

    default:
        console.log('У вашій країні доставка недоступна');
        break;
}