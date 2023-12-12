// let firstName = "Kiran"
// const age = 20
// let isMarried = false;

// console.log("Hi, My Name is " + firstName + " And My age is " + age);

// if (isMarried === true) {
//     console.log(firstName+ " is married");
// } else {
//     console.log(firstName+" Is Not Married");
// }

// // Q1.
// let ans = 0;
// for (let num = 0; num <= 100; num++){
//     ans = ans + num;
// }
// console.log(ans);
// // while (num !== 1001) {
// //     console.log(num);
// //     num += 1;
// // }

// // Q2.

// let gender = "male"

// if (gender === "male") {
//     console.log("Hello Sir");
// } else {
//     console.log("Hello Madam");
// }

// let i = 21
// console.log(++i);
// console.log(i++);



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
for (let i = 0; i < arr.length; i++){
    if (arr[i] < arr[i + 1]) {
        console.log(arr[i]+" is greater");
    }
    // if (arr[i] % 2 == 0) {
    //     console.log(arr[i]);
    // }
}