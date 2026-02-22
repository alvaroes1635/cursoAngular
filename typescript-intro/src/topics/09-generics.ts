
export function whatsmyType<T>(argument: T): T {
    return argument;
};

let amIString = whatsmyType<string>('Hello World');
let myNumber = whatsmyType<number>(123);
let myBoolean = whatsmyType<boolean>(true);
let myArray = whatsmyType<number[]>([1, 2, 3, 4, 5]);


console.log(amIString.split(' '));
console.log(myNumber.toFixed());
console.log(myBoolean);
console.log(myArray.join('-'));