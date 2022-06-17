const { Intern } = require("../lib/Intern");

describe("Intern", () => {
  describe("Add a new intern", () => {
    it("name should be betty, id should be number, email should be string, school should be string", () => {
      const intern = new Intern(
        "Betty",
        567,
        "betty567@yahoo.com",
        "University of Birmingham"
      );

      expect(intern.name).toBe("Betty");
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.email).toEqual(expect.any(String));
      expect(intern.school).toEqual(expect.any(String));
    });
  });

  describe("Check all methods for Intern class", () => {
    it("should create name, id, email, school and role", () => {
      const intern = new Intern(
        "Betty",
        567,
        "betty567@yahoo.com",
        "University of Birmingham"
      );

      expect(intern.getName()).toBe(intern.name);
      expect(intern.getId()).toBe(intern.id);
      expect(intern.getEmail()).toBe(intern.email);
      expect(intern.getSchool()).toBe(intern.school);
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
