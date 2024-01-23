//Interfaces are most powerfull in Typescript and most important Concept to understand

// Using Interface for object
interface Car{
  brand:string,
  model:string,
  start():void //we can also add objects and functions too for structuring
}

const BMW:Car={
  brand:"BMW",
  model:"M3",
  start(){
    console.log("Car is starting....")
  }

}

// Using interface For Function

interface MathInterface{
  (x:number,y:number):Number
}

const Add : MathInterface = (x,y)=> x+y
const substract : MathInterface = (x,y)=> x-y

console.log(Add(10,20))
console.log(substract(10,20))

// Declaration Merging Interface used to modify the interface without modifying real interface

interface Laptops{
  brand:string,
  ram:string,
  model:string
}



interface Laptops{// to add more fetures in Laptops interface we use Declaration Interface
  processor:string,
  GPU:boolean

}

const Mylap:Laptops={
  brand:"HP",
  ram:"16GB",
  model:"15s",
  processor:"i3",
  GPU:true
}

