//Packages required for this application
const inquirer = require('inquirer');
const queries = require('./utils/sqlQueries');

// Prompt Choices
const questions = [
    // Inital question
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'first',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
    // Questions for adding a department
    {
        type: 'input',
        message: 'What is the department name?',
        name: 'addDepartmentName',
        when: (questions) => questions.first == 'add a department'
    },
    // Questions for adding a role
    {
        type: 'input',
        message: 'What is the role title?',
        name: 'addRoleTitle',
        when: (questions) => questions.first == 'add a role'
    },
    {
        type: 'input',
        message: 'What is the role salary?',
        name: 'addRoleSalary',
        when: (questions) => questions.first == 'add a role'
    },
    {
        type: 'input',
        message: 'What is the department id of the role?',
        name: 'addRoleDepartment',
        when: (questions) => questions.first == 'add a role'
    },
    // Questions for adding a employee
    {
        type: 'input',
        message: 'What is the first name of the employee?',
        name: 'addEmployeeFirst',
        when: (questions) => questions.first == 'add an employee'
    },
    {
        type: 'input',
        message: 'What is the last name of the employee?',
        name: 'addEmployeeLast',
        when: (questions) => questions.first == 'add an employee'
    },
    {
        type: 'input',
        message: 'What is the role id of the employee?',
        name: 'addEmployeeRole',
        when: (questions) => questions.first == 'add an employee'
    },
    {
        type: 'input',
        message: 'What is the manager id of the employee?',
        name: 'addEmployeeManager',
        when: (questions) => questions.first == 'add an employee'
    },
    // Questions for updating a department
    {
        type: 'input',
        message: 'What is the id of the employee you would like to update?',
        name: 'updateEmployeeId',
        when: (questions) => questions.first == 'update an employee role'
    },
    {
        type: 'input',
        message: 'What is the new role id of the employee?',
        name: 'updateEmployeeRole',
        when: (questions) => questions.first == 'update an employee role'
    }
];

// Function to call sql queries
function executeChoice(choice) {
    switch(choice.first) {
        case 'view all departments':
          queries.viewDepartments();
          break;
        case 'view all roles':
          queries.viewRoles();
          break;
        case 'view all employees':
          queries.viewEmployees();
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
    return init();
}

// Function to initialize
function init() {
    inquirer.prompt(questions).then((data) => {
        executeChoice(data);
    });
}

// Function call to initialize
init();