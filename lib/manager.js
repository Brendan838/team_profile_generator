const Employee = require("./employee")

class Manager extends Employee {
            
       constructor (name, id, email, office){
        super(name, id, email);
        this.info = `<b>Office Number</b>: ${office}`
        this.type = "Manager"
        this.officeNumber = office
       }

       getRole(){
	return "Manager"
	}

}

module.exports = Manager