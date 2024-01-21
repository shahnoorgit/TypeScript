//Unions are used toapply multiple types to a variable

let user: String|Number
user=20
user="this"
//user=true this will trow error bcz we can assign only string or number to user varible

//Function using union parameter

function greet(name:string|number){

  console.log("hey",name)

}

greet(12)
greet("shahnoor")