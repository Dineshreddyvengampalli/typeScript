/* 5.

Todo:
Schema: (object Model)
Item        - String
Quantity    - Number
Price       - Number
Date        - DateTime
Place       - String

?
Design patterns:
Template pattern: 
- How you can relate the behaviour from 'class inheritance' and 'interface'? (how the template pettern suits here?)
*/

interface toDolist{
    item : string,
    quantity : number,
    price : number,
    date : string,
    place : string,
    finalLook()
}
 class TodoListClass implements toDolist{
    public item: string;
    public quantity: number;
    public price: number;
    public date: string;
    public place: string;

    // create a constructor

    constructor(item:string,quantity:number,price:number,date:string,place:string){
        this.item = item;
        this.quantity = quantity;
        this.price = price;
        this.date = date;
        this.place = place;

    }

    public finalLook() {
       console.log(`Iam going to do ${this.item} on ${this.date} at ${this.place}`);
    }

 }

 let toDoObj = new TodoListClass('buy mobile',4,400,'17-07-2022','chennai');
 toDoObj.finalLook();

 // class implementation of todo object model :

 class todo extends TodoListClass{
    
    public createTask(){
        console.log('task created');
    }
 }

 let to = new todo('buy',1,20,'12 th aug','banglore');
 to.finalLook()