# Question Answers:



## What is the difference between var, let, and const?

=> var, let, and const are all JavaScript variables. The difference between them is in scope, redeclaration, and reassignment.
	var has function scope. It can be redeclared and reassigned.
	let and const have block scope, which means they can only be used inside the block {} where they are declared.
	let cannot be redeclared in the same scope but can be reassigned.
	const cannot be redeclared or reassigned, and its value must be assigned at the time of declaration.



## What is the spread operator (…)?

=> The spread operator (...) is used to expand elements of an array or properties of an object into individual elements.
It is commonly used for copying, merging, or passing values.



## What is the difference between map(), filter(), and forEach()?

=> map(), filter(), and forEach() are all array methods. The difference is in return values and functionality.
	map() does something with each element and returns a new array.
	filter() filters elements based on a condition and returns a new array.
	forEach() does not return anything, it just performs an action for each element.



## What is an arrow function?

=> An arrow function is a shorter syntax for writing functions. It uses => to define the function.
Arrow functions are mostly used as callback functions or stored in a variable.


## What are template literals?

=> Template literals are used to make dynamic strings using backticks ``.
They allow embedding variables or expressions using ${} and also allow multiline strings.