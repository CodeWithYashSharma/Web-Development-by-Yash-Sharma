console.log("this is calculator")

let FirstNo = 1
let SecondNo = 1

let random = Math.random()
if (random>0.1){
    console.log("Addition is",FirstNo+SecondNo)
    console.log("Subtraction is",FirstNo-SecondNo)
    console.log("Multiplication is",FirstNo*SecondNo)
    console.log("Division is",FirstNo/SecondNo)
}
else{
    console.log("Addition is",FirstNo-SecondNo)
    console.log("Subtraction is",FirstNo/SecondNo)
    console.log("Multiplication is",FirstNo+SecondNo)
    console.log("Division is",FirstNo**SecondNo)
}