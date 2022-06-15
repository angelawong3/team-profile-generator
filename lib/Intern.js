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
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the intern's name.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the intern's ID: ",
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
    message: "Please enter the intern's email: ",
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the intern's email.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "school",
    message: "Please enter the intern's school: ",
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the intern's school.";
      }
      return true;
    },
  },
];

module.exports = {
  Intern,
  internInfoArray,
};
