// Packages needed for this application, inquirer will be used to ask questions, fs will be required to write/append to files
const inquirer = require('inquirer');
const fs = require('fs');

// The multiple classes needed to pass the data to as parameters
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const makeHTML = require('./src/makeHTML');

// An array of the team
const team = [];
const teamCards = [];

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
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
            team.push(manager);
        })
        .then(addEmployee)
}

init();

function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
            team.push(engineer);
        })
        .then(addEmployee)
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then((data) => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            team.push(intern);
        })
        .then(addEmployee)
}

function addEmployee() {
    inquirer.prompt(newEmployee)
        .then((data) => {
            if (`${data.employee}` == "Engineer") {
                addEngineer();
            } else if (`${data.employee}` == "Intern") {
                addIntern();
            } else {
                console.log("You're done!")
                console.log(team);
                generateCard();
                // writeHtml(team);
            }
        });
}

function generateCard() {
    var fifthProperty = "";
    for (var i = 0; i < team.length; i++) {
        var fifthProperty = "";
        if (`${team[i].role}` === "Manager") {
            fifthProperty = `${team[i].officeNumber}`;
            console.log(fifthProperty)
        } else if (`${team[i].role}` === "Engineer") {
            fifthProperty = `Git Hub: ${team[i].github}`
            console.log(fifthProperty)
        } else {
            fifthProperty = `School: ${team[i].school}`
            console.log(fifthProperty)
        }
        var card = `<div class="col">
        <div class="card h-100">
            <div class="card-header">
                <div class="name fs-1">${team[i].name}</div>
                <div class="badge rounded-pill bg-info fs-5 text-dark">${team[i].role}</div>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item id">ID: ${team[i].id}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item">`+ fifthProperty + `</li>
                </ul>
            </div>
        </div>
    </div>`
        teamCards.push(card);
    }
    console.log(teamCards);
}


// function writeHtml() {
//     if (!fs.existsSync(DIST_DIR)) {
//         fs.mkdirSync(DIST_DIR);
//     } else {
//         // fs.writeFileSync(.dist/index.html, makeHTML(team), (err) => err ? console.error(err) : console.log("index.html created!"));
//         console.log('HTML file created in the dist folder');
//     }
// }