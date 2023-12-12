/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
/* ex: str1 = kiran str2 = narik */

  let string1 = str1.length;
  let string2 = str2.length;
  
  if (string1 !== string2) {
    return false;
  }
  
  // for (let i = 0; i < str1.length; i++){
  //   for (let j = 0; j < str2.length; j++){
  //     if (str1[i] === str2[j]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // return false;

  // for String 1
  let newStr1 = str1
    .toLowerCase() // Converts to string to lowercase
    .replace(/[^a-z]/g, "") // Replace the special characters with "" empty space
    .split("") // Splits each character with ,
    .sort() // Sorts the string in a alphabetical order
    .join(""); // Joins the splitted string to single string

  // console.log(newStr1); aiknr 
  /* Here, the kiran is arrange in alphabetical order aiknr */

  // For String 2
  let newStr2 = str2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  return newStr1 === newStr2;
}

// isAnagram("kiran","narik")
module.exports = isAnagram;
