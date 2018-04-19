// Задание 1
var pizza = {
    name: 'margaritta',
    ingredients: ['cheese', 'basil', 'tomato'],
    size: [
        { name: 'small', price: 15 }, 
        { name: 'medium', price: 20 },
        { name: 'large', price: 25}
    ],
    getPrice: function(name){
        switch (name) {
            case 'small':
                return this.size[0].price;
                break;
            case 'medium':
                return this.size[1].price;
                break;
            case 'large':
                return this.size[2].price;
                break;
            default:
                console.log('error')
                break;
        }
    } 
}
console.log(pizza.getPrice('medium'));


// Задание 2
function Pizza(name, ingredients, size){
    this.name = name;
    this.ingredients = ingredients;
    this.size = size;
    this.getPrice = function (name) {
        switch (name) {
            case 'small':
                return this.size[0].price;
                break;
            case 'medium':
                return this.size[1].price;
                break;
            case 'large':
                return this.size[2].price;
                break;
            default:
                console.log('error')
                break;
        }
    } 
}
var margaritta = new Pizza('margaritta', ['cheese', 'basil', 'tomato'], [
    { name: 'small', price: 15 },
    { name: 'medium', price: 20 },
    { name: 'large', price: 25 }
])

console.log(margaritta);



// задание 3
var object = {
    name: 'Petya',
    method: function () {
        return this.name;
    }
}
// console.log(object.method());

function myFunc(text) {
    return this.name + text;
}
var qwe = myFunc.bind(object);
// console.log(qwe());

function myBind(oldFunc, obj, arg) {
    return function () {
        return oldFunc.call(obj, arg);
    }
}
// console.log(myBind(myFunc, object));
var ewq = myBind(myFunc, object, 'Dima');
console.log(ewq());