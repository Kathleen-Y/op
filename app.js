const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

//General questions
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "what is your id number?",
        name: "id"
    },
    {
        type: "input",
        message: "Please enter email.",
        name: "email"
    },
    {
        type: "list",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role"
    }
];
//variable to hold Question asked if employee is a manager
const mgrQuestions = {
    type: "input",
    message: "What is your manager’s office number?",
    name: "office"
};
//variable to hold Question asked if employee is an engineer
const egrQuestions = {
    type: "input",
    message: "What is your engineer’s github user name?",
    name: "gitHub"
};
//variable to hold Question asked if employee is an intern
const itnQuestions = {
    type: "input",
    message: "What is your school name?",
    name: "education"
};
//variable that holds Question asked if more employees need to be added
const reStart = {
    type: "list",
    message: "Would you like to add another team member?",
    choices: ["yes", "no"],
    name: "restart"
};
//Variable with array that holds all user responses
let array = [];
//asynchronus function to initiate user question propmts
async function ask() {
    const userResponse = await inquirer.prompt(questions);
    const { name, id, email, role } = userResponse;
    
    if (role === "Manager") {
        const officeNbr = await inquirer.prompt(mgrQuestions);
        const officeNumber = officeNbr.office
        const employee = new Manager(name, id, email, officeNumber);
        array.push(employee);
    
    } else if (role === "Engineer") {
       // github username question for engineer
        const git = await inquirer.prompt(egrQuestions);
        const github = git.gitHub
        const employee = new Engineer(name, id, email, github);
        
        array.push(employee);
    
    } else if (role === "Intern") {
       //school name question for intern
        const schoolName = await inquirer.prompt(itnQuestions);
        const school = schoolName.education
        const employee = new Intern(name, id, email, school);
        
        array.push(employee);
    };
    //variable restarts questions if user needs to input more employees
    const restartAns = await inquirer.prompt(reStart);
    const { restart } = restartAns;
    //conditional statement that executes restart of questions if yes
    if (restart === "yes") {
        ask();

    } else {
        //variable holds block of html generated 
        const renderInfo = render(array);
        //Writes team.html file to the outputPath directory using rendered info
        fs.writeFile(outputPath, renderInfo, function(err){
            if(err) {
                throw err;
            }
        });
    }
}
// Calls the ask() function and initiates inquire.prompt 
ask();
