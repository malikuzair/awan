//PALINDROME//
let str='civic'
let ispalandrome=false
for(let i=0;i<str.length;i++)
{
    if (str[i]===str[str.length-1-i])
    {
        ispalandrome=true
    }
    else{
       ispalandrome=false 
    }
}
if(ispalandrome)
{
    console.log("the given string is palandrome:")
}
else{
    console.log("the given string is not palandrome:")
}










// q1

// for (let i = 0; i < 10; i++) {
//     console.log("Iteration: " + (i + 1));
//     }

    
// q2
   // for (let i = 0; i <= 12; i++) {
  // code to be executed in each iteration
}//

//Q3
//The correct code should be: //
//for (var i = 0; i <= 4; i++)//

//Q4//
for (let count = 0; count < 100; count++) {
  // code to be executed in each loop iteration
}
//q5//
for (let i = 6; i > 3; i--) {
  console.log(i);
}
//q6//
const myArray = [1, 2, 3, 4, 5];
const arrayLength = myArray.length;
console.log(arrayLength);
//q7//
let flag = true; 
// or//
 let flag = false;
//q8//
for (let i = 0; i < pets.length; i++) {
    // code to be executed inside the loop//
}

//q09//
for (let i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }


//q10//

// create array of user names
var userNames = ["John", "Jane", "Bob", "Sara"];

// prompt user to enter first name
var firstName = prompt("Enter first name:");
for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] === userName) {
    alert("Enter");
    break;
  } else if (i === userNames.length - 1) {
    alert("Please write correct user name");
  }
}
//Q11///
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
};

if (!matchFound) {
  alert("No match found");
}
//Q12/


for (var i = 0; i < firstArr.length; i++) { 
  // code to be executed inside the loop 
}
    let firstArr = ['a', 'b', 'c', 'd', 'e', 'f'];
let secondArr = ['1', '2', '3', '4', '5', '6', 'j'];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    if (j < secondArr.length - 1) {
      console.log(firstArr[i] + secondArr[j]);
    } else {
      console.log(firstArr[i] + secondArr[j]);
      break;
    }
  }
}
