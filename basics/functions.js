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

