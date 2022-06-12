const { Manager } = require("../lib/Manager");

test("Add a new manager", () => {
  const manager = new Manager("Mary", 456, "mary456@yahoo.com", 789);

  expect(manager.name).toBe("Mary");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Check all methods for Manager class", () => {
  const manager = new Manager("Mary", 456, "mary456@yahoo.com", 789);

  expect(manager.getName()).toBe(manager.name);
  expect(manager.getId()).toBe(manager.id);
  expect(manager.getEmail()).toBe(manager.email);
  expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
  expect(manager.getRole()).toBe("Manager");
});
