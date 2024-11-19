// console.log("Muhammad Umair Abbasi");

const accountId = 12233445; // val is locked not changed
let accoundEmail = "umairabbasi@google.com";
var accountPassword = "12345";
let accountType;
accountCity = "Uk";

// Investigation study

// accountId = 998876; // not allowed.

accoundEmail = "umairabbasi@meta.com";
accountPassword = "97754337";
accountCity = "USA";

// console.table([accountId, accoundEmail, accountPassword, accountCity, accountType]);

/*
Not to use var in code b/c of issue in block and functional scope 

*/

/*
❌ Avoid using `var`: It "disrespects" block scope!
1. `var` ignores block boundaries, leaking variables outside their intended scope.
2. It allows redeclaration in the same scope, which can overwrite values unintentionally.
3. These quirks can lead to tricky bugs and unexpected behavior.

✅ Use `let` and `const` instead:
1. `let`: Respects block boundaries and is suitable for variables that need reassignment.
2. `const`: Respects block boundaries and is perfect for variables that won’t change.

📌 Why? Modern JavaScript favors predictable, clean, and safer scoping with `let` and `const`.

Examples:
*/

// Example 1: `var` disrespects block scope
if (true) {
    var badVar = "I ignore blocks!";
  }
  console.log(badVar); // Output: I ignore blocks! (Leaked outside the block)
  
  // Example 2: `var` allows redeclaration
  var x = 10;
  var x = 20; // No error, but overwrites the value
  console.log(x); // Output: 20
  
  // Example 3: Using `let` (respects block scope)
  if (true) {
    let goodLet = "I stay in my block!";
    console.log(goodLet); // Output: I stay in my block!
  }
  // console.log(goodLet); // Error: goodLet is not defined
  
  // Example 4: Using `const` (immutable and block-scoped)
  const goodConst = "I stay in my block and never change!";
  // goodConst = "Trying to change"; // Error: Assignment to constant variable
  