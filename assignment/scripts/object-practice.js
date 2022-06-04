console.log('***** Object Practice *****');

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
	//! Create the me onbject
	firstName: 'Stephon',
	lastName: 'Buckhanan',
	hasSiblings: true,
	shoeCount: 3,
	favThreeFoods: ['Pizza', 'Tacos', 'Fries']
};
console.log('A little about me:', me); //! Will console log all the properties and their values in the me object

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`; //! Declare full name variable. Combines me.firstName and me.lastName

console.log(fullName); //! Console logs the fullName variable. Should show Stephon Buckhanan.

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log(me.favThreeFoods[0]); //! Should show pizza
console.log(me.favThreeFoods[2]); //! Should show Fries

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount); //! Should show 3
me.shoeCount += 1; //! Add 1 shoe to the shoeCount
console.log(me.shoeCount); //! shoeCount should now show 4

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'Blue'; //! Add a new property to the me object with a value of Blue

console.log(me.favoriteColor); //! Should show Blue
