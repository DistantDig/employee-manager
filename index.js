//Packages required for this application
const inquirer = require('inquirer');

// Prompt Choices
const questions = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'first',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
];

function executeChoice(choice) {
    switch(choice) {
        case 'view all departments':
          // code block
          break;
        case 'view all roles':
          // code block
          break;
        case 'view all employees':
          // code block
          break;
        case 'add a department':
          // code block
          break;
        case 'add a role':
          // code block
          break;
        case 'add an employee':
          // code block
          break;
        case 'update an employee role':
          // code block
          break;
        default:
          // code block
      }
}

// Function to initialize
function init() {
    inquirer.prompt(questions).then((data) => {
        executeChoice(data);
    });
}

// Function call to initialize
init();