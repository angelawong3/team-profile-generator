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
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the manager's ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the manager's email: ",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Please enter the manager's office number: ",
  },
];

module.exports = { Manager, managerInfoArray };
