// examples of function annotations
const add = (a:number, b:number): number => {
    return a + b
}

// type inference based on the missing return, so ts marks this as void return type
// always use function annotations
const subtract = (a: number, b: number) => {
    a - b
}