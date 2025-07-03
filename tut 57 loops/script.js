console.log("i am tutorial on loops")

let a = 0;
// console.log(a)
// console.log(a+1)
// console.log(a+2)
// console.log(a+3)
// console.log(a+4)
for (let i = 0; i < 100; i++) {
    console.log(a + 1);
    a++;

}

let obj = {
    name: "harry",              //key=name,role,company
    role: "programmer",         //element= harry,programmer,code with harry
    comapny: "code with harry"
}
for (const key in obj) {
    const element = obj[key];
    console.log( element);
}

for (const c of "harry"){
    console.log(c)
}

// let i=0;
// while (i<6){
//     console.log(i)
//     i++;
// }
let i=10;
do {
    console.log(i)
    i++;
} while (i<6);