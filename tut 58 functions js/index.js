function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " your tshirt is nice!")
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " your course is good too")
}

nice("yash")
nice("harry")

function sum(a, b, c = 3) {
    //  console.log(a + b)
    return a + b + c
}
result1 = sum(3, 2)
result2 = sum(78, 5)
result3 = sum(32, 51, 1)

console.log("sum of these numer is: ", result1)
console.log("sum of these numer is: ", result2)
console.log("sum of these numer is: ", result3)


const func1 = (x) => {
    console.log("i am an arrow function", x)
}
func1(34);
func1(64);
func1(84);