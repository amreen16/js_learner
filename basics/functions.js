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