// Packages needed for this application, inquirer will be used to ask questions, fs will be required to write/append to files
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const managersQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
        // TODO: add validation so that the users name must only be written with letters, code below prevents only numbers from being entered but accepts answers like John12 or 12Jane
        // validate: val => /[a-zA-Z]/g.test(val),
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice"
    },
]

const newEmployee = [
    {//options should be intern, engineer, or I dont want to add any more team members
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."],
        name: "employee"
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGitHub"
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the interns's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's id?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool"
    },
]

function init() {
    inquirer.prompt(managersQuestions)
}

init();

function addEmployee() {
    inquirer.prompt(newEmployee)
        .then((data) => {
            if (`${data.employee}` == "Engineer") {
                console.log("You selected engineer")
            } else if (`${data.employee}` == "Intern") {
                console.log("You selected intern")
            } else {
                console.log("You're done!")
                return
            }
        });
}