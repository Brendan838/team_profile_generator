const Employee = require("./employee")

class Engineer extends Employee {
            
       constructor (name, id, email, userName){
        super(name, id, email);
        this.info = `<b>Github Username</b>: <a href='https://github.com/${userName}' target=”_blank”>${userName}</a>`
        this.type = "Engineer"
        this.github = userName
       }

       getRole(){
	return "Engineer"
	}

       getGithub(){
       return this.github
       }
}

module.exports = Engineer