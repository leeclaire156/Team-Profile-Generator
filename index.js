// Packages needed for this application, inquirer will be used to ask questions, fs will be required to write/append to files
const inquirer = require('inquirer');
const fs = require('fs');

// Checks if dist directory exists in the writeIndex() function
const dir = './dist';

// The multiple classes needed to pass the data to as parameters
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// An array of the team
const team = [];
const teamCards = [];

// ID array
const idArray = [];

// An array of questions for user input
const managersQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
        validate: function (answer) {
            // Regex note: The forward slashes denote the regular expression boundary and \d denotes a digit character
            var hasNumber = /\d/;
            // Regex note: The square brackets mean 'match anything contained within'
            var hasProperCase = /^[a-z]/;
            if (hasNumber.test(answer)) {
                return "Please change the name to letters only"
            } else if (hasProperCase.test(answer)) {
                return "Remember to capitalize the beginning of your name"
            }
            else if (!answer) {
                return "Please enter your name"
            } else {
                return true
            }
        },
    },
    {
        //Remove first condition in validation from the 'if-else' conditional statement if your employment facility's identification system includes letters
        type: "input",
        message: "What is the team manager's id?",
        name: "managerId",
        validate: function (answer) {
            var hasLetter = /\D/;
            if (hasLetter.test(answer)) {
                return "Please change the ID to numbers only"
            }
            else if (!answer) {
                return "Please enter your ID"
            } else {
                return true
            }
        },
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail",
        validate: function (answer) {
            var hasAtSymbol = /@/;
            // Regex note: The backward slash creates an escape sequence and allows for recognition of the period symbol, otherwise a period (/./) means 'Match any character'
            var hasPeriod = /\./;
            if (hasPeriod.test(answer) && hasAtSymbol.test(answer)) {
                return true
            } else if (!answer) {
                return "Please enter your email"
            }
            else {
                return "Please input the email in a proper format with the @ symbol and a period"
            }
        },
    },
    {
        //Remove first condition in validation from the 'if-else' conditional statement if your employment facility's room numbering system includes letters
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice",
        validate: function (answer) {
            var hasLetter = /\D/;
            if (hasLetter.test(answer)) {
                return "Please change the office number to numbers only"
            }
            else if (!answer) {
                return "Please enter your office number"
            } else {
                return true
            }
        }
    },
]

