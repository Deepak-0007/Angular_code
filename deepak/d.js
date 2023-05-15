console.log("hello");
var dec = 123;
var hexadec = 0x37cf;
var octa = 255;
var bina = 12;
var float = 10.8788;
console.log(octa);
console.log(hexadec);
console.log(dec);
console.log(bina.toExponential());
console.log(float.toFixed());
console.log(float.toLocaleString());
var fname = "Deepak";
var lname = "yadav";
var fullname = "".concat(fname) + " " + "".concat(lname);
console.log(fname);
console.log(lname);
console.log(fullname);
console.log(fname.charAt(3));
console.log(fullname.lastIndexOf('v'));
var istrue = true;
console.log(istrue);
//using square brackets how to declare an array
var items = ['deepak', 'sampoo', 'biscuit'];
console.log(items);
//using generic type how to declare an array
var arr = [1, 2, 3, 'deepak', 'yadav', true, false];
console.log(arr);
var name1;
name1 = ['rahul', 'harinder', 'deepak'];
console.log(name1);
var demo = ['Apple', 3, 'Orange', 4, 'Grape', 6];
demo.push('Banana');
demo.push(7);
console.log(demo);
console.log(demo[0]);
//for(let index in demo){
//  console.log(demo[index]);
//}
