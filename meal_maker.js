const menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        let appetizerLength = this.courses.appetizers.length;
        let mainsLength = this.courses.mains.length;
        let dessertsLength = this.courses.desserts.length;
        let coursesLength = appetizerLength + mainsLength + dessertsLength;
        let randomIndex = Math.floor(Math.random() * coursesLength);
        let randomAppetizerIndex = Math.floor(Math.random() * appetizerLength);
        let randomMainIndex = Math.floor(Math.random() * mainsLength);
        let randomDessertIndex = Math.floor(Math.random() * dessertsLength);
        let appetizersList = Object.values(this.courses.appetizers);
        let mainsList = Object.values(this.courses.mains);
        let dessertsList = Object.values(this.courses.desserts);
        let dishes = appetizersList.concat(mainsList, dessertsList);
        let randomAppetizer = appetizersList[randomAppetizerIndex];
        let randomMain = mainsList[randomMainIndex];
        let randomDessert = dessertsList[randomDessertIndex];
        let appetizerName = randomAppetizer.name;
        let mainName = randomMain.name;
        let dessertName = randomDessert.name;
        let appetizerPrice = randomAppetizer.price;
        let mainPrice = randomMain.price;
        let dessertPrice = randomDessert.price;
        let mealPrice = appetizerPrice + mainPrice + dessertPrice;
        let randomMeal = 'Your sumptuous feast includes ' + appetizerName + ', ' + mainName + ', and a ' + dessertName + ' for $' + mealPrice + '!';
        return randomMeal;
    },
};

menu.addDishToCourse('mains', 'bacon cheeseburger', 18);
menu.addDishToCourse('appetizers', 'fried pickles', 8);
menu.addDishToCourse('appetizers', 'loaded nachos', 15);
menu.addDishToCourse('desserts', 'tiramisu', 12);
menu.addDishToCourse('appetizers', 'poutine', 12);
menu.addDishToCourse('mains', 'loaded mac and cheese', 18);
menu.addDishToCourse('mains', 'cheese pizza', 18);
menu.addDishToCourse('appetizers', 'caesar salad', 12);
menu.addDishToCourse('desserts', 'banana split sundae', 12);
menu.addDishToCourse('desserts', 'brownie a la mode', 8);

let meal = menu.getRandomDishFromCourse();
console.log(meal);