const newEmployee = [
    {//options should be intern, engineer, or I don't want to add any more team members
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
        name: "engineerName",
        validate: function (answer) {
            var hasNumber = /\d/;
            var hasProperCase = /^[a-z]/;
            if (hasNumber.test(answer)) {
                return "Please change the name to letters only"
            } else if (hasProperCase.test(answer)) {
                return "Remember to capitalize the beginning of your engineer's name"
            }
            else if (!answer) {
                return "Please enter your engineer's name"
            } else {
                return true
            }
        },
    },
    {
        //Change type to "input" if your employment facility's identification system includes letters
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId",
        validate: function (answer) {
            var hasLetter = /\D/;
            if (hasLetter.test(answer)) {
                return "Please change the ID to numbers only"
            } else if (!answer) {
                return "Please enter your engineer's ID"
            } else if (idArray.includes(answer)) {
                return "That ID has already been registered, check if you have the right ID"
            } else {
                return true
            }
        },
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
        validate: function (answer) {
            var hasAtSymbol = /@/;
            var hasPeriod = /\./;
            if (hasPeriod.test(answer) && hasAtSymbol.test(answer)) {
                return true
            } else if (!answer) {
                return "Please enter your engineer's email"
            }
            else {
                return "Please input the email in a proper format with the @ symbol and a period"
            }
        },
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGitHub",
        validate: function (answer) {
            if (!answer) {
                return "Please enter your engineer's GitHub username"
            }
            else {
                return true
            }
        },
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the interns's name?",
        name: "internName",
        validate: function (answer) {
            var hasNumber = /\d/;
            var hasProperCase = /^[a-z]/;
            if (hasNumber.test(answer)) {
                return "Please change the name to letters only"
            } else if (hasProperCase.test(answer)) {
                return "Remember to capitalize the beginning of your intern's name"
            }
            else if (!answer) {
                return "Please enter your intern's name"
            } else {
                return true
            }
        },
    },
    {
        //Remove first condition in validation from the 'if-else' conditional statement if your employment facility's identification system includes letters
        type: "input",
        message: "What is the intern's id?",
        name: "internId",
        validate: function (answer) {
            var hasLetter = /\D/;
            if (hasLetter.test(answer)) {
                return "Please change the ID to numbers only"
            }
            else if (!answer) {
                return "Please enter your intern's ID"
            } else if (idArray.includes(answer)) {
                return "That ID has already been registered, check if you have the right ID"
            } else {
                return true
            }
        },
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
        validate: function (answer) {
            var hasAtSymbol = /@/;
            var hasPeriod = /\./;
            if (hasPeriod.test(answer) && hasAtSymbol.test(answer)) {
                return true
            } else if (!answer) {
                return "Please enter your intern's email"
            }
            else {
                return "Please input the email in a proper format with the @ symbol and a period"
            }
        },
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool",
        validate: function (answer) {
            var hasNumber = /\d/;
            var hasProperCase = /^[a-z]/;
            if (hasNumber.test(answer)) {
                return "Please change the name to letters only"
            } else if (hasProperCase.test(answer)) {
                return "Remember to capitalize the beginning of your intern's school's name"
            }
            else if (!answer) {
                return "Please enter your intern's school's name"
            } else {
                return true
            }
        },
    },
]

function init() {
    inquirer.prompt(managersQuestions)
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
            team.push(manager);
            idArray.push(data.managerId);
        })
        .then(addEmployee)
}

init();

function addEngineer() {
    inquirer.prompt(engineerQuestions)
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
            team.push(engineer);
            idArray.push(data.engineerId);
        })
        .then(addEmployee)
}

function addIntern() {
    inquirer.prompt(internQuestions)
        .then((data) => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            team.push(intern);
            idArray.push(data.internId);
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
                console.log(team)
                generateCard();
                generateHtmlContent();
                writeIndex();
            }
        });
}

function generateCard() {
    var fifthProperty = "";
    for (var i = 0; i < team.length; i++) {
        var fifthProperty = "";
        if (`${team[i].role}` === "Manager") {
            fifthProperty = `Office Room Number: ${team[i].officeNumber}`;
        } else if (`${team[i].role}` === "Engineer") {
            fifthProperty = `GitHub Profile: <a href="https://www.github.com/${team[i].github}" target="_blank">${team[i].github}</a>`
        } else {
            fifthProperty = `School: ${team[i].school}`
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
}

function generateHtmlContent() {
    var appendedCards = teamCards.join(" ");
    var htmlContent = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    
    <body>
        <nav class="navbar bg-primary">
            <div class="container-fluid">
                <p class="navbar-brand mb-0 h1 navbar-text">My Team</p>
            </div>
        </nav>
    
        <div class="container-fluid">
            <!-- row-cols-1 lays cards on one column and row-cols-md-3 splits cards into 3 equal widths across multiple rows. also g-4 is the gap between the cards -->
            <div class="row row-cols-1 row-cols-md-3 g-4 card-container">`
        + appendedCards +
        `</div>
        </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
</body>

</html>`
    return htmlContent
}

function writeIndex() {
    // Synchronously checks if there's a directory called 'dist' and makes said directory if it doesn't exist
    if (!fs.existsSync(dir)) {
        fs.mkdirSync('dist');
    } else {
        fs.writeFileSync('./dist/index.html', generateHtmlContent(teamCards), (err) => err ? console.error(err) : console.log("index.html created!"));
    }
}

writeIndex();