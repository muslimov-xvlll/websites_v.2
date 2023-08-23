alert("Дано квадратное уравнение: ax^2 + bx + c = 0")
alert("Введите значения a, b, c")
var a = prompt();
var b = prompt();
var c = prompt();
var d = (b*b) - (4*a*c);
console.log("Дискриминант = " + d)
if (d < 0){
    console.log("Т.к дискриминант < 0, то это уравнение не имеет корней.");
}
else if (d == 0) {
    console.log("Т.к дискриминант = 0, то это уравнение имеет один корень: ")
    let x = (b*-1)/(2*a);
    console.log("Х = " + x);
}
else if (d > 0) {
    console.log("Т.к дискриминант > 0, то это уровнение имеет два корня: ")
    let x1 = ((b*-1) + Math.sqrt(d))/2*a;
    let x2 = ((b*-1) + Math.sqrt(d))/2*a;
}
// function disk(a, b, c, d) {
//     var a = 2;
//     var b = 3;
//     var c = 4;
//     var d = b * b - (4* a * c);
//     return d;
// }