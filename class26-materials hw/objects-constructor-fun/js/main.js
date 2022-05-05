//Create a constructor with 4 properties and 3 methods
function PizzaMaker(crustType, numberOfToppings, toppings, size){
    this.crust = crustType
    this.numOfToppings = numberOfToppings
    this.toppings = toppings
    this.size = size
    this.cut = function() {
        console.log('Slice!')
    }
    this.bake = function() {
        console.log('Baked to perfection')
    }
    this.deliver = function() {
        console.log('On the way!')
    }
}

let pizza = new PizzaMaker('deep dish', 4, ['tomatoes', 'grilled onions', 'banana peppers', 'ricotta'], 'medium')



//Create a constructor with 4 properties and 3 methods
function MakePizza(size, numOfToppings, toppings, crustType) {
    this.size = size
    this.numOfToppings = numOfToppings
    this.toppings = toppings
    this.crustType = crustType
    this.cut = function() {
        console.log('slice')
    }
    this.burnMouth = function() {
        console.log('fjdkslfkdlsfjk')
    }
    this.deliver = function() {
        console.log('zoom!')
    }
}

let myPizza = new MakePizza('large', 2, ['spinach','feta'], 'thick')

//Create a constructor with 4 properties and 3 methods
function MakeDog(breed, color, size, age) {
    this.breed = breed
    this.color = color
    this.size = size
    this.age = age
    this.bark = function() {
        console.log('woof!')
    }
    this.sit = function() {
        console.log('sits')
    }
    this.eat = function() {
        console.log('nonomnom')
    }
}

let Chula = new MakeDog('pitty-sharpae', 'yellow', 'medium', 12)

//Create a dog class constructor with 4 properties and 3 methods

class DogMaker{
    constructor(breed, color, size, age) {
        this.breed = breed
        this.color = color
        this.size = size
        this.age = age
    }
    bark() {
        console.log('woof')
    }
    sit() {
        console.log('sits')
    }
    eat() {
        console.log('nomnomnom')
    }
}

let winston = new DogMaker('chihuahua', 'black', 'small', 10)
