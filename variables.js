//let : declares are block-scoped:

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

console.log("JavaScript let and callback function in a for loop");
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
console.log("2222222222222");

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}

//JavaScript const in a for loop


let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}











// https://www.javascripttutorial.net/es6/javascript-let/