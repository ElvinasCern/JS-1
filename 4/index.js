function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let salyga = rand(1, 2);


let kazkasPriskirta = (salyga == 1) ? 'krokodilas' : 'zebras';


console.log(kazkasPriskirta);

let egzaminoRezultatas = rand(1, 10);
console.log('--------------1-----------');
console.log(egzaminoRezultatas);
console.log(egzaminoRezultatas >= 4 ? 'Islaikyta': 'Neislaikyta');
console.log('--------------2-----------');
// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo",
// jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi.
// Pranešimą "Pralaimėjo" - priešingu atveju 

let dalyvis1 = rand(1, 4);
let dalyvis2 = rand(1, 4);
console.log(dalyvis1, dalyvis2);
console.log(((dalyvis1 + dalyvis2) > 6) || (dalyvis1 == dalyvis2) ? 'Laimejai': 'Pralaimejai' );

console.log('--------------------------');

console.log(3 == true)
