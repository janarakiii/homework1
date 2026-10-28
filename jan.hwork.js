let september=27;
let october=30;
let november=14;

let attendance=true;
let x=5;
let total;
let score=(september + october + november) /3;
if (attendance == true) {
    console.log("+5");
    total = score+x;
} 
else {
console.log("-5");
total = score-x;
}
console.log("Total score:", total);
if (total > 31) {
    console.log("Error");
}
else if (total >=25) {
    console.log("A");
}
else if (total >=15) {
    console.log("C");
}
else {
    console.log("F");
}