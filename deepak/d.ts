console.log("hello");
let dec:number=123;
let hexadec:number=0x37cf;
let octa:number=0o377;
let bina:number=0b1100;
let float:number=10.8788;
console.log(octa);
console.log(hexadec);
console.log(dec);
console.log(bina.toExponential());
console.log(float.toFixed());
console.log(float.toLocaleString());

let fname:string= "Deepak";
let lname:string= "yadav";
let fullname =`${fname}`+" "+`${lname}`;
console.log(fname);
console.log(lname);
console.log(fullname);
console.log(fname.charAt(3));
console.log(fullname.lastIndexOf('v'));

let istrue:boolean=true;
console.log(istrue);
//using square brackets how to declare an array
let items:string []=['deepak','sampoo','biscuit'];
console.log(items);
//using generic type how to declare an array
let arr=[1,2,3, 'deepak','yadav',true,false];
console.log(arr);

let name1:Array<string>;
name1=['rahul','harinder','deepak'];
console.log(name1);

let demo:(string|number)[]=['Apple',3,'Orange',4,'Grape',6];
demo.push('Banana');
demo.push(7);
console.log(demo);
console.log(demo[0]);
for(let index in demo){
    console.log(demo[index]);
}