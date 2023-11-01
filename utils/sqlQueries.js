// Dependancies
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to the database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Password',
      database: 'Employees_db'
    },
    console.log(`Connected to the Employees_db database.`)
);

// Functions to veiw tables
function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        return console.log(results);
    });
}

function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
    });
}

// Function to add a department
function addDepartment(name) {
    db.query('INSERT INTO department (department_name) VALUES (?)', name, function (err, results) {
        console.log('Department added');
    });
}

// Function to add a role
function addRole(tite, salary, departmentId) {
    db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [tite, salary, departmentId], function (err, results) {
        console.log('Role added');
    });
}

// Function to add a employee
function addEmployee(firstName, LastName, roleId, managerId) {
    db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, LastName, roleId, managerId], function (err, results) {
        console.log('Employee add');
    });
}

// Function to update role for an employee
function updateEmployee(roleId, employeeId) {
    db.query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId], function (err, results) {
        console.log('Employee add');
    });
}

module.exports = {
    viewDepartments, 
    viewRoles, 
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
}