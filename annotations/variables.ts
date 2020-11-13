// Type annotation examples
let apples: number = 5
let speed: string = 'fast'
let nothingMuch: null = null
let hasName: boolean = false
let nothing: undefined  = undefined


// built-in objects
let now: Date = new Date()

// An Arrays type annotation
let colors: string[] = ['red', 'green', 'pink']
let myNumbers: number[] = [1, 4]


// Class Type annotations
class Car {

}
let car: Car = new Car()


// Object literal type annotation
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}


//Function Annotation
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}