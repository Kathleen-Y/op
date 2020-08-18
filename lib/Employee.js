// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber;
    };
    //method to acquire constructor of Employee class
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.Id;
    }
    //method to acquire office number of Employee class
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Employee;