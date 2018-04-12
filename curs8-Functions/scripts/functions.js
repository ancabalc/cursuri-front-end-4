function printMessage() {
  console.log("My first function");
}

printMessage();

// --------------------------

function print(message) {
  console.log(message);
}

print(); // undefined

print("My first function with parameters");

// --------------------------

function printUser(name, gender, weight, height){
  var bmi = weight / (height * height);
  
  if (bmi < 18.5) {
    console.log(name + ' | ' + gender + ' | BMI: ' + bmi + ' Underweight');
  } else if (bmi < 25) {
    console.log(name + ' | ' + gender + ' | BMI: ' + bmi + ' Normal Weight');
  } else if (bmi < 30) {
    console.log(name + ' | ' + gender + ' | BMI: ' + bmi + ' Overweight');
  } else {
    console.log(name + ' | ' + gender + ' | BMI: ' + bmi + ' Obese');
  }
}

printUser("Ana", "F", 55, 1.6);
printUser("Ion", "M", 180, 1.80);

var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];

for (var i = 0; i < persons.length; i++) {
  printUser(persons[i].name, persons[i].gender, persons[i].weight, persons[i].height);
}

// --------------------------

function computeSum(a, b) {
  console.log('sum', a+b);
  
  a = "My special number";
  console.log(a);
}

computeSum(2, 3); // sum 5, My special number

var a = 2, b = 3;
computeSum(a, b); // sum 5, My special number

console.log(a); // a is still 2!

// even if a is modified inside the function, its value is not changed outside
// a is sent through value

// --------------------------
function displayFullName(name) {
  console.log(name.first + ' ' + name.last);
  name.last = "Batman";
  console.log(name.last); // Batman
}

var nameObject = {
  first: "Bruce",
  last: "Wayne"
};

displayFullName(nameObject); // Bruce Wayne, Batman

console.log(nameObject.last); // Batman

// name is sent by reference
// if name is modified inside the function, the changes are also visible outside










