
// Defining a class called student

class student{
    // crreating the members of the class (variables) with access specifiers.

    public studentName:string;
    public studentId:string;
    public studentPercentage:number;

    //creating a consructor that is called automatically wen the object is initiated.

    constructor(stdName:string,stdId:string,stdPrt:number){
        this.studentName=stdName;
        this.studentId=stdId;
        this.studentPercentage=stdPrt;
    }

    // Creatind the method inside the class 

    public gradeCalcultor():string{
        if(this.studentPercentage>90){
            return "a";
        }
        else{
            return "b";
        }
        

    }
}

// Creating the object to the class
let std = new student('Dinesh','cse18055',91);
let grade = std.gradeCalcultor();
console.log(grade);
console.log(`${std.studentName}`);