const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "email",
        message: "What's your Email Id ?"
    },
    {
        type: "input",
        name: "github",
        message: "What's your github link ?"
    },
    {
        type: "input",
        name: "title",
        message: "Give your project tittle "
    },
    {
        type: "input",
        name: "discription",
        message: "Give short discription of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of License",
        choices: ["MIT", "APACHE2.0", "GPL", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command for install the required Dependencies",
        default: "npm-i"
    },
    {
        type: "input",
        name: "test",
        message: "What command for running test",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "what are the usage of using repo by user ?"
        
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution that user need to know about repo ?"
    },
    

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response)=>{
        console.log('Creating README file');
        writeToFile("README.md", generateMarkdown({...response}));
    })

}

// function call to initialize program
init();
