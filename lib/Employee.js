// TODO: Write code to define and export the Employee class

const Employee = require("lib/Employee.js");
//Class Manager subclass constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //method to acquire role of Manager from Employee class
    getRole() {
        return "Manager";
    }
    //method to acquire office number of manager from Employee class
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;