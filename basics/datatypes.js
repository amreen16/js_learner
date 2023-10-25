/* primitive
7 types:String,Number,Boolean,Null,Udefined,Symbol,bigInt

reference(Non primitive)
Arrays,Objects,Functions

js is dynamically typed*/

const name=Symbol("Amreen")
const nickName=Symbol("Amreen")
console.log(name == nickName)//false coz symbol datatype ressembles unique value
let list=[];
let myObj={
    naam:"ammu",
    age:21
}
let myfunc=function(){
    console.log("hellooo")
}
const ball=null
console.log(typeof ball)