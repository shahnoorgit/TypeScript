type persons={
  name:string,
  age:number,
  gender:string
}

type employee={
  id:string,
  salary:number
}

//to combine both typeAllies we use intersection "&"

type employeedatailes= persons&employee

const mrShan:employeedatailes={
  name:"shahnoor",
  age:20,
  gender:"male",
  id:"176cs21017",
  salary:50000
}

console.log(mrShan)

//as we can see we have succesfully combined both type alies