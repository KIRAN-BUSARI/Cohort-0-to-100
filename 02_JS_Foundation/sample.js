let str1 = "kiran"
let str2 = "narik"
// console.log(str1);

// for (let i = 0; i < str1.length; i++){
//     console.log(str1[i]);
//     // return str1[i]; /* We can't return bcoz of the loop */
// }
// for (let j = 0; j < str2.length; j++){
//     console.log(str2[j]);
//     // return str2[j];
// }
// // if (str1 === str2) {
// //     console.log(true);
// // } else {
// //     console.log(false);
// // }


// let text = str1[0]
// console.log(text);
// for (let i = 0; i < str1.length; i++){
//     // console.log(str1[i]);
//     // return str1[i]; /* We can't return bcoz of the loop */


// }

// function isAnagram(str1, str2) {
//     let string0 = str1.length;
//     let string1 = str2.length;
//     let count = 0;
//     if (string0 !== string1) {
//         // return false
//         console.log("false");
//     }

//     const string2 = str1.toLowerCase();
//     const string3 = str2.toLowerCase();
//     console.log(string2);
//     console.log(string3);

//     for (let i = 0; i < str1.length; i++) {
//             // console.log(str1[i]);
//         for (let j = 0; j < str2.length; j++) {
//             // console.log(str2[j]);
//             if (string2[i] === string3[j]) {
//                 count++;
//                 // console.log(count);
//             }
//         }
//     }
//     if (count == str1.length) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isAnagram("kiran","nariq")

 function checkAnagramWithSort(str1, str2) {
   let newStr1 = str1
     .toLowerCase()
     .replace(/[^a-z]/g, "")
     .split("")
     .sort()
     .join("");
   let newStr2 = str2
     .toLowerCase()
     .replace(/[^a-z]/g, "")
     .split("")
     .sort()
     .join("");

   return newStr1 === newStr2;
 }

 const val = checkAnagramWithSort("kiran","narik!")
console.log(val);
 
export default checkAnagramWithSort;