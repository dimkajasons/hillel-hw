// задание 2 без New, но я опять не уверен, что я правильно сделал...

function newObj(name, ingredientsArr, sizeArr, getPriceFunc){
    var foo = {};
    foo.name = name;
    foo.ingredientsArr = ingredientsArr;
    foo.size = sizeArr;
    foo.getPrice = function getPriceForFunction(name) {
        switch (name) {
            case 'small':
                return foo.size[0].price;
                break;
            case 'medium':
                return foo.size[1].price;
                break;
            case 'large':
                return foo.size[2].price;
                break;
            default:
                console.log('error')
                break;
        }
    };
    return foo;
}
var object1 = newObj('margaritta', ['cheese', 'basil', 'tomato'], [
    { name: 'small', price: 15 },
    { name: 'medium', price: 20 },
    { name: 'large', price: 25 }
]);

console.log(object1.getPrice('small'));