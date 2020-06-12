// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");
//Class Engineer subclass constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //method to acquire role of Engineer from Employee class
    getRole() {
        return "Engineer";
    }
    //method to acquire github username from Employee constructor function
    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;