const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Add a new employee", () => {
    it("name should be tom, id should be number, email should be string", () => {
      const employee = new Employee("Tom", 123, "tom123@yahoo.com");

      expect(employee.name).toBe("Tom");
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });

  describe("Check all methods for Employee class", () => {
    it("should create name, id, email and role", () => {
      const employee = new Employee("Tom", 123, "tom123@yahoo.com");

      expect(employee.getName()).toBe(employee.name);
      expect(employee.getId()).toBe(employee.id);
      expect(employee.getEmail()).toBe(employee.email);
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
