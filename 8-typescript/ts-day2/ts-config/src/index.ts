// Utality

// Partial - optional
// interface Person {
//     name: string,
//     age: number
// }

// const shin: Partial<Person> = {
//     name: "Shinn",
// }

// Required - required
// interface Person {
//     name?: string,
//     age?: number
// }

// const shin: Required<Person> = {
//     name: "Shinn",
//     age: 20
// }

// Record - define an object with a specify key type and value type

// const person: Record<string, string | number> = {
//     name: "terry",
//     age: 20
// 


// Omit - remove keys from an object type

// interface Person {
//     name: string,
//     age: number
// }

// const terry: Omit<Person, 'age'> = {
//     name: "Terry"
// }


// Pick - removes all but the specified keys from an object type


// interface Person {
//     name: string,
//     age: number
// }

// const terry: Pick<Person, 'name'> = {
//     name: "Terry"
// }


// Readonly

// 

