const inquirer = require("inquirer");

var questions = [
        {
            name: "toDo",
            message: "What would you like to do",
            type: "list",
            choices: [
                "View all Employees",
                "View all Employees by Department",
                "View all Employees by Roles",
                "Add an Employee",
                "Add a Department",
                "Add a Role",
                "Update an Employee's Role"]
        },    
        {
            name: "employeeByDept",
            message: "Please select department",
            type: "list",
            choices: [
                "Sales",
                "Marketing",
                "Tech",
                "HR"],
            when: (answers) => answers.toDo === "View all Employees by Department"    
        },
        {
            name: "employeeByRoles",
            message: "Please select roles",
            type: "list",
            choices: [
                "Manager",
                "Associate",
                "Engineer",
                "Intern"
            ],
            when: (answers) => answers.toDo === "View all Employees by Roles"    
        },
        {
            name: "addEmployeeFName",
            message: "Enter employee's first name",
            type: "input",
            when: (answers) => answers.toDo === "Add an Employee"    
        },
        {
            name: "addEmployeeLName",
            message: "Enter employee's last name",
            type: "input",
            when: (answers) => answers.toDo === "Add an Employee"    
        },
        {
            name: "addEmployeeRole",
            message: "Select employee's title",
            type: "list",
            choices: [
                "Manager",
                "Associate",
                "Engineer",
                "Intern"
            ],
            when: (answers) => answers.toDo === "Add an Employee"    
        },
        {
            name: "addEmployeeManager",
            message: "Select employee's manager",
            type: "list",
            choices: [
                "Manager 1", "Manager 2", "Manager 3"
            ],
            when: (answers) => answers.toDo === "Add an Employee"    
        } ,
        {
            name: "addDept",
            message: "Enter new Department name",
            type: "input",
            when: (answers) => answers.toDo === "Add a Department"    
        },
        {
            name: "addRole",
            message: "Enter role",
            type: "input",
            when: (answers) => answers.toDo === "Add a Role"    

        },
        {
            name: "addRoleSalary",
            message: "Enter role's salary",
            type: "input",
            when: (answers) => answers.toDo === "Add a Role"    
        },
        {
            name: "updateEmployeeRole",
            message: "Which employee do you want to update the role for",
            type: "list",
            choices: [
                "Susie Last",
                "Kevin Last",
                "Sandra First",
                "Jose Last"
            ],
            when: (answers) => answers.toDo === "Update an Employee's Role"    
        },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
});