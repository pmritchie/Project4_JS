/*
*Patrick Ritchie
*Logic Loops
*DVP2
*/
//Making The Grade - Logical Operators

alert("Welcome to the 'Making the Grade' program")
var firstGrade = inputInt("Please enter your first grade.")

// function to check if input is a number
function inputInt(message){
var input = "";	
while(input == "" || Number.isInteger(input) == false){
var input = window.prompt(message)
if (!Number.isInteger(parseInt(input)))
{
	alert("Please enter an interger to continue.")
}
else{
	input = parseInt(input)
	return input;
}
}
}

var secondGrade = inputInt("Now enter your second grade.")
var gradeArray = [firstGrade, secondGrade]

if(gradeArray[0] >= 70 && gradeArray[1] >= 70){
	alert("Congrats, both grades are passing!")
}
else {
	alert("One or more of your grades is not passing, better luck next time!")
}

// Brunch Bunch - Logical Operators

var customerAge = inputInt("Welcome to Jim Bob's Diner! \nToday's Brunch Bunch price is $15.00! \nFor Senior(55+) = $10.00 \nChildren (10 & Under) = $10.00 \n" +
	"Please enter your age to see your price today for Brunch Bunch!")

if(customerAge >= 55 || customerAge <= 10){
	alert("Your total for todays Brunch Bunch is $10.00")
}
else{
	alert("Your total for today's Brunch Bunch is $15.00")
}

//Add Then Up - For Loop

var dvdAmount = inputInt("Welcome to 'Add Em Up!'\nPlease enter the amount of DVD's you have now homie!")
var bluRayAmount = inputInt("Please enter the amount of Blu-Ray's you own homie!")
var ultraVioletAmount = inputInt("Please enter amount of UltraViolet's you own homie!")

var collectionArray = [dvdAmount, bluRayAmount, ultraVioletAmount]
var collectionSum = 0;

for(var i = 0; i < collectionArray.length; i++){
	collectionSum += collectionArray[i]
}
if(collectionSum >= 100){
	alert("Wow! You have a impressive collection there bruv!")
}
else{
	alert("You have "+collectionSum+" movies in your collection.")
}