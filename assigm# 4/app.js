// ARRAY AND LOOPS
// ++++++++++++++++Q1+++++++++++++

// ++++++++++/ Q2++++++++++


//++++++++++++++++++ Q3++++++++++++++++

for (var i=0; i <= 10; i++ ){
    console.log(i);
    document.write(i + "<br>")
}


//=============== Q4 ================
var tableNumber= +prompt("1 enter the table number");
var tableLength= +prompt("2 enter the table length");

for (var i =0; i <= tableLength; i++){  
    console.log(tableNumber*i)
    document.write(tableNumber + "x" + i + "=" +tableNumber*i + "<br>")
}

// // +++++++++++++++Q5++++++++++
var fruits =[ "apple", "mango", "banana" , "kiwi" ,"orange", "strawberry"]
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// // ++++++++++++Q6++++++


// // q6 (A)
for (var i = 0; i<=15; i++) {
    console.log(i)
    document.write(i + "<br>")
}


// // q6 (B)
for (var i = 20; i>=0; i--) {
    console.log(i)
    document.write(i + "<br>")
}

// // q6 (c)
for (var i = 0; i<=15; i +=2) {
    console.log(i)
    document.write(i +"<br>")
}

// q6(D)

var oddNumbers = "";
for (var i =1 ; i<= 21; i++){
    if ( i % 2 !== 0) {
oddNumbers += i + "," ;}
    }
document.write("odd numbers: " + oddNumbers.slice(0, -2));
