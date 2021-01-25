abstract class Department{
    // name: string;
    private employees: string[]=[];
    static currentYear = 2021;
    // constructor(n:string){
    //     this.name=n;
    // }
    constructor(public readonly name:string){

    }
    // describe(this: Department){
    //     // console.log(`Name: ${this.name}`);
    // }
    abstract describe():void;
    addemployee(name:string){
        this.employees.push(name);
    }
    printInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }

    static getCurrentYear(){
        return Department.currentYear;
    }
}

class ITDepartment extends Department{
    constructor(n: string, private codeBase: string[]=[]){
        super(n);
    }
    addCode(code:string){
        this.codeBase.push(code);
    }
    readCodeBase(){
        console.log(this.codeBase);
    }
    describe(){
        console.log('IT Depart');
    }
}

// let account = new Department('Account');

// console.log(account);

//we have constrained by passing dummy arg to describe(this)
// const accCopy = {describe: account.describe};
// accCopy.describe();


// const accCopy = {name:'S', describe: account.describe};
// accCopy.describe();

// account.addemployee('Harshit');
// account.addemployee('Verma');

// making employees prop as private handles this
// account.employees[2]='Anna';

// Read only property
// account.name = 'sometihng';

// account.printInfo()


const itDept = new ITDepartment('IT Department');

itDept.addCode('Code1');
itDept.addCode('Code2');

itDept.readCodeBase();

console.log(Department.getCurrentYear());
console.log(Department.currentYear);

