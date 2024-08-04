'use strict';

// class expression
// const Person = class {}



// 1. Classes are NOT hoisted
// 2. Classes are first-class cities
// 3. Classes are executed in strict mode



//class decleration

// class Info{
//     constructor(name,age=45){
//         this.name=name;
//         this.age=age
//     }

//     getFullName(){
//         console.log(`${this.name} has ${this.age} years old`);
//     }

//     get myName(){
//         console.log(this.name);
//     }

//     set calcBirthYear(year){
//         console.log(`Ayaz ${year - this.age} ilde dogulub`);
//     }

//     static subtract(a, b) {
//         return a - b;
//       }
// }


// const ayaz = new Info('Ayaz', 25)


// ayaz.myName
// ayaz.calcBirthYear = 2024


// console.log(ayaz);

// const ronaldo = {
    
//     name: 'Ronaldo',
//     age:39,
    
//     calcBirthYear(){
//         console.log(2024 - this.age);
//     },

//     mergeInfo(sureName,salary){
//         this.sureName=sureName;
//         this.salary=salary
//     }

// }

// const messi = Object.create(ronaldo,{
//     name:{value:'Messi'},
//     age: {value:40}
// })

// const messi = Object.create(ronaldo)

// messi.name = 'Messi'
// messi.age = 37

// messi.mergeInfo('Lionel',35000000)
// console.log(messi);



// class Car {
//     constructor(mark,speed){
//         this.mark = mark;
//         this.speed = speed;
//     }


//     increaseSpeed(data){
//         console.log(`${this.mark} speed is increase ${this.speed +=data}`);
//     }


//     decreaseSpeed(data){
//         console.log(`${this.mark} speed is decrease ${this.speed -=data}`);
//     }
   


//     get speedUS(){
//         console.log(`${this.speed / 1.6} mi/h`);
//     }


//     set speedUs(data){
//         console.log(`${this.speed * 1.6} km/h`);
//     }


// }



// const mercedes = new Car('Mercedes',120)

// mercedes.increaseSpeed(5)
// mercedes.increaseSpeed(5)
// mercedes.increaseSpeed(5)
// mercedes.decreaseSpeed(5)



// mercedes.speedUS
// mercedes.speedUs = 1.6


// const Person = function(name,sureName,age){
//     this.name = name;
//     this.sureName = sureName;
//     this.age = age
// }


// Person.prototype.sayName = function(){
//     console.log(`I am ${this.name} ${this.sureName}`);
// }

// const Student = function(name,sureName,major){
//     Person.call(this,name,sureName)
//     this.major = major
// }

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype)


// Student.prototype.introduce =function(){
//     console.log(`My name is ${this.name} ${this.sureName} and My major is ${this.major}`);
// }



// const ayaz = new Student('Ayaz','Ibrahimov', 'IT Software')


// console.log(ayaz);

// ayaz.sayName();



// const Car = function(make,speed){
//     this.make = make;
//     this.speed = speed;
// };


// Car.prototype.accelerate = function(){
//     this.speed +=20
//     this.charge -=1
//     console.log(`${this.make} is going  ${this.speed} per hour with charge of ${this.charge} %`);
// };



// const Ev = function(make,speed,charge){
//     Car.call(this,make,speed)

//     this.charge = charge;
// }


// Ev.prototype = Object.create(Car.prototype)

// Ev.prototype.chargeBattery = function(chargeTo){
//     this.charge += chargeTo
// }


// const tesla = new Ev('Tesla',120,23)


// tesla.chargeBattery(10)
// tesla.chargeBattery(40)
// tesla.chargeBattery(40)
// console.log(tesla);
// tesla.accelerate()
// console.log(tesla);
// tesla.accelerate()
// console.log(tesla);









class Person{

    constructor(name,age){
        this.name = name;
        this.age = age
    }


    calcAge(){
        console.log(2024 - this.age);
    }


    calcAnnualSalary(){
        console.log(this.salary*12);
    }

}



class Student extends Person{

    constructor(name,age,salary){
        //super will be first
        super(name,age)
        this.salary = salary
    }

    fullName(){
        console.log(this.name + " " + 'Ibrahimov');
    }

}


const ayaz = new Student('Ayaz', 26, 2500)

ayaz.fullName()
ayaz.calcAge()
ayaz.calcAnnualSalary()



console.log(ayaz);












// 