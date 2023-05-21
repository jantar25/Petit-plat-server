const hamburger = './Assets/hamburger.png'
const cake = './Assets/cake.png'
const coffee = './Assets/coffee.png'
const smoothie = './Assets/smoothie.png'
const iceCream = './Assets/ice-cream.png'
const pizza = './Assets/pizza.png'
const dishesContainer = document.querySelector('.dishes')


const dishes = [
    {
        id:1,
        iconImage:hamburger,
        title:'Tasty Burger',
        description:'simply and double burger sandwich consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll',
    },
    {
        id:2,
        iconImage:pizza,
        title:'Tasty Pizza',
        description:'dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients',
    },
    {
        id:3,
        iconImage:iceCream,
        title:'Ice Cream',
        description:'frozen dessert made from milk or cream and flavoured with a sweetener and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches',
    },
    {
        id:4,
        iconImage:smoothie,
        title:'Smoothie',
        description:'beverage made by puréeing ingredients in a blender.',
    },
    {
        id:5,
        iconImage:coffee,
        title:'Coffee',
        description:'beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic',
    },
    {
        id:6,
        iconImage:cake,
        title:'Cakes',
        description:'confection made from flour, sugar, and other ingredients, and is usually baked',
    },
]

dishesContainer.innerHTML = dishes.map(dish => `
    <div class="dish">
        <img src=${dish.iconImage} alt=${dish.title} />
        <h2>${dish.title}</h2>
        <p>${dish.description}</p>
    </div>
`).join('')