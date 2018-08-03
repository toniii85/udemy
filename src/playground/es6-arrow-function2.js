//arguments object- no longer bound with arrow functions

const add =  (a, b)  => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55,1, 1001));

// this keyword - no longer bound 

const user = {
    name: "Toni",
    cities: ["Gijon", "Madrid"],
    printPlacedLived () {
        return  this.cities.map((city) => this.name + "vivió en " + city);
       
    }
};

console.log(user.printPlacedLived());

//Challenge area

const multiplier = {
    //numbers - array of numbers
    //multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers: [1,2,3],
    multiplier: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplier );
    }
};

//[1,2,3] 2 [2, 4, 6]
console.log(multiplier.multiply());