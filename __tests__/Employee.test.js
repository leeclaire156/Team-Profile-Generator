const Employee = require('../lib/Employee');

// describe() houses the testing units
// Each unit invoked through it("name", ()=>{testing methods}) or test("name", ()=>{testing methods})
describe('Employee', () => {

    // Add change 2nd value (id) to "aa11325" if you are using a letter AND number based identification system
    const employee = new Employee("Amy", 11325, "amy11325@gmail.com");

    // Test set 1: names
    it("should set the name as 'Amy'", () => {
        expect(employee.name).toBe("Amy");
    })

    it("should return name", () => {
        expect(employee.getName()).toBe("Amy");
    })

    // // Test set 2a: ID - number only based ID system
    it("should set the ID as 11325", () => {
        expect(employee.id).toBe(11325);
        expect(typeof (employee.id)).toBe("number");
    })

    it("should return id", () => {
        expect(employee.getId()).toBe(11325);
        expect(typeof (employee.getId())).toBe("number");
    })

    // // Test set 2b: ID - with non-capitalized letters based ID system
    // it("should set the ID as 'aa11325'", () => {
    //     expect(employee.id).toBe("aa11325");
    //     expect(typeof (employee.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(employee.getId()).toBe("aa11325");
    //     expect(typeof (employee.getId())).toBe("string");
    // })

    // // Test set 2c: ID - with capitalized letters based ID system
    // it("should set the ID as 'AA11325'", () => {
    //     expect(employee.id).toBe("AA11325");
    //     expect(typeof (employee.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(employee.getId()).toBe("AA11325");
    //     expect(typeof (employee.getId())).toBe("string");
    // })

    // Test set 3: Email
    it("should set an email", () => {
        expect(employee.email).toBe("amy11325@gmail.com");
        expect(employee.email).toMatch(/@/);
        expect(employee.email).toMatch(".")
    })


    it("should return email", () => {
        expect(employee.getEmail()).toBe("amy11325@gmail.com");
        expect(employee.getEmail()).toMatch(/@/);
        expect(employee.getEmail()).toMatch(".")
    })


    // Test set 4: role
    it("should set role as 'Employee'", () => {
        expect(employee.role).toBe("Employee");
    })

    it("should return role", () => {
        expect(employee.getRole()).toBe("Employee");
    })
});