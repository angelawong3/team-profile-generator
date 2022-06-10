const Employee = require("../lib/Employee");

test("Add a new employee", () => {
  const employee = new Employee("Tom", 123, "tom123@yahoo.com");

  expect(employee.name).toBe("Tom");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Check all methods for Employee class", () => {
  const employee = new Employee("Tom", 123, "tom123@yahoo.com");

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe("Employee");
});
