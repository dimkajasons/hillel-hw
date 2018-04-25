function makePizza(name, ingredients, size) {
	var pizza = {};
	pizza.name = name;
	pizza.ingredients = ingredients;
	pizza.size = size;
	pizza.getPrice = function() {
		var fullPrice = 0;
		for(var i = 0; i < ingredients.length; i++) {
			fullPrice += pizza.ingredients[i].price;
		}
		fullPrice += pizza.size.price;
		return fullPrice;
	}
	return pizza;
}
var pizza1 = makePizza('margarita', 
	[{name: 'cheese', price: 14}, 
	{name: 'pepper', price: 12}, 
	{name: 'tomato', price: 10}],
	{name: 'small', price: 15})

console.log(pizza1);
console.log(pizza1.getPrice());
