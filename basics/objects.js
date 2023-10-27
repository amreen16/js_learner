const mySym=Symbol("Arrow")
let stu={
    name:"Amreen",
    [mySym]:"not an arrow",
    "college":"svec",
    rollNum:16,
    emailId:"am@g.com"
}
//console.log(stu.name);
//console.log(stu["name"]);
//console.log(stu.college) or console.log(stu."college") is not valid
//you must give console.log(stu["college"])
//console.log(stu[mySym]);
stu.name="ammu"
//Object.freeze(stu)
stu.name="Sweetie"
//console.log(stu);

stu.greetings=function(){
    console.log(`Welcome,this is ${this.name}`);
}
//console.log(stu.greetings());

const insta= new Object();
insta.id=51
insta.name="amreen16"
insta.profile="cat"
//console.log(insta);

const newAcc={
    id:16,
    username:{
        fullName:{
            firstName:"Sam" ,
            lastName:"Shaik"
        }
    }
}
//console.log(newAcc.username.fullName.lastName);
const Ob1={1:"apple",2:"bat",3:"cat"}
const Ob2={4:"dog",5:"Egg"}
//const res={...Ob1,...Ob2}
//const res=Object.assign({},Ob1,Ob2)
//console.log(res)
//console.log(insta);
//console.log(Object.keys(insta));
//console.log(Object.values(insta))
//console.log(Object.entries(insta))
//console.log(insta.hasOwnProperty('login'))//returns boolean

const employee={
    empId:16,
    empName:"Amreen",
    empDept:"IT"
}
let {empDept:Dept}=employee
//console.log(empDept);
console.log(Dept);