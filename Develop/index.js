const inquirer = require("inquirer");
const fs = require("fs");
const employees = [];
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
<nav class="navbar navbar-light bg-warning text-lg-center">
  <span class="navbar-brand mb-0 h1 text-lg-center">MY TEAM</span>
</nav>
    {Placeholder}
    <script src="https://kit.fontawesome.com/71a24ccb38.js" crossorigin="anonymous"></script>
</body>
</html>`;

inquirer
    .prompt([
        {
            name: "role",
            type: "list",
            message: "Would you like to add a [MANAGER], [EMPLOYEE], [INTERN], or [ARE YOU DONE]?",
            choices: ["MANAGER", "ENGINEER", "INTERN", "I'M DONE"]
        }])

    .then(function (response) {

        if (response.role === "MANAGER") {
            inquirer
                .prompt([
                    {
                        name: "managerName",
                        type: "input",
                        message: "What is the manager's first name?",
                    },
                    {
                        name: "managerID",
                        type: "input",
                        message: "What is the manager's ID number"
                    },
                    {
                        name: "managerEmail",
                        type: "input",
                        message: "What is the manager's email address?"
                    },
                    {
                        name: "office",
                        type: "input",
                        message: "What is the manager's office number"
                    }
                ])

                .then(answers => addManager(answers));
                
        }
        else if (response.role === "ENGINEER") {
            inquirer
                .prompt([
                    {
                        name: "engineerName",
                        type: "input",
                        message: "What is the engineer's first name?",
                    },
                    {
                        name: "engineerID",
                        type: "input",
                        message: "What is the engineer's ID number"
                    },
                    {
                        name: "engineerEmail",
                        type: "input",
                        message: "What is the engineer's email address?"
                    },
                    {
                        name: "github",
                        type: "input",
                        message: "What is the manager's github username?"
                    }
                ])

                .then(answers => addEngineer(answers));
        }
        else if (response.role === "INTERN") {
            inquirer
                .prompt([
                    {
                        name: "internName",
                        type: "input",
                        message: "What is the intern's first name?",
                    },
                    {
                        name: "internID",
                        type: "input",
                        message: "What is the intern's ID number"
                    },
                    {
                        name: "internEmail",
                        type: "input",
                        message: "What is the intern's email address?"
                    },
                    {
                        name: "school",
                        type: "input",
                        message: "What school does the intern go to?"
                    }
                ])

                .then(answers => addIntern(answers));
        }
        else if (response.role === "I'M DONE") {
            generateHTML();
        }
    });

function addManager(answers) {
    const manager = ` <div class="col-sm-6">
<div class="card">
    <div class="card-header">
        <p>${answers.managerName}</p>
       <p> <i class="fas fa-mug-hot">Manager</i> </p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.managerID}</li>
            <li class="list-group-item">Email: ${answers.managerEmail}</li>
            <li class="list-group-item">Office Number: ${answers.office}</li>
        </ul>
    </div>
</div>
</div>`

    employees.push(manager)
}
function addEngineer() {
    const engineer = `<div class="col-sm-6">
    <div class="card">
        <div class="card-header">
            <p>${answers.engineerName}</p>
           <p> <i class="fas fa-laptop-code">Engineer</i></p>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${answers.engineerID}</li>
                <li class="list-group-item">Email: ${answers.engineerEmail}</li>
                <li class="list-group-item">Github: ${answers.github}</li>
            </ul>
        </div>
    </div>
    </div>`
    employees.push(engineer);
}

function addIntern() {
    const intern = `<div class="col-sm-6">
<div class="card">
    <div class="card-header">
        <p>${internName}</p>
       <p><i class="fas fa-book-reader">Intern</i></p>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.internID}</li>
            <li class="list-group-item">Email: ${answers.internEmail}</li>
            <li class="list-group-item">School: ${answers.school}</li>
        </ul>
    </div>
</div>
</div>`;
    employees.push(intern);
}

function generateHTML() {
    const allEmployees = employees.join('')
    const finalHtml = html + html.replace('{Placeholder}', allEmployees)
    fs.writeFile("./index.html", finalHtml, (err) => {
        if (err) throw err;
        console.log("created our html file!");
    })
};
