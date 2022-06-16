"use strict;"
// exercise 1
function Dog(name, breed, color, gender){
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.gender = gender;

}
 let Fido = new Dog('fido', 'poodle', 'brown', 'male');

 console.log(Fido);

//  exercise 2

function ToDo(name, when, chorelist){
	// newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"])
    this.name = name;
    this.when = when;
    this.chorelist = [];

    this.chorelist.push(prompt("what chore do you have to do?"));
    

}

let Tyler = new ToDo('Tyler', 'tonight', []);
console.log(Tyler);

