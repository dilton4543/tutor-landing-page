// document.getElementById("best").innerHTML = "My name is Lota" //DOM methods
// document.getElementById("best").style.color="red"
// document.getElementsByClassName("html")
// document.getElementsByTagName("h1")
// const best = document.getElementById("best")
// best.style.color="blue"
// best.style.fontSize="20px"
// let amount; //declaring a variable
// amount=20;  
// let amount1=30;//defining a variable
// console.log(amount+amount1);
// //datatypes
// let name= "lota"; //string
// let age=20; //number
// let status = false;//boolean
// let address;//undefined
// let person={ //object datatype
//     name: "lota",
//     age: 20,
//     occupation: "student",
//     address: "no 37 pitasons estate off okpanam road asaba, delta state",
// };
// let apple={
//     name: "iphone",
//     Description: "Mobile device",
//     Quantity: 2000,
//     Price: 1500,
// };
// let fruits =["oranges", "mango","Pineapple","guava"];//array datatype
// let ages =[20,21,21,22,23];//array
// let persons =[ //array of objects
//     {name:"Lota", age: 20},
//     {name:"Emmanuel", age: 23},
//     {name: "sarah", age: 40},
// ];
// let peopel = [ //array of arrays
//     ["lota", "Nancy", "Maguire"],
//     ["sarah","chidinma","bax"],
// ];
// let mixedarray =[
//     23,//number
//     "Lota",//string
//     {occupation: "student", sex:"male"},//object
//     [20,"234", "pols"],//array
// ];
// let employee ={
//     name: "lota",
//     position: "senior employee",
//     salary: 50000,
// };
// let job = {
//     name: "dev",
//     Description: "front-end dev",
//     requirments : ["html","css","bootstrap","javascript"],
// };
// let books =[ //array of objects
//     {name:"Lord quinn",author: "joe Goldberg", year: 2015},
//     {name:"Half of a yellow sun", author: "chimamanda adiche", year: 2005},
//     {name: "things fall apart", author: "chinua achebe",year: 2003}
// ];
// let student = {
//     Id :"20/1845",
//     name : "lota",
//     Department : "computer science",
//     result :{ maths: "A",Eng : "B", stats: "A",researchmethods:"B",OR:"A"},
// };
// //javascript functions
// function sum(a, b) {
//     return "The sum of the two numbers is" + (a+b);
// }
// console.log(sum(5, 6));

// function cube(a) {
//     return "the cube of 3 is " + (a**3);
// }
// console.log(cube(3));
// function Name(){
//     return "my name is lota";
// }
// console.log(Name());

// function names(name){
//     return "my name is " + name;
// }
// console.log(names("lota"));

// function area(l, b){
//     return "the area of the rectangle is " + (l*b) + "sqcm";
// }
// console.log(area(5, 6));

// function sI(p,r,t) {
//     return "the simple  interest is " + ((p*t*r)/100);
// }
// console.log(sI(200,3,5));

// //comparison operatiors
// console.log(4 == "4"); 
// console.log(4 === "4");
// //conditional statements
// let time =7;
// let greeting;

// if(time==7) {
//     greeting = "Good morning";
// }
// else{
//     greeting = "good evening";
// }

// console.log( "Greeting :" + greeting )

// let priceofphone =500000;
// let payments= 50000;
// let payment;
// if (payments== priceofphone) {
//     payment=" Your payment has been approved";
// }
// else{
//     payment= "declined";
// }
// console.log(payment)

// function areaoftri(b,h){
//     return "The area of the triangle is: " + (b*h)/2;
// }
// console.log(areaoftri(5,6));

// function nam(n){
//     return "my name is " + n;
// }
// console.log(nam("lota"))

// function namee(){
//     return "my name is lota";
// }
// console.log(namee());

// let num;

// function oddnum(num) {
//     if (num %2 ==0){
//         return "Number is an even number";
//     }
//     else {
//         return "Number is an odd number";
//     }
// }
// console.log(oddnum(5));
// console.log(oddnum(2));

// function large(l1,l2) {
//     if (l1>l2) { 
//         return l1 + " is greater than" + l2;
//     }else {
//         return l2 + " is greater than " + l1;
//     }
// }
//  console.log(large(200,500));
 
//  function largethree(a,b,c) {
//     if (a>b&&c){
//         return a + " is the largest number";
//     }else if(b>c){
//         return b + " is the largest number";
//     }else if(c>b){
//         return c + " is the largerst number";
//     }
//  }
//  console.log(largethree(2,3,5));

//  function calc(a,b,c){
//     if (b=="+"){
//         return a+c;
//     }else if(b=="-"){
//         return a-c;
//     }else if(b== "*"){
//         return a*c;
//     }else if (b=="/"){
//         return a/c;
//     }
//  }
//  console.log(calc(10,"*",2));
// let mark;
//  function findGrade(mark){
//     if (mark<=100 && mark>=90){
//         return "S grade";
//     }else if(mark<90 && mark>=80){
//         return "A grade";
//     }else if(mark>=70 && mark<80){
//         return "B grade";
//     }else if(mark>=60 && mark<70){
//         return "C grade";
//     }else if(mark>=50&& mark<60){
//         return "D grade";
//     }else if(mark>=40&& mark<50){
//         return "E grade";
//     }else {
//         return "Invalid marks";
//     }
//  }
// console.log(findGrade(0))

// function checkInRange(num,start,end){
//     if (num >= start && num<=end){
//         return "between the range";
//     }else{
//         return "Outside the range";
//     }
// }
// console.log(checkInRange(4,5,8));

//making the nav bar responsive
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinksDiv");

hamburger.addEventListener("click", function () {
    if(navLinks.style.display === "none"){
        navLinks.style.display = "block";
    }else {
        navLinks.style.display="none";
    }
});