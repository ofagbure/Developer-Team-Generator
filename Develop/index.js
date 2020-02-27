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
                addManager();
            }
            else if (response.role === "ENGINEER") {
                addEngineer();
            }
            else if (response.role === "INTERN") {
                addIntern();

            }
            else if (response.role === "I'M DONE") {
                generateHTML();
            }
        });
