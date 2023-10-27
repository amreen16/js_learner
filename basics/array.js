let arr=['0','1','2','3','4','5']
//console.log(arr);
arr.push('6')
arr.pop()
//console.log(arr);
arr.unshift('6')
//console.log(arr);
arr.shift()
//console.log(arr);
//console.log(arr.includes('2')); //returns boolean
const newArr =arr.join()//array to string conversion
//console.log(newArr);
//console.log(typeof newArr);
//console.log(arr.slice(1,3))
//console.log(arr);
let anArr=arr.splice(1,3) //splice manipulates original array
//console.log(arr)
//console.log(anArr);
let fruits=['mango','orange','apple','banana']
let someMore=['pineapple','watermelon','strawberry']
//fruits.push(someMore)
//const allFruits=fruits.concat(someMore)
const allFruits=[...fruits,...someMore]
//console.log(allFruits);
let nestArr=[1,2,3,4,[5,6,7],[8,[9,10]]]
let newNest=nestArr.flat(Infinity) 
//console.log(newNest);
console.log(Array.from('Amreen'));//string to array conversion
//console.log(Array.from({name:'Amreen'})) //returns empty array when asked to make array from key value pairs
let a=10
let b=20
let c=30
console.log(Array.of(a,b,c));