const Engineer = require('../lib/Engineer');

// describe() houses the testing units
// Each unit invoked through it("name", ()=>{testing methods}) or test("name", ()=>{testing methods})
describe('Engineer', () => {

    // Add change 2nd value (id) to "rr18152" if you are using a letter AND number based identification system
    const engineer = new Engineer("Robert", 18152, "rob18152@outlook.com", "robbindata");

    // Test set 1: names
    it("should set the name as 'Robert'", () => {
        expect(engineer.name).toBe("Robert");
    })

    it("should return name", () => {
        expect(engineer.getName()).toBe("Robert");
    })

    // // Test set 2a: ID - number only based ID system
    it("should set the ID as 18152", () => {
        expect(engineer.id).toBe(18152);
        expect(typeof (engineer.id)).toBe("number");
    })

    it("should return id", () => {
        expect(engineer.getId()).toBe(18152);
        expect(typeof (engineer.getId())).toBe("number");
    })

    // // Test set 2b: ID - with non-capitalized letters based ID system
    // it("should set the ID as 'rr18152'", () => {
    //     expect(engineer.id).toBe("rr18152");
    //     expect(typeof (engineer.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(engineer.getId()).toBe("rr18152");
    //     expect(typeof (engineer.getId())).toBe("string");
    // })

    // // Test set 2c: ID - with capitalized letters based ID system
    // it("should set the ID as 'RR18152'", () => {
    //     expect(engineer.id).toBe("RR18152");
    //     expect(typeof (engineer.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(engineer.getId()).toBe("RR18152");
    //     expect(typeof (engineer.getId())).toBe("string");
    // })

    // Test set 3: Email
    it("should set an email", () => {
        expect(engineer.email).toBe("rob18152@outlook.com");
        expect(engineer.email).toMatch(/@/);
        expect(engineer.email).toMatch(".")
    })


    it("should return email", () => {
        expect(engineer.getEmail()).toBe("rob18152@outlook.com");
        expect(engineer.getEmail()).toMatch(/@/);
        expect(engineer.getEmail()).toMatch(".")
    })


    // Test set 4: role
    it("should set role as 'Engineer'", () => {
        expect(engineer.role).toBe("Engineer");
    })

    it("should return role", () => {
        expect(engineer.getRole()).toBe("Engineer");
    })

    // Test set 5: Git Hub
    it("should set Git Hub username", () => {
        expect(engineer.github).toBe("robbindata");
    })

    it("should return Git Hub username", () => {
        expect(engineer.getGitHub()).toBe("robbindata");
    })
});