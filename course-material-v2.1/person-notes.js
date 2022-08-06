// 32. Activating Strict Mode

//"use strict"
// Ignored by Javascript versions before ECMAScript 5
// Ignored by Internet Explorer 9 and lower

//Uses
// --Add at beginning of script or a function
// --Cannot use undeclared variables - In older JavaScript, mistyping variable names would have
// created global variables. Use scrict throws an error.
// Deleting a variable or function using the 'delete' keyword is not allowed
// -- Cannot duplicate parameter names

// The 'this' keyword behaves differently.
// The this keyword in functions behaves differently in strict mode.
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
