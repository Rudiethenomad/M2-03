/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

 
const pNumbers= [1, 2, 3, 4, 5]
console.log (pNumbers)




/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/


const info =
{
    firstName: "Jon",
    surname: "Rudicil",
    email: "jon.rudicl@yahoo.com",
    age: "120",
}
console.log (info)



/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.



info.driversLicense = true;
console.log (info)



/* EXERCISE 4
 Remove from the previously created object the age property.
*/


delete info.age;
console.log (info)



/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/


const dopple =
{

firstName: "Frank",
surname: "Smith",
email: "fsmith@gmail.com",

}

const eq = info.email === dopple.email;
console.log (eq)



/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/


const totalShoppingCart = 20;

const shippingCost = 10;
const total = totalShoppingCart >= 50 ? totalShoppingCart : totalShoppingCart+ shippingCost;


console.log (total)




/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

 const blackFridayTotal = .08 * total;
console.log (blackFridayTotal)
const finaltotal = total - blackFridayTotal;
console.log (finaltotal)




/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/


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
const removedCar = carsForRent.pop();
console.log (carsForRent1)

 

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
