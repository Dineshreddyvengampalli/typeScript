// 5.

// Todo:
// Schema: (object Model)
// Item        - String
// Quantity    - Number
// Price       - Number
// Date        - DateTime
// Place       - String

// ?
// Design patterns:
// Template pattern: 
// - How you can relate the behaviour from 'class inheritance' and 'interface'? (how the template pettern suits here?)

interface toDolist{
    item : string,
    quantity : number,
    price : number,
    date : Date,
    place : string,
    finalLook():string
}
 class TodoListClass implements toDolist{
    public item: string

 }
