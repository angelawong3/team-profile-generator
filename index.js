const inquirer = require("inquirer");
const writeFile = require("./src/writeFile");
const templateHTML = require("./src/html");

const { Manager, managerInfoArray } = require("./lib/Manager");
const { Engineer, engineerInfoArray } = require("./lib/Engineer");
const { Intern, internInfoArray } = require("./lib/Intern");
const employeesArray = [];
