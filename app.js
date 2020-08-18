const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const RESULT_DIR = path.resolve(__dirname, "result");
const resultPath = path.join(RESULT_DIR, "result.html");

const render = require("./lib/htmlRenderer");
const questions = [
    {
        type: "input",
        message: "Please enter your name.",
        name: "name"
    },
    {
        type: "input",
        message: "Please enter your ID number.",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email"
    },
    {
        type: "list",
        message: "Please select your role.",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    }
];

const managerQuestions = {
    type: "input",
    message: "Please enter manager office number.",
    name: "office"
};
const engineerQuestions = {
    type: "input",
    message: "Please enter Github username.",
    name: "gitHub"
};
const internQuestions = {
    type: "input",
    message: "Please enter school affiliation.",
    name: "school"
};
const restartPrompts = {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["NO", "YES"],
    name: "restart"
};
 
let array = [];
async function ask() {

    const userResponse = await inquirer.prompt(questions);
    const { name, id, email, role } = userResponse;

    if (role === "Manager") {
        const officeInput = await inquirer.prompt(managerQuestions);
        const officeNumber = officeInput.office
        const employee = new Manager(name, id, email, officeNumber);
        array.push(employee);
     
    } else if (role === "Engineer") {
        const gitInput = await inquirer.prompt(engineerQuestions);
        const github = gitInput.gitHub
        const employee = new Engineer(name, id, email, github);
        array.push(employee);
  
    } else if (role === "Intern") {
        const schoolInput = await inquirer.prompt(internQuestions);
        const school = schoolInput.school
        const employee = new Intern(name, id, email, school);
        array.push(employee);
    };

    const restartInput = await inquirer.prompt(restartPrompts);
    const { restart } = restartInput;
    if (restart === "YES") {
        ask();
    } else {
        const renderInfo = render(array);

        fs.writeFile(resultPath, renderInfo, function(err){
            if(err) 
                throw err;
        });
    }
}
 
ask();
