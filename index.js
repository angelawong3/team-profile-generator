// inquirer package
const inquirer = require("inquirer");

// import questions
const { Manager, managerInfoArray } = require("./lib/Manager");
const { Engineer, engineerInfoArray } = require("./lib/Engineer");
const { Intern, internInfoArray } = require("./lib/Intern");

// empty array for pushing answers
const employeesArray = [];

// import writeFile and the temp HTML
const { writeFile } = require("./src/writeFile");
const { templateHTML } = require("./src/html");

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

// prompt questions for engineer
const engineerQuestions = () => {
  inquirer.prompt(engineerInfoArray).then((answers) => {
    answers = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employeesArray.push(answers);
    return employeePrompt();
  });
};

// prompt questions for intern
const internQuestions = () => {
  inquirer.prompt(internInfoArray).then((answers) => {
    answers = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employeesArray.push(answers);
    return employeePrompt();
  });
};
