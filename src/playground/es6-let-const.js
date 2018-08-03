var nameVar = "Toni";
var nameVar = "Mike";
console.log("nameVar", nameVar); 

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Fran";
console.log("nameConst",nameConst);

//Block scoping

const fullName = "Toni Vicente";
let firstName;
if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName)