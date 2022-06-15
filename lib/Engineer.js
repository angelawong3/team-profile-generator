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
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the engineer's name.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the engineer's ID: ",
    validate: async (answer) => {
      if (isNaN(answer)) {
        return "Please enter a valid ID.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the engineer's email: ",
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the engineer's email.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please enter the engineer's github: ",
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the engineer's github.";
      }
      return true;
    },
  },
];

module.exports = {
  Engineer,
  engineerInfoArray,
};
