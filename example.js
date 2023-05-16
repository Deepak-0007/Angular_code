function display(num) {
    if (num % 2 == 0) {
        console.log("even number");
    }
    else {
        console.log("odd number");
    }
}
console.log(display(23));
//ternary operator
var x = 10, y = 20;
x < y ? console.log("x is lesser") : console.log("y is lesser");
var day = 6;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("select from 1 to 7");
        break;
}
for (var i_1 = 0; i_1 < 4; i_1++) {
    console.log("hello" + i_1);
}
//for out loop
var arr1 = [1, 2, 3, 4];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var v = arr1_1[_i];
    console.log(v);
}
//for in loop
var str1 = "hello world";
for (var ch in str1) {
    console.log(str1[ch]);
}
var i = 0;
while (i < 4) {
    console.log("using while" + i);
    i++;
}
function sum(a, b) {
    return a + b;
}
console.log(sum(8, 9));
// annoymus function
var mul = function (a, b) {
    return a * b;
};
console.log(mul(10, 20));
//optional parameter with or without value only last parameter can be optional parameter
function demo2(fName, lName) {
    return fName + " " + lName;
}
console.log('Deepak');
//tuple
// a tuple can store two or more variable on it
var emp = ['Deepak', 1];
console.log(emp);
// more than 2 value sotre in tuple
var dem = [1, 'ajay', true, 1234];
dem.push(2, 'hari', false, 0987);
console.log(dem);
//union
var code;
code = "deepak", 123;
console.log(code);
