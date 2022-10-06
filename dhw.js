
/*
const pNumbers= [1, 2, 3, 4, 5]
console.log (pNumbers)
*/

/*
const info =
{
    firstName: "Jon",
    surname: "Rudicil",
    email: "jon.rudicl@yahoo.com",
    age: "120",

}
console.log (info)
info.driversLicense = true;
console.log (info)

delete info.age;
console.log (info)

const dopple =
{

firstName: "Frank",
surname: "Smith",
email: "fsmith@gmail.com",

}

const eq = info.email === dopple.email;
console.log (eq)

*/


/*
const totalShoppingCart = 20;

const shippingCost = 10;
const total = totalShoppingCart >= 50 ? totalShoppingCart : totalShoppingCart+ shippingCost;


console.log (total)
*/
/*
const totalShoppingCart = 20;
const blackFriaydiscount = totalShoppingCart/100 *20;
const shippingCost = 10;
const total = totalShoppingCart + blackFriaydiscount >= 50 ? totalShoppingCart : totalShoppingCart+ shippingCost;


console.log (total)
*/



/*
const newCar = {
    brand: "ford",
    model: "f150",
    licensePlate: "89159",
    }

 console.log (newCar);

const newCar2 = Object.assign({},newCar);
newCar2.licensePlate = "56796";
console.log(newCar2);

const newCar3 = Object.assign({},newCar);
newCar2.licensePlate = "12345";
console.log(newCar3);

const newCar4 = Object.assign({},newCar);
newCar2.licensePlate = "67891";
console.log(newCar4);

const newCar5 = Object.assign({},newCar);
newCar2.licensePlate = "159634";
console.log(newCar5);

const newCar6 = Object.assign({},newCar);
newCar2.licensePlate = "753159";
console.log(newCar6);


const carsForRent = [

   newCar,
    newCar2,
    newCar3,
    newCar4,
    newCar5,
    newCar6,
]
console.log (carsForRent)

const removedCar = carsForRent.pop();
console.log (carsForRent)
*/


// 6
/*
const orders = [5, 15, 45, 89]
console.log (orders [1]);
let sum = 0;
for (let i = 0; i <= orders.length -1; i++){
    sum += orders [i];
}
if (sum > 50){
    console.log ("total price:". sum);
}
else {
    console.log ("total price:", sum + 10);
}
// 7
*/
/*
const totalShoppingCart = 20;

const shippingCost = 10;
const total = totalShoppingCart >= 50 ? totalShoppingCart : totalShoppingCart+ shippingCost;


console.log (total)

const blackFridayTotal = .08 * total;
console.log (blackFridayTotal)
const finaltotal = total - blackFridayTotal;
console.log (finaltotal)*/



const newCar = {
    brand: "ford",
    model: "f150",
    licensePlate: "89159",
    }

 console.log (newCar);

const newCar2 = Object.assign({},newCar);
newCar2.licensePlate = "56796";
console.log(newCar2);

const newCar3 = Object.assign({},newCar);
newCar2.licensePlate = "12345";
console.log(newCar3);

const newCar4 = Object.assign({},newCar);
newCar2.licensePlate = "67891";
console.log(newCar4);

const newCar5 = Object.assign({},newCar);
newCar2.licensePlate = "159634";
console.log(newCar5);

const newCar6 = Object.assign({},newCar);
newCar2.licensePlate = "753159";
console.log(newCar6);




/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/


const carsForRent = [

   newCar,
    newCar2,
    newCar3,
    newCar4,
    newCar5,
    newCar6,
]
console.log (carsForRent)




/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/


const carsForRent1 = [

   newCar,
    newCar2,
    newCar3,
    newCar4,
    newCar5,
    newCar6,
]
console.log (carsForRent1)
const removedCar = carsForRent1.pop();
console.log (carsForRent1)

