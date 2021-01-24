function sum(n1:number,n2:number,showResult:boolean,phrase:string){
    const result = n1+n2;
    if(showResult){
        console.log(phrase + result);
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

