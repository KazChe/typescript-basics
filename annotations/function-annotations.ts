// examples of function annotations
const add = (a:number, b:number): number => {
    return a + b
}

// type inference based on the missing return, so ts marks this as void return type
// always use function annotations
const subtract = (a: number, b: number) => {
    a - b
}

// Anonymous functions
function divide(a: number, b: number): number {
    return a / b
}

// Anonymous function assigned to a variable
const multiply = function(a: number, b: number): number {
    return a * b
}


// Void and Never
const logger = (message: string): void => {
    console.log(message)
}
// bad code but shows the intention of never
const throwError = (message: string): never => {
    throw new Error(message)
}

//Destructuring with Annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({ date, weather }: { date: Date, weather: string} ): void => {
    console.log(date, weather)
}

logWeather(todaysWeather)