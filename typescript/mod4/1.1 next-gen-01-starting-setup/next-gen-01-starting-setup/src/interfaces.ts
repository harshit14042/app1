interface person{
    name: string;
    age: number;
    greet(phrase:string):void;
}

let user1:person;

user1 = {
    name:'Harshit',
    age: 25,
    greet(phrase: string){
        console.log(`${phrase} ${this.name}`);
    }
}

interface Named{
    readonly name?:string;//To mark some prop as optional
}

interface Greetable extends Named{
    // readonly name: string;
    greet:(phrase:string)=>void;
}

user1.greet('Hi There, ');

class Person implements Greetable{
    name?: string;
    constructor(n?:string){
        if(n){
            this.name=n;
        }
    }
    greet(phrase: string){
        if(this.name){
            console.log(`${phrase} ${this.name}`);
        }
        else{
            console.log('Hi');
        }
        
    }
}

const user2: Person = new Person('Harshit');
const user3: Person = new Person();

user2.greet('He there from Class implementing interface, ');
user3.greet('He there from Class implementing interface, ');