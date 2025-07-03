
console.log("hello i am conditional tutorial")

let age = 1;
let grace = 2;
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age ** grace)
console.log(age % grace) //remainder kya hoga vo output aaega 
if ((age - grace) >= 18) {
    console.log("You can Drive")
}

else {
    console.log("You can't Drive")
}
if (age != 28) {
    console.log("You are not 28")
}
else {
    console.log("You are good baccha")
}


if (age == 18) {
    console.log("You can drive beta");
}
else if (age == 0) {
    console.log("are you kidding");
}
else if (age == 1) {
    console.log("are you again kidding");
}
else {
    console.log("You can't drive")
}


let a = 6;
let b = 8;
let c = a < b ? (a - b) : (b - a)
console.log(c)
/*
translates to:
if (a>b) {
let c=a-b;
}
else{
let c=b-a;
}
*/
