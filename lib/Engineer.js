const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

const engineerInfoArray = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the engineer: ",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the engineer's Id: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the engineer's email: ",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the engineer's github: ",
  },
];

module.exports = { Engineer, engineerInfoArray };
