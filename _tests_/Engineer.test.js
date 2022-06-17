const { Engineer } = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Add a new engineer", () => {
    it("name should be peter, id should be number, email should be string, github should be string", () => {
      const engineer = new Engineer(
        "Peter",
        234,
        "peter234@yahoo.com",
        "peter234"
      );

      expect(engineer.name).toBe("Peter");
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });
  });

  describe("Check all methods for Engineer class", () => {
    it("should create name, id, email, github and role", () => {
      const engineer = new Engineer(
        "Peter",
        234,
        "peter234@yahoo.com",
        "peter234"
      );

      expect(engineer.getName()).toBe(engineer.name);
      expect(engineer.getId()).toBe(engineer.id);
      expect(engineer.getEmail()).toBe(engineer.email);
      expect(engineer.getGithub()).toBe(engineer.github);
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
