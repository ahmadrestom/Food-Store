import {Food} from "./app/shared/models/food";

export const sample_foods: Food[] = [
    {
        id:'1',
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
        id:'2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Middle East', 'China'],
        stars: 4.5,
        imageUrl: 'assets/food-2.jpg',
        tags: ['Meatball', 'Eastern Food'],
    },
    {
        id:'3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany'],
        stars: 4.0,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
    },
    {
        id:'4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium'],
        stars: 3.5,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fries', 'Lunch'],
    },
    {
        id:'5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
    },
    {
        id:'6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
    },
]