
//connecting modules
const fs = require("fs")
const inquirer = require("inquirer")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
//main array of objects that will eventually be printed
const mainArray =[]



//function to write actual file
function writeToFile(data,fileName) {
fs.writeFile(`${fileName}-team.html`, data, function(err){
if(err){
console.log(err)
}
})
}
//function to create cards within file body
function createCards(array) {
var printedCards = ``
for (let i = 0; i < array.length; i++) {
let name = array[i].name
let id = array[i].id
let email = array[i].email
let title = array[i].type
let info = array[i].info


var mainTemplate = 	`<div class="card border-success" style="max-width: 18rem;">
				<h5 class="card-header bg-transparent border-success text-success card-title">${name}</h5>
			<div class="card-body text-success">
				<p class="card-text"><b>Title:</b> ${title}</p>
				<p class="card-text"><b>ID:</b> ${id}</p>
				<p class="card-text"><b>Email:</b>\n<a href='mailto:${email}'>${email}</a></p>
				<p class="card-text">${info}</p>
			</div>
			</div>\n`

printedCards += mainTemplate 
}
return printedCards
}

			



//variable to be sent through writeToFile function after printedCards is defined

//arrays of inquirer question objects
const managerQuestions = [
	{
	type: "input",
	name: "name",
	message: `What is the manager's name?`
	},
	{
	type: "input",
	name: "id",
	message: `What is the manager's id?`
	},
	{
	type: "input",
	name: "email",
	message: `What is the manager's email?`
	},
	{
	type: "input",
	name: "office",
	message: `What is the manager's office number?`
	},
	
];

const engineerQuestions = [
	{
	type: "input",
	name: "name",
	message: `What is the engineer's name?`
	},
	{
	type: "input",
	name: "id",
	message: `What is the engineer's id?`
	},
	{
	type: "input",
	name: "email",
	message: `What is the engineer's email?`
	},
	{
	type: "input",
	name: "github",
	message: `What is the engineer's Github username?`
	},

];

const internQuestions = [
	{
	type: "input",
	name: "name",
	message: `What is the intern's name?`
	},
	{
	type: "input",
	name: "id",
	message: `What is the intern's id?`
	},
	{
	type: "input",
	name: "email",
	message: `What is the intern's email?`
	},
	{
	type: "input",
	name: "school",
	message: `What is the intern's school?`
	}
]

const mainQuestion = [
	{
	type: "list",
	name: "createNew",
	message: "Which type of team member would you like to add?",
	choices: ["Engineer", "Intern", "I don’t want to add any more team members"],
	default: "None"
	}
]
initiate = function () {
inquirer.prompt(managerQuestions).then((responseObj) => {
var manager = new Manager(responseObj.name, responseObj.id, responseObj.email, responseObj.office)
mainArray.push(manager)
mainLobby = function() {
	
inquirer.prompt(mainQuestion).then((responseObj) => {

	if (responseObj.createNew == "I don’t want to add any more team members"){
	
printedCards = createCards(mainArray);
var fileBody = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
			<link rel="stylesheet" href="./assets/style.css">
			<title>My Team</title>
		</head>
		<body>
		<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4">My Current Team</h1>
		</div>
		</div>
		<div id='mainContainer'>
		${printedCards}
		</div>
		</body>

		</html>`

writeToFile(fileBody, mainArray[0].name)

}

	if (responseObj.createNew == "Engineer") {
	inquirer.prompt(engineerQuestions).then((responseObj) => {
	var engineer = new Engineer(responseObj.name, responseObj.id, responseObj.email, responseObj.github)
	mainArray.push(engineer)
	mainLobby();
	})
	}
	if (responseObj.createNew == "Intern") {
	inquirer.prompt(internQuestions).then((responseObj) => {
	var intern = new Intern(responseObj.name, responseObj.id, responseObj.email, responseObj.school)
	mainArray.push(intern)
		mainLobby();
	})
	}
})
}
mainLobby();
})
}



initiate();




