// Code goes here!
// console.log("Hello");
// if(true){
//     var isOld=20;
    // let isOld=20;
// }
// console.log(isOld);

//default params
// function add(a:number ,b: number=1){
//     console.log(a+b);
// }

// add(5);



//Demo of ... operator
const hobbies = ['sports','singing'];

// const newHobbies = ['hiking'];
const newHobbies = ['hiking', ...hobbies];

newHobbies.push(...hobbies);

//we can use ... to spread out the objects as well
const person = {
    fname: "Harshit",
    age: 20
};

const newPerson = {...person};

const add = (...numbers:number[])=>{
    return numbers.reduce((prevValue, currentValue)=>{
        return prevValue+currentValue
    },0);
}

const res = add(1,2,3,4);
console.log(res);


const {fname:userName, age} = person;

console.log(userName, age);
