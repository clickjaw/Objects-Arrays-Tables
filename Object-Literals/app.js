"use strict;"

let Jimmy = {
    firstName: 'Jimmy',
    lastName: 'Page',
    age:'62',
    zipCode: '00821',

}

let Rick = {
    firstName:'Rick',
    lastName: 'Nielsen',
    age: '57',
    zipCode: '61016',

}
let Joe = {
    firstName: 'Joe',
    lastName: 'Walsh',
    age: '58',
    zipCode: '00821',

}

let Lemmy = {
    firstName: 'Lemmy',
    lastName: 'Kilmister',
    age: '57',
    zipCode: '21120',

}



this.people = [];
this.people.push(Jimmy, Rick, Joe, Lemmy);

console.log(people);

for (i = 0; i < people.length; i++){
    console.log(` Name: ${people[i].firstName} ${people[i].lastName}
      Age: ${people[i].age}
      Zip Code: ${people[i].zipCode}`
    )
    
}