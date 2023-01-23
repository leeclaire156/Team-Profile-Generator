class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        //TODO: convert IDs to uppercase for letters a-z
        return this.id;
    }

    getEmail() {
        //TODO: validate or run test that there's an @ or other email components
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;