// var a;
// console.log(a);
// a=12;
// var a= 40;
// if(a>20){
//   var a=90;
//   console.log("a inside if="+a);
// }  else{
//     console.log("hii...inside else")
// }
// console.log("a is outside ="+a);
// function greetings(){
//     console.log("hii...Welcome to abes ds");

// }
// const data = greetings();
// console.log("data="+data)
// const data=function greeting(msg){
//     return"hii..welcome to ABES ds"+msg;
// }
// const msg=data("Neeraj");
// console.log(msg);
// const data=msg=>msg;
// console.log(data("hiiii....."));
// (function(){
//     console.log("Welcome to FSD")
// })();
// (()=>{
//     console.log("hiii......")
// })();
// function greetings(msg="hii..."){
//     console.log(msg+"Welcome to ABES")

// }
// greetings("Hey...");
// function msg(){
//     console.log("Welcome to ABES");
// }
// setTimeout(()=>{
//     console.log("heyy... using FSD");

// },1000);
// setInterval(msg,1000);
const bookTicket= ()=>{
    setTimeout(()=>{
        printMessage("Login has been done success")
        setTimeout(()=>{
            printMessage("seat has been choosen success")
            setTimeout(()=>{
            printMessage("payment has been choosen success")
        },3000)
        },3000)
    },2000)
}