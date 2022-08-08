var grade = /** @class */ (function () {
    function grade(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    grade.prototype.calculateRank = function () {
        if (this.marks > 90) {
            return 'first class';
        }
        else if ((this.marks > 80) && (this.marks < 90)) {
            return 'second class';
        }
        else {
            return 'third class';
        }
    };
    return grade;
}());
var rank = new grade('dinesh', 23, 95);
var output = rank.calculateRank();
console.log(output);
