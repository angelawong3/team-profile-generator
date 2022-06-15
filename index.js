const inquirer = require("inquirer");

const { Manager, managerInfoArray } = require("./lib/Manager");
const { Engineer, engineerInfoArray } = require("./lib/Engineer");
const { Intern, internInfoArray } = require("./lib/Intern");
const employeesArray = [];

const writeFile = require("./src/writeFile");
const templateHTML = require("./src/html");

// prompt questions for manager
const managerQuestions = () => {
  inquirer.prompt(managerInfoArray).then((answers) => {
    answers = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employeesArray.push(answers);
    return employeePrompt();
  });
};
