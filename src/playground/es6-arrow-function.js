// function square (x){
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x ;
// // }; 

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

// Chalenge - Use arrow functions
// getFirstName, usando la misma lógica que antes
const firstNameLong = (fullName) => {
    return fullName.split(" ")[0];
};
const firstName = (fullName) => fullName.split (" ")[0];

console.log(firstNameLong("Mike Smith"));
console.log(firstName("Mike Smith"));
