// let a: Number = 10;
// a = "kiran";
// console.log(a);

function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

greet("prathu")

function sum(a: number, b: number): number { // It is good to explicitly specify the return type
    // console.log(a + b); // This will throw an error 
    // Need to return number only
    return a + b

}

sum(1, 2)

/* Type inference is to automatically infer the type of the variable based on the value assigned to it*/


/* interface  */
interface User {
    firstName: string,
    age: number
}
function isLegal(user: User) {
    // const { age } = user;
    if (user.age > 18) {
        console.log("User is Legal");
        return true
    } else {
        console.log("User is Illegal");
        return false
    }
}

isLegal({
    firstName: "kiran",
    age: 20
})

