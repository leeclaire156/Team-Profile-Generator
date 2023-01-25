const Intern = require('../lib/Intern');

// describe() houses the testing units
// Each unit invoked through it("name", ()=>{testing methods}) or test("name", ()=>{testing methods})
describe('Intern', () => {

    // Add change 2nd value (id) to "rr18152" if you are using a letter AND number based identification system
    const intern = new Intern("Ya Ying Li", 25125, "ying.25125@buckeyemail.osu.edu", "Ohio State University");

    // Test set 1: names
    it("should set the name as 'Ya Ying Li'", () => {
        expect(intern.name).toBe("Ya Ying Li");
    })

    it("should return name", () => {
        expect(intern.getName()).toBe("Ya Ying Li");
    })

    // // Test set 2a: ID - number only based ID system
    it("should set the ID as 25125", () => {
        expect(intern.id).toBe(25125);
        expect(typeof (intern.id)).toBe("number");
    })

    it("should return id", () => {
        expect(intern.getId()).toBe(25125);
        expect(typeof (intern.getId())).toBe("number");
    })

    // // Test set 2b: ID - with non-capitalized letters based ID system
    // it("should set the ID as 'yy25125'", () => {
    //     expect(intern.id).toBe("yy25125");
    //     expect(typeof (intern.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(intern.getId()).toBe("yy25125");
    //     expect(typeof (intern.getId())).toBe("string");
    // })

    // // Test set 2c: ID - with capitalized letters based ID system
    // it("should set the ID as 'YY25125'", () => {
    //     expect(intern.id).toBe("YY25125");
    //     expect(typeof (intern.id)).toBe("string");
    // })

    // it("should return id", () => {
    //     expect(intern.getId()).toBe("YY25125");
    //     expect(typeof (intern.getId())).toBe("string");
    // })

    // Test set 3: Email
    it("should set an email", () => {
        expect(intern.email).toBe("ying.25125@buckeyemail.osu.edu");
        expect(intern.email).toMatch(/@/);
        expect(intern.email).toMatch(".")
    })


    it("should return email", () => {
        expect(intern.getEmail()).toBe("ying.25125@buckeyemail.osu.edu");
        expect(intern.getEmail()).toMatch(/@/);
        expect(intern.getEmail()).toMatch(".")
    })


    // Test set 4: role
    it("should set role as 'Intern'", () => {
        expect(intern.role).toBe("Intern");
    })

    it("should return role", () => {
        expect(intern.getRole()).toBe("Intern");
    })

    // Test set 5: School
    it("should set school", () => {
        expect(intern.school).toBe("Ohio State University");
    })

    it("should return school", () => {
        expect(intern.getSchool()).toBe("Ohio State University");
    })
});