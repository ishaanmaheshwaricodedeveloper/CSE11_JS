const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if (sym1 === sym2) {
    console.log("true");
}
else {
    console.log("false");
}

let x = 10;
let y = 20;
let z = 30;

let largest = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
console.log(largest);

var count;
document.write("Starting Loop" + "<br>");
for(count =0;count<10;count++){
    document.write("Current count: " + count + "<br>");
}
document.write("Loop stopped!" + "<br>");
