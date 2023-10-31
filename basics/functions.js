function add(n1,n2){
    //console.log(n1+n2);
}
let res=add(3,7)
//console.log(res) //undefined as function is not asked for return

function jobOffer(name){
    if(name==undefined){ //or if(!name)
        //console.log("Please check with correct Mail")
        return
    }
    return `Congratulations! ${name}, You are selected`
}
//console.log(jobOffer());

function class1(){
    let sub1="eng";
    function class2(){
        let sub2="maths";
        //console.log(sub1)
    }
   //console.log(sub2);
    class2()
}
class1()

if(true){
    const emp="amreen"
    if(emp==="amreen"){
        const team=" Gov"
        //console.log(emp +  team)
    }
    //console.log(team)
}

function add(num){
    return num+1;
}
//console.log(add(9));

//let sub=function(num){
   // return num-1;
//}
//console.log(sub)

//let mail=" "//{} //[] //a16@gmail.com";
//if(mail)
{
    //console.log("logged in");
}
//else{
    //console.log('forgot mail')
//}
//truthy-{},[]," ","0","false",function(){}
//false - 0, -0,"",null,undefined

//to check whether arrays are empty
let mail=[]
if(mail.length===0){
    //console.log("array is empty");
}
let obj={}
if(Object.keys(obj).length===0){
    //console.log("object is empty");
}
//nullish coalescing operator(??)
let val=9
//val=9??10
//val=null??8
val=null??undefined??0
//console.log(val);

//ternary operator(?)
//condn?true:false
const age=24
age>=21 ? console.log("adult"):console.log("teen");