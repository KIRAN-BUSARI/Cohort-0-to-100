// Here we need to call only one function to run both the functions 
// function arithmetic(a, b) {
//     let result = a + b;
//     return result;
// }
// function print(data) {
//     console.log("The sum is "+ data);
// }

// sol 1
// const value = arithmetic(12, 2);
// print(value)

// sol 2
// by Passing the second function in the main i.e same funtion and run the code
// function arithmetic(a, b) {
//   let result = a + b;
//   print(result)
// }
// function print(data) {
//   console.log("The sum is " + data);
// }

// const value = arithmetic(1,2)


// Sol 3
/* This is the main and important method to do the calling another function in a function i.e called as "CallBacks" */
// function arithmetic(a, b, fnToCall) {
//     let result = a + b;
//     fnToCall(result)
// }
// function print(data) {
//     console.log("The sum is " + data);
// }

// const value = arithmetic(1,2,print)
/* In this method the main function will be able to call other function in it. */

/* More Complex / Jauring */
function calulateArith(a, b, airthFunction) { // 1
    const ans = airthFunction(a, b); // 3
    return ans; // 6
}

function multi(a, b) { // 4
    return a * b; // 5
}

const value = calulateArith(12, 12, multi); // 2
console.log(value); // 7

// setTimeout(, 3 * 1000);
// setInterval()