const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        // Number() method converts id input variable type to number instead of default string
        // Change 'this.officeNumber = Number(officeNumber)' to 'this.officeNumber = officeNumber' if your employment facility's identification system includes letters
        // Use 'this.officeNumber = officeNumber.toUpperCase();' if your system only has capital letters so that regardless of user input, it will capitalize letters
        // You will ALSO need to change the testing requirements AND the manager room number questions in index.js pertaining from [type: "number",] to [type: "input",] for letter input, do not include brackets
        this.officeNumber = Number(officeNumber);
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;