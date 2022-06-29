const users = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

function loginSystem (email, password){
    if(email.includes("@")){
        if(password.length >= 6){
            let checkEmail = users.findIndex(check => check.email === email)
            let checkPassword = users.findIndex(check => check.password === password)
            if (checkEmail === checkPassword){
                return console.log("Login successful")
            }   else {
                return console.log("Incorrect e-mail or password.")
            }
        } else {
            return console.log("The password must be at least 6 characters long.")
        }
    } else {
        return console.log("Invalid E-mail.")
    }
}

loginSystem("astrodev@labenu.com", "abc123")