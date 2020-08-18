// Write code to define and export the Employee class

class Employee {
<<<<<<< HEAD
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
=======
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
};

module.exports = Employee;
>>>>>>> 6adfc120f06a6b54d6a621daf7a688ee7d955c60
