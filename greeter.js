var number = 5;
var string = "string";
var boolean = true;
var arrayNumber = [5, 10, 15];
var arrayNumber2 = [50, 100, 150];
var Employee = /** @class */ (function () {
    function Employee(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Employee.prototype.displayInfo = function () {
        console.log(this.name);
        console.log(this.age);
        if (this.email) {
            console.log(this.email);
        }
        else {
            console.log("Email undefined");
        }
    };
    return Employee;
}());
var Box = /** @class */ (function () {
    function Box(name, data) {
        this.name = name;
        this.data = data;
    }
    Object.defineProperty(Box.prototype, "value", {
        get: function () {
            return this.data;
        },
        set: function (newValue) {
            this.data = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "boxName", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var employee = new Employee("Zach", 27);
employee.displayInfo();
var box = new Box("Boxy", null);
console.log(box);
box.boxName = "Box Boy";
console.log(box.boxName);
