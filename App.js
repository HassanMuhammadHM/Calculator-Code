// (value/total value)×100%


var takenumber = prompt ("what is your number?")
var totalnumber = prompt ("Total number of result?")
var percheck = (takenumber / totalnumber) *100;
var a = Math.round(percheck);

console.log ("your result percentage is " + a + " %");




// Get user input for percentage
// var percentage = prompt("Enter your percentage:");

// Check if percentage is valid
if (a >= 0 && a <= 100) {
    // Calculate grade based on percentage
    var grade;
    if (a >= 80) {
        grade = "A+";
        console.log("Congrats, you got an A1 grade!");
    } else if (a >= 70) {
        grade = "A";
        console.log("Good job, you got a A grade.");
    } else if (a >= 60) {
        grade = "B";
        console.log("You got a B grade.");
    } else if (a >= 50) {
        grade = "C";
        console.log("You got a C grade.");
    } else {
        grade = "D";
        console.log("work hard, you got an D grade.");
    }
} else {
    console.log("Invalid percentage entered.");
}
