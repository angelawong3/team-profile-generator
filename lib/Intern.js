const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

const internInfoArray = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the intern: ",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the intern's ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the intern's email: ",
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the intern's school: ",
  },
];

module.exports = {
  Intern,
  internInfoArray,
};
