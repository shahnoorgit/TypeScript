type person={
  Name:String,
  age:number,
  email:String,
  gender?:string
}

const Alice:person={
  Name:"alice",
  age:20,
  email:"aice@gmail"
}

/*i have put ? in the gender feild that means gender feild is optional and it will
 not throw error if we dont include Gender */