var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("employee name" + this.empName + "employee id " + this.empId);
    };
    Employee.prototype.setName = function (str) {
        this.empName = str;
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.setName('Deepak Yadav ');
emp1.empId = 567;
emp1.display();
