// //object
// let person = {
//         name: 'tofunmi',
//         age: 18,
//         isCoding: true
// }
// console.log(person.name.length)

//object method
function person(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
}

let Bolaji = new person("tofunmi", 18, "blue");
console.log(Bolaji);
let Uzoma = new person("david", 19, "black")
console.log(Uzoma);
