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

module.exports = {
    viewDepartments, 
    viewRoles, 
    viewEmployees
}