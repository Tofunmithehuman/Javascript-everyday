// //object
// let person = {
//         name: 'tofunmi',
//         age: 18,
//         isCoding: true
// }
// console.log(person.name.length)



// //object method
// function person(name, age, color) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
// }

// let Bolaji = new person("tofunmi", 18, "blue");
// console.log(Bolaji);
// let Uzoma = new person("david", 19, "black")
// console.log(Uzoma);



// // methods 
// function person(name, age) {
//         this.name = name;
//         this.age = age;

//         this.sentence = function() {
//                 return `My name is ${name} and i am ${age} years old`;
//         }
// }

// let tofunmi = new person("tofunmi", 18);
// console.log(tofunmi.sentence());



// //methods 2
// function person(name, age) {
//         this.name= name;  
//         this.age = age;
//         this.yearOfBirth = bornYear;
// }
// function bornYear() {
//         return 2023 - this.age;
// }
// var p = new person("tofunmi", 18);
// console.log(p.yearOfBirth());



// //method 3
// function person (name, age) {
//         this.name = name;
//         this.age = age;

//         this.changeName = function(name) {
//                 this.name = name;
//         }
// }
// let tofunmi = new person("tofunmi", 18);
// console.log(tofunmi);
// tofunmi.changeName("david");
// console.log(tofunmi);



// //method 4 (defining the function outside of the constructor function)
// function person(name, age) {
//         this.name = name;
//         this.age = age;
//         this.newName = changeName;
// }
// function changeName(name) {
//         this.name = name;
// }
// let tofunmi = new person("tofunmi", 18);
// console.log(tofunmi);
// tofunmi.newName("david");
// console.log(tofunmi);



// //method 5
// function person(name, age) {
//         this.name = name;
//         this.age = age;
//         this.yearOfBirth = myYear; 
// }
// function myYear() {
//         return 2023 - this.age;
// }

// let tofunmi = new person("tofunmi", 18);
// console.log(tofunmi);
// console.log(tofunmi.yearOfBirth());



// //code challenge 1
// let person = {
//         name: "Oluwatofunmi",
//         age: 18,
//         city: "Lagos"
// }
// console.log(person);
// //Done


// //code challenge 2
// function calculator(x, y) {
//         this.x = x;
//         this.y = y;
//         this.add = function() {
//                 return this.x + this.y;
//         }
//         this.subtract = function() {
//                 return this.x - this.y;
//         }
//         this.multiply = function() {
//                 return this.x * this.y;
//         }
//         this.divide = function() {
//                 return this.x / this.y;
//         }
// }

// let calc = new calculator(2, 2);

// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.multiply());
// console.log(calc.divide());
// //Done


// //code challenge 3
// let favBooks = {
//         othello: "williams",
//         osapa: "daveRolex",
//         otopks: "fortballz"
// }


function favBooks( book, author ) {
        this.book = book;
        this.author = author;

        this.listBookTitles = function () {
        for (let i = 0; i < 3; i++) {
                console.log(favBooks);
        }
}
}
let outello = new favBooks("othello", "williams");
let osapa = new favBooks("othello", "williams");
let out = new favBooks("othello", "williams");
console.log(out.book);