// variable hoisting
var isValid = true;
// isValid2 is not hoisted since it's declared usind 'let' keyword, so we're
// not able to use it before it is declared
let isValid2 = true;

// Hoisting works exactly the same for functions also. We're able to call/invoke
// a function before it is declared in the code
// validate('');

// function validate(inputString) {
//     // isValid is a global variable - defined outside the fn
//     console.log(isValid);
//     // HOISTING - error variable is "hoisted" (moved at the beginning of the fn)
//     // so the code will not throw an error but it will print undefined
//     console.log(error);
//     if (inputString.length === 0) {
//         isValid = false;
//         var error = true;
//         console.log('String is not valid');
//         console.log(isValid);
//         console.log(error);
//     }
// }

// Refactor validate fn with let/const


// function validate(inputString) {
//     console.log(isValid2);
//     // This will throw a Refference Error since const/let declared variables
//     // are not hoisted - they can't be used before they are declared
//     // console.log(error);
//     if (inputString.length === 0) {
//         const error = true;
//         isValid2 = false
//         console.log('String is not valid');
//         console.log(isValid2);
//         console.log(error);
//     }
// }

// console.log("From Global Scope");
// console.log(isValid2);
// error variable is a local variable declared in validate function, and it's accesible
// only inside that function ( a variable is not Hoisted outside the function)
// console.log(error);

// refactor validate function with arrow fn
const validate = inputString => {
    console.log(isValid2);
    // This will throw a Refference Error since const/let declared variables
    // are not hoisted - they can't be used before they are declared
    // console.log(error);
    if (inputString.length === 0) {
        const error = true;
        isValid2 = false
        console.log('String is not valid');
        console.log(isValid2);
        console.log(error);
    }
}

// since validate is declared using 'const' keyword, the variable is NOT
// hoisted so we're not able to call/invoke validate fn before it is declared
// validate('');

// this in Arrow functions
function expire() {
    this.isExpired = false;
    // arrow fn is taking the surrounding scope and sets it as 'this'.
    // so inside the setTimeout callback fn 'this' refers to the object with
    // isExpired key set to false
    setTimeout(() => {
        this.isExpired = true;
    }, 4000);

    // 'this' refers to 'window' object because setTimeout is a method
    // defined on 'window' object interface
    
    // setTimeout(function() {
    //     this.isExpired = true;
    // }, 4000);
    return this.isExpired;
}

const expire2 = expire.bind({});

console.log(expire2());