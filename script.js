
/*var message="in global";
console.log("global:message=" + message);

var a =function () {
  var message = "inside a";
  console.log("a: message =" + message);

  function b (){
    console.log("b: message =" +message);

 }
 b();
}
 
 a();
 */

 //lectured 42
/*var x;
console.log(x);

if (x==undefined) {
    console.log("x is undefined");
}

x=5;
if (x==undefined){
    console.log("x is still defined");
}
else{
    console.log("x has been redefined to "+5);

}*/

//lecture

/*var string = "helow";
string += "world";
// string =string +"world";
console.log(string + "!");

*/

/*
console.log(( 5 + 4) /3);
console.log(undefined /5);
function test1 (a){
    console.log(a/5);
}
test1();*/

//***equality  */
/*var x=4, y=4;
 if( x == y ){
    console.log("x=4 is equal to y=4");
 }

x=4 ;
 if( x == y ){
    console.log("x='4' is equal to y=4");
 }

//***strict equality 
if( x == y ){
    console.log("Strict: x='4' is equal to y=4");
 }
 else{
    console.log(" strict : x='4' in not equal to y=4");
 
 }
 */
 /*if statement( al false)
 if(false||null ||undefined||""||0||NaN){
    console.log("tthis line won't everr execute");
 }

 else{ console.log(" all false");
}

//if  statement(all true)
if(treu&&"hello"&&1&& -1&& "false"){
    console.log("all true");
}
*/

/*
//bets practices for { style}
//curly brace on the same or next line
//is it just a style?
function a(){
    return{
        name:"junior"
    };
}

function b(){
    return{
        name:"junior e"
    };
}

console.log(a());
console.log(b());*/
 // for loop
/*var sum=0;
for (var i=0; i < 10; i++){
    sum=sum +i;
}
console.log("sum of 0 through 9 is:" +sum);
*/
/*
//import para js code en wix example 1
function orderchickenwith(sideDish){
    if(sideDish=== undefined) {
        sideDish="whatever";
    }
    console.log("Chichen with" + sideDish);   
}

orderchickenwith("noodles");
orderchickenwith();

//import para js code en wix example 2
function orderchickenwith(sideDish){
    sideDish = sideDish||"whatever!" 
    console.log("Chichen with" + sideDish);   
}

orderchickenwith("noodles");
orderchickenwith();
*/
// object creation
var company=new Object();
    company.name="facebook";
    company.ceo= new Object();
    company.ceo.firstName="Mark";
    company.ceo.lastName="Zuckerr";
    company.ceo.favColor="blue";

    console.log(company);
    console.log("company ceo name is:" +
     company.ceo.firstName)
     console.log(company["name"]);
     company["$stock of company"]=110;

     console.log("stock price is:" +company[stockPropName]);



     