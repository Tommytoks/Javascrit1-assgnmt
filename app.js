// Number one question
var num1 = parseInt(prompt("Input First Number"));
var num2 = parseInt(prompt("Input Second Number"));

sum = num1 + num2
output1 = "The sum of "  + num1 + " & " + num2 + " = " + sum
alert(output1)

//Number two question

var fname = prompt("Input your First Name");
var lname = prompt("Input your Lirst Name");

var fourchar = fname.slice(0,4);
var lastchar = lname.slice(0,1);

var combine = fourchar + lastchar;

var userid = combine.toLowerCase();

var ouput2 = "Your CapabacityBay userid is " + userid;

alert(ouput2)