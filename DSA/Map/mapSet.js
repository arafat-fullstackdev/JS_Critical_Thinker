//? Map set
const fruits = new Map();

//Set map value
fruits.set('Apple', 100);
fruits.set('Banana', 140);
fruits.set('Cucumber', 108);

// console.log(fruits)

//Pass an Array to the new Map() constructor
const cars = new Map([
    ['Dunlope', 20],
    ['Toyata', 50],
    ['Sujiki', 40],
    ['Nician', 87],
])

cars.set('Dunlope', 67);
cars.get('Toyata');
console.log(cars)