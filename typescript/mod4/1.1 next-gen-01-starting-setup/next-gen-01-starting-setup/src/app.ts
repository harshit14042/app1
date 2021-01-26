//TypeCasting

// const inputElement = document.getElementById("inputElement")! as HTMLInputElement;
// const inputElement = <HTMLInputElement>document.getElementById("inputElement")!;
const inputElement = document.getElementById("inputElement");
if(inputElement){
    (inputElement as HTMLInputElement).value = "Hello";
}


//Key Value pairs
interface ErrorContainer{
    [prop: string]: string;
}

const errorBag: ErrorContainer={
    'email':'Not a valid email !!',
    'username':'Not a valid Username!!'
}

console.log(errorBag.email);



const owner = {
    name:'Harshit',
    age: 25,
    job:{title:'CEO', desciption: 'Startup'}
};
//Optional CHaining
console.log(owner?.job?.title);


//Generics
function merge<T, U>(a:T,b:U){
    return Object.assign(a,b);
}

const obj = merge({name:'Max', hobbies:['hello']},{age:20});

console.log(obj);
