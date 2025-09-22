// const isEven = (a)=> a%2==0 ? "even" : "odd";
// console.log(isEven(2));
// console.log(isEven(3));

// const isDivisible = (a,b) => a%b==0 ? "divisible" : "not divisible";
// console.log(isDivisible(4,2));
// console.log(isDivisible(3,2));


class student{
constructor(name,rollno){
this.name = name;
this.rollno = rollno;
}
display(){
 console.log(this.name);            
 console.log(this.rollno);
}
}

//hoisting in js
var a = 10;
console.log(a);
var a = 20;
console.log(a);

// non hoisting in js
let a = 10;
console.log(a);
let a = 20;
a = 30;
console.log(a);
