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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TodoListClass = /** @class */ (function () {
    // create a constructor
    function TodoListClass(item, quantity, price, date, place) {
        this.item = item;
        this.quantity = quantity;
        this.price = price;
        this.date = date;
        this.place = place;
    }
    TodoListClass.prototype.finalLook = function () {
        console.log("Iam going to do ".concat(this.item, " on ").concat(this.date, " at ").concat(this.place));
    };
    return TodoListClass;
}());
var toDoObj = new TodoListClass('buy mobile', 4, 400, '17-07-2022', 'chennai');
toDoObj.finalLook();
// class implementation of todo object model :
var todo = /** @class */ (function (_super) {
    __extends(todo, _super);
    function todo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    todo.prototype.createTask = function () {
        console.log('task created');
    };
    return todo;
}(TodoListClass));
var to = new todo('buy', 1, 20, '12 th aug', 'banglore');
to.finalLook();
