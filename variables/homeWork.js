//The Fortune Teller

var numChildren = 4
var me = "haimereJ"
var house = "my home"
var wife = "Marie"


document.write("My name is " + me + " " + "and my wife's name is " + wife + ".<br>");
document.write("I live in " + house + " " + "and I have " + numChildren + "children.<br>");


//The Age Calculator 

var birth = 2004
var future = 2018
var age = (future - birth)
    document.write("in the year " + future +
     " you would be " + age + " or " + 
     (age + 1) + "<br>");

//The Lifetime Supply Calculator

var currentAge = 13
var maxAge = 90
var orangePerday = 2
var neededOranges = (maxAge - currentAge) * 
    (365 * orangePerday)
document.write("you will need " + neededOranges + 
    "oranges to last you until the ripe old age of " + 
    maxAge + "<br>")


//The Geometrizer

var radius = 5
var area =  radius*radius*3.14
var circumference = radius*2*3.14;

document.write("the circumference is " + circumference.toFixed(2) + "<br>")
radius*radius*3.14
document.write("the area is " + area + "<br>")
