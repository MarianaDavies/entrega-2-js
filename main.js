const pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["Mozzarella", "Tomate", "Ajo", "Orégano"],
        precio: 700
    },
    {
        id: 2,
        nombre: "Margarita",
        ingredientes: ["Mozzarella", "Jamon", "Tomate", "Albahaca"],
        precio: 800
    },
    {
        id: 3,
        nombre: "Calabresa",
        ingredientes: ["Mozzarrella", "Longaniza"],
        precio: 1300
    },
    {
        id: 4,
        nombre: "Vegana",
        ingredientes: ["Paparella", "Tomate", "Verdeo", "Morron"],
        precio: 500
    },
    {
        id: 5,
        nombre: "Hawaiana",
        ingredientes: ["Mozzarella", "Jamon", "Anana"],
        precio: 1100
    },
    {
        id: 6,
        nombre: "Champignones",
        ingredientes: ["Mozzarella", "Jamon", "Champignones", "Verdeo"],
        precio: 1150
    },
    {
        id: 7,
        nombre: "Cuatro quesos",
        ingredientes: ["Mozzarella", "Roquefort", "Parmesano", "Gruyere"],
        precio: 1500
    },
    {
        id: 8,
        nombre: "Completa",
        ingredientes: ["Mozzarella", "Jamon", "Morron", "Aceitunas"],
        precio: 580
    }
];


//Ejercicio A
//Opcion 1
console.log(pizzas.filter((pizza)=> pizza.id %2 !== 0));  

//Opcion2
let pizzasImpares = pizzas.filter((pizza) => {                                  
    if(pizza.id % 2 !== 0) {
        console.log(`La pizza ${pizza.nombre} con ID ${pizza.id} es impar`)
    }
});


//Ejercicio B
//Opcion 1
console.log(pizzas.filter((pizza) => pizza.precio < 600));  

//Opcion 2
let pizzasBaratas = pizzas.filter((pizza) => {                                  
    if(pizza.precio < 600) {
    console.log(`La pizza ${pizza.nombre} vale menos de $ 600, puntualmente $ ${pizza.precio}.`)
    }
});

//Ejercicio C
let nombrePizzas = pizzas.forEach((pizza) => console.log(pizza.nombre));

//Ejercicio D
let precioPizzas = pizzas.forEach((pizza) => console.log(`$ ${pizza.precio}`));

//Ejercicio E
let datosPizzas = pizzas.filter((pizza) => console.log(`La pizza ${pizza.nombre} tiene un precio de ${pizza.precio} pesos`));