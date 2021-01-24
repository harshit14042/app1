function sum(n1:number,n2:number,showResult:boolean,phrase:string){
    const result = n1+n2;
    if(showResult){
        console.log(phrase + result);
        return 1;
    }
    else{
        return result;
    }
}

const number1=5;
const number2=2.8;
const showResult=true;
const resultPhrase='Result is: ';

const result = sum(number1,number2, showResult, resultPhrase);

console.log(result);

// const person : {
//     name: string;
//     age: number;
// }={
const person:{
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string] // This ensures a tuple with specified types
} = {
    name: 'Harshit',
    age: 25,
    hobbies : ['Sports','Gaming'],
    roles: [2,'author']
};

const fav: any[] = ['Sports',1];

// person.roles.push('admin');

// person.roles[1]=10;//not allowed as it expects a string
// person.roles=['asd',5];//Not allowed due to the enforced roles definition

console.log(person);
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

enum Roles {ADMIN='Admin', AUTHOR='Author', READER=10};

const person1 = {
    name: 'Harshit',
    age: 25,
    hobbies : ['Sports','Gaming'],
    roles: Roles.ADMIN
};

console.log(person1.roles);



function combine(
    inp1: number | string,
    inp2: number | string, 
    resultConversion: 'as-number' | 'as-text'
    ){
    if( (typeof inp1 ==='number' && typeof inp2 === 'number') || resultConversion === 'as-number'){
        return +inp1 + +inp2;
    }
    else{
        return inp1.toString() + inp2.toString();
    }
}

const combAges = combine(10,15,'as-number');
console.log(combAges);

const combAgesText = combine('10','15','as-number');
console.log(combAgesText);

const combNames = combine('Harshit','Ankita','as-text');
console.log(combNames);

type numberOrString = number | string;
type conversionDescriptor = 'as-number' | 'as-text';

function combineWithTypeAliases(
    inp1: numberOrString,
    inp2: numberOrString,
    resultConversion: conversionDescriptor
    ):string | number
    {
    if( (typeof inp1 ==='number' && typeof inp2 === 'number') || resultConversion === 'as-number'){
        return +inp1 + +inp2;
    }
    else{
        return inp1.toString() + inp2.toString();
    }
}

function combineValues(num1:number,num2:number):number{
    return num1+num2;
}

function printOnly(num: number):void{
    console.log(num);
}

let combineF: (a:number,b:number)=>number; //Function type

// combineF = printOnly;
combineF = combineValues;
console.log(combineF(1,2));



//callbacks
function combineValuesWithCB(num1:number,num2:number, cb: (res:number)=>void):void{
    const result = num1+num2;
    cb(result);
}

combineValuesWithCB(1,2,(result)=>{
    console.log(result);
});




//unknown type
let v: unknown;
let x: string;

v=5;
v='Harshit';
// Type 'unknown' is not assignable to type 'string'.
// x=v;
//It adds addiotnal typecheck as compared to any
if(typeof v ==='string'){
    x=v;
}


//never type: doesn't even return undefined
function generateErr(message:string, code:number):never{
    throw {message: message, errorCode: code};
}

generateErr('Error is thrown!!!',500);


// watchmode- tsc applicationCache.ts -w


//adding tsc config file to compile all ts files at once-    tsc --init
//afterwords you can run simply tsc to compile allthe files

//combining tsc --init and watchmode-> tsc -w
