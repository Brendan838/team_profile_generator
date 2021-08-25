const Employee = require("./employee")

class Intern extends Employee {
            
       constructor (name, id, email, school){
        super(name, id, email);
        this.info = `<b>College:</b> ${school}`
        this.type = "Intern"
        this.school = school
       }

       getRole(){
	return "Intern"
	}

       getSchool(){
       return this.school
       }
}

module.exports = Intern