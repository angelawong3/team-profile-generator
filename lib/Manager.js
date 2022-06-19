const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

const managerInfoArray = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the manager: ",
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the manager's name.";
      }
      return true;
    },
  },

  {
    type: "input",
    name: "id",
    message: "Please enter the manager's ID: ",
    validate: async (answer) => {
      if (!answer || isNaN(answer)) {
        return "Please enter a valid ID.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the manager's email: ",
    validate: async (answer) => {
      if (!answer) {
        return "Please enter the manager's email.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the manager's office number: ",
    validate: async (answer) => {
      if (!answer || isNaN(answer)) {
        return "Please enter a valid office number.";
      }
      return true;
    },
  },
];

module.exports = {
  Manager,
  managerInfoArray,
};
