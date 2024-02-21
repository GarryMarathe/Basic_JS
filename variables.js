console.log("JavaScript tutorial 3: var, let, const")
var a=45;
var b="Aish";
var c=null;
var d= undefined;


// {
    // here we made one scope and in that scope we declared one variable
    // var is global scope if we changed it in scope then it will change in outside scope also
//     var b='this'
//     console.log(b)
// }

// console.log(b)


{
    let b='now'
    console.log(b)
// in terms of let, there will be not change out side of scope
//  let can be updated but can not re declared
}

console.log(b)

///// role of thumb: use let 


// const author= 'zebra'
// console.log(author)



///////////////////////////////////// let //////////////////////


// Variables declared with let can have a global, local, or block scope. A block in JavaScript involves opening and closing curly braces:   {}

// You can find blocks in if, loop, switch, and a couple of other statements. Any variables declared in such blocks with the let keyword will have a block scope. Also, you can't access these variables outside the block. Here's an example showing a global, local, and block scope:

// Just like var, variables declared with let can be reassigned to other values, but they cannot be redeclared. Let's see a reassignment example:

let number = 50
console.log(number) // 50

number = 100
console.log(number) // 100
// Here, we reassigned another value 100 after the initial declaration of 50.


// But redeclaring a variable with let will throw an error:

// let number = 50

// let number = 100
// // SyntaxError: Identifier 'number' has already been declared

// Variables declared with let are hoisted to the top of their global, local, or block scope, but their hoisting is a little different from the one with var.

// var variables are hoisted with a default value of undefined, which makes them accessible before their line of declaration (as we've seen above).

// But, let variables are hoisted without a default initialization. So when you try to access such variables, instead of getting undefined, or variable is not defined error, you get cannot access variable before initialization. Let's see an example:


///////////////////////////////////// const //////////////////////////////////////////


// The scope of variables declared with const
// Variables declared with const are similar to let in regards to scope. Such variables can have a global, local, or block scope.


// In this regard, const is different from var and let. const is used for declaring constant variables – which are variables with values that cannot be changed. So such variables cannot be redeclared, and neither can they be reassigned to other values. Attempting such would throw an error.


// var variables, as you've seen earlier, are hoisted with a default value of undefined so they can be accessed before declaration without errors. Accessing a variable declared with const before the line of declaration will throw a cannot access variable before initialization error.



// var variables, as you've seen earlier, are hoisted with a default value of undefined so they can be accessed before declaration without errors. Accessing a variable declared with const before the line of declaration will throw a cannot access variable before initialization error.