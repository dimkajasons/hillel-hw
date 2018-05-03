var pizzaPrototype = {
    rating: 0,
    getName: function() {
        return this.name;
    },
    getPrice: function() {
        return this.price;
    },
    changePrice: function(newPrice) {
        this.price = newPrice;
        return this.price;
    },
    getRating: function() {
        return this.rating;
    },
    ratingUp: function(n) {
        this.rating += n;
        return this.rating
    },
    ratingDown: function (n) {
        this.rating -= n;
        return this.rating
    }
}
function makePizza(name, price, ingredients, proto) {
    var newPizza = Object.create(proto)
    
    newPizza.name = name;
    newPizza.price = price;
    newPizza.ingredients = ingredients;
    return newPizza;
}
var becon = makePizza('becon', 15, ['tomato', 'becon', 'cheddar', 'pepper'], pizzaPrototype);
console.log(becon);
becon.form = 'quoter';
console.log(becon)
console.log(becon.getName());
console.log(becon.getRating());
console.log(becon.ratingUp(2));
var vegetarian = makePizza('vegetarian', 10, ['asparagus', 'celery', 'corn', 'cheese'], pizzaPrototype);
console.log(vegetarian.ratingDown(1))