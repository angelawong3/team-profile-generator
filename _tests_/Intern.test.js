const { Intern } = require("../lib/Intern");

test("Add a new intern", () => {
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

test("Check all methods for Intern class", () => {
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
