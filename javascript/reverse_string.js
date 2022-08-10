function reverseString(str) {
  // type your code here
  let reversedStr = []


  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr.push(str[i])
  // }



  // for (let i = 0; i < str.length; i++) {
  //   reversedStr.unshift(str[i])
  // }



  // for (i in str) {
  //   reversedStr.unshift(str[i])
  // }



  Array.from(str).forEach(char => reversedStr.unshift(char))



  // for (let char of str) {
  //   reversedStr.unshift(char)
  // }


  return reversedStr.join("")
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
