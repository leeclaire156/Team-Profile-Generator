const Manager = require('../lib/Manager');

// describe() houses the testing units
// Each unit invoked through it("name", ()=>{testing methods}) or test("name", ()=>{testing methods})
describe('Manager', () => {

    // Add change 2nd value (id) to "rr18152" if you are using a letter AND number based identification system
    const manager = new Manager("Sophia-Grace Anderson", 191516, "sop191516@yahoo.co.uk", 101);

    // Test set 1: names
    it("should set the name as 'Sophia-Grace Anderson'", () => {
        expect(manager.name).toBe("Sophia-Grace Anderson");
    })

    it("should return name", () => {
        expect(manager.getName()).toBe("Sophia-Grace Anderson");
    })

    // // Test set 2a: ID - number only based ID system
    it("should set the ID as 191516", () => {
        expect(manager.id).toBe(191516);
        expect(typeof (manager.id)).toBe("number");
    })

    it("should return id", () => {
        expect(manager.getId()).toBe(191516);
        expect(typeof (manager.getId())).toBe("number");
    })

    // // Test set 2b: ID - with non-capitalized letters based ID system
    // it("should set the ID as 'ss191516'", () => {
    //     expect(manager.id).toBe("ss191516");
    //     expect(typeof (manager.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(manager.getId()).toBe("ss191516");
    //     expect(typeof (manager.getId())).toBe("string");
    // })

    // // Test set 2c: ID - with capitalized letters based ID system
    // it("should set the ID as 'SS191516'", () => {
    //     expect(manager.id).toBe("SS191516");
    //     expect(typeof (manager.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(manager.getId()).toBe("SS191516");
    //     expect(typeof (manager.getId())).toBe("string");
    // })

    // Test set 3: Email
    it("should set an email", () => {
        expect(manager.email).toBe("sop191516@yahoo.co.uk");
        expect(manager.email).toMatch(/@/);
        expect(manager.email).toMatch(".")
    })


    it("should return email", () => {
        expect(manager.getEmail()).toBe("sop191516@yahoo.co.uk");
        expect(manager.getEmail()).toMatch(/@/);
        expect(manager.getEmail()).toMatch(".")
    })


    // Test set 4: role
    it("should set role as 'Manager'", () => {
        expect(manager.role).toBe("Manager");
    })

    it("should return role", () => {
        expect(manager.getRole()).toBe("Manager");
    })

    // Test set 5a: Office Room Number
    it("should set office room number", () => {
        expect(manager.officeNumber).toBe(101);
        expect(typeof (manager.officeNumber)).toBe("number");
    })

    it("should return office room number", () => {
        expect(manager.getOfficeNumber()).toBe(101);
        expect(typeof (manager.getOfficeNumber())).toBe("number");
    })

    // // Test set 5b: Office Room Number - with non-capitalized letters based ID system
    // it("should set the office room number as 'rm 101a'", () => {
    //     expect(manager.officeNumber).toBe("rm 101a");
    //     expect(typeof (manager.officeNumber)).toBe("string");
    // })

    // it("should return office room number", () => {
    //     expect(manager.getOfficeNumber()).toBe("rm 101a");
    //     expect(typeof (manager.getOfficeNumber())).toBe("string");
    // })

    // // Test set 5c: Office Room Number - with capitalized letters based ID system
    // it("should set the office room number as 'RM 101A'", () => {
    //     expect(manager.officeNumber).toBe("RM 101A");
    //     expect(typeof (manager.officeNumber)).toBe("string");
    // })

    // it("should return office room number", () => {
    //     expect(manager.getOfficeNumber()).toBe("RM 101A");
    //     expect(typeof (manager.getOfficeNumber())).toBe("string");
    // })

});