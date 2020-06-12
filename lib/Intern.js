// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

//Class Intern subclass constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    //method to acquire role of Intern from Employee class
    getRole() {
        return "Intern";
    }
    //method to acquire school of Intern from Employee class
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;