// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require("console.table");
require('dotenv').config();

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'company_db',
  }
);

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to the company_db database.");
    init();
});

const init = () => {
    inquirer.prompt(
        {
            name: 'prompts',
            type: 'list',
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
    .then((response) => {
        switch (response.prompts){
        
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
    connection.query("SELECT * FROM employees", (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

const addEmployee = () => {
    console.log("you are adding a new employee");

    // to get the roles choices for inquirer below
    const rolesArray = []
    const rolesQuery = `SELECT * FROM roles`
    connection.query(rolesQuery, (err, rows) => {
        if(err) throw err
        for(let i = 0; i<rows.length; i++){
            rolesArray.push(rows[i].title)
        }
        return rolesArray
    })

    inquirer.prompt([
     
        {
            name: "first_name",
            type: "input",
            message: "What is the first name of the employee?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the last name of the employee?"
        },
        {
            name: "role_id",
            type: "list",
            message: "What is the role id for the employee?",
            choices: rolesArray,
        },
        {
            name: "manager_id",
            type: "number",
            message: "What is the manager id for the employee?"
        },
    ]).then (function (response) {
        connection.query("INSERT INTO employees SET (?)", 
            {
                first_name: response.first_name, 
                last_name: response.last_name, 
                role_id: response.role_id, 
                manager_id: response.manager_id
            },
            (err) => {
            if (err) throw err;
            console.log("new employee was added!")
            init();
        })
    });
};

const updateEmployeeRole = () => {
    console.log("you are updating an employee");
};

const viewRoles = () => {
    console.log("you are viewing all the roles");
    connection.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

const addRole = () => {
    console.log("you are adding a new role");
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of the role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the role?"
        },
        {
            name: "department_id",
            type: "input",
            message: "What is the department id of the role?"
        },
    ]).then (function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?)",[response.title, response.salary, response.department_id],(err) => {
            if (err) throw err;
            console.log("new role was added!")
            init();
        })
    });
};

const viewDepartments = () => {
    console.log("you are viewing all the departments");
    connection.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

const addDepartment = () => {
    console.log("you are adding a new department");
    inquirer.prompt(
        {
            name: "department_name",
            type: "input",
            message: "Please enter the new department name",
        }
    ).then (response => {
        connection.query("INSERT INTO departments (department_name) VALUES (?)", response.department_name, (err) => {
            if (err) throw err;
            console.log("department was added!")
            init();
        });
    });
}
