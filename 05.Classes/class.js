var student = /** @class */ (function () {
    function student(stdName, stdId, stdPrt) {
        this.studentName = stdName;
        this.studentId = stdId;
        this.studentPercentage = stdPrt;
    }
    student.prototype.gradeCalcultor = function () {
        if (this.studentPercentage > 90) {
            return "a";
        }
        else {
            return "b";
        }
    };
    return student;
}());
var std = new student('Dinesh', 'cse18055', 91);
var grade = std.gradeCalcultor();
console.log(grade);
console.log("".concat(std.studentName));
