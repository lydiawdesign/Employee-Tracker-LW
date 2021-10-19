// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  connection.connect(function (err) {
      if (err) throw err;
      console.log(`Connected to the company_db database.`);
      init();
  })

);

const init = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'prompt',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add A Role',
                'View All Departments',
                'Add A Department',
                'Quit'
            ]
        }
    )
    .then((response) =>{
        switch (response.prompt){
        
        case 'View All Employees':
            viewEmployees();
            break;

        case 'Add Employee':
            addEmployee()
            break;

        case 'Update Employee Role':
            updateEmployeeRole()
            break;
        case 'View All Roles':
            viewRoles()
            break;
        case 'Add A Role':
            addRole()
            break;
        case 'View All Departments':
            viewDepartments()
            break;
        case 'Add A Department':
            addDepartment()
            break;
        case 'Quit':
            connection.end();
            break;
        };
    });

};

const viewEmployees = () => {
    console.log("you are viewing all the employees");
    
};

const addEmployee = () => {
    console.log("you are adding a new employee");

};

const updateEmployeeRole = () => {
    console.log("you are updating an employee");
};

const viewRoles = () => {
    console.log("you are viewing all the roles");
};

const addRole = () => {
    console.log("you are adding a new role");

};

const viewDepartments = () => {
    console.log("you are viewing all the departments");

};

const addDepartment = () => {
    console.log("you are adding a new department");

};
