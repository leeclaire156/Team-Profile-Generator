class Employee {
    constructor(name, id, email) {
        this.name = name;
        // Number() method converts id input variable type to number instead of default string
        // Change 'this.id = Number(id)' to 'this.id = id' if your employment facility's identification system includes letters
        // Use 'this.id = id.toUpperCase();' if your system only has capital letters so that regardless of user input, it will capitalize letters
        // You will ALSO need to change the testing requirements AND the 3 questions in index.js pertaining to id from [type: "number",] to [type: "input",] for letter input, do not include brackets
        this.id = Number(id);
        this.email = email;
        this.role = "Employee";
    }

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
        return this.role;
    }
}

module.exports = Employee;