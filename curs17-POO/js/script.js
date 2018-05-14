var car = {
  "owner.first.name": "Alexandra",
  color: "red",
  nrKm: 10000,
  isNew: false,
  drive: function(distance) {
    this.nrKm = this.nrKm + distance;
    console.log("Driving the car for: " + distance);
    console.log("This car has " + this.nrKm + " after driving it");
  }
};

console.log(car);
// accessing object properties
console.log(car.nrKm);
// This method of accessing properies is very useful
// if attribute key has some weird characters on it
console.log(car["owner.first.name"]);
console.log(car["color"]);

// calling object's methods
car.drive(100);


//Declaring Classes in JS

// constructor function
function Dog(data) {
  data = data || {};
  this.name = data.name || "";
  this.age = data.age || 0;
  this.breed = data.breed || "";
  this.isFriendly = data.isFriendly || true;
}

// add class methods
Dog.prototype.bark = function() {
  alert("Howl howl, barking like a: " + this.breed);
}

var dog1 = new Dog();
dog1.name = "Arya";
dog1.age = 2;
dog1.breed = "Golden";

// calling class methods
dog1.bark();


var dog2 = new Dog();
dog2.name = "Azor";
dog2.age = 4;
dog2.breed = "Beagle";

var dog3 = new Dog();
dog3.name = "Rex";
dog3.age = 7;
dog3.breed = "Doberman";
dog3.isFriendly = false;

var dog4 = new Dog({
  name: "Charlie",
  age: 6,
  breed: "Labrador"
});

var dog5Data = {
  name: "Lolly",
  age: 9,
  breed: "Terra Nova"
};
var dog5 = new Dog(dog5Data);
dog5.bark();

console.log(dog1);
console.log(dog2);
console.log(dog3);
console.log(dog4);
console.log(dog5);


var userData = [{
  name: "John",
  age: 34,
  height: 1.76,
  weight: 80
},{
  name: "Marty",
  age: 22,
  height: 1.65,
  weight: 90
},{
  name: "Anne",
  age: 44,
  height: 1.73,
  weight: 45
},{
  name: "Kevin",
  age: 33,
  height: 1.80,
  weight: 77
}]


function User(){
  this.name = "";
  this.age = 0;
  this.height = 0;
  this.weight = 0;
}

User.prototype.calculateBMI = function(){
  return this.height / this.weight;
}

for(var i = 0; i< userData.length; i++) {
  var currentUser = userData[i];
  var u = new User();
  u.name = currentUser.name;
  u.age = currentUser.age;
  u.height = currentUser.height;
  u.weight = currentUser.weight;
  
  var rezBmi = u.calculateBMI();
  console.log(rezBmi);
}