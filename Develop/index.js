const inquirer = require("inquirer");

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

                .then
            addManager();
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

                .then
            addEngineer();
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

                .then
            addIntern()
        }
        else if (response.role === "I'M DONE") {
            generateHTML();
        }
    });

function addManager() {
    let managers = [];
    managers.push(response)
}
function addEngineer() {
    let engineers = [];
    engineers.push(response)
}

function addIntern() {
    let interns = [];
    interns.push(response)
}

function generateHTML() {

}