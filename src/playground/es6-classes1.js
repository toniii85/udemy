
class Person {
  constructor(name = "Anónimo", age = 0) {
    this.name = name;
    this.age = age;
  }

  getSaludo() {
    return `Hola, soy ${this.name}!`;
  }

  getDescription() {
    return `${this.name} tiene ${this.age} años`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` y su carrera es ${this.major} `
    }
    return description;
  }
}

//Traveler -> Person
//Añadir soporte para location
//Override getGretting
//1. Hi Soy Toni, Estoy visitando desde Gijón
//2. Hi Soy Toni.

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  hasLocation() {
    return !!this.location;
  }

  getSaludo() {
    let saludo = super.getSaludo();
    if (this.hasLocation()) { 
      saludo += ` Estoy visitando desde ${this.location}`;
    }
    return saludo;
  }
}



const me = new Traveler("Toni", 32, "Gijón");
console.log(me.getSaludo());

const other = new Traveler();
console.log(other.getSaludo());