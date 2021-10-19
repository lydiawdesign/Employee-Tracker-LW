// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')
require('dotenv').config()

const PORT = process.env.PORT || 33070;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the company_db database.`)
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
        const option = response.prompt
        
        if(option === 'View All Employees'){
            viewEmployees()

        } else if(option === 'Add Employee'){
            addEmployee()

        } else if(option === 'Update Employee Role'){
            updateEmployeeRole()

        } else if(option === 'View All Roles'){
            viewRoles()

        } else if(option === 'Add A Role'){
            addRole()

        } else if(option === 'View All Departments'){
            viewDepartments()

        } else if(option === 'Add A Department'){
            addDepartment()

        }
    });

}