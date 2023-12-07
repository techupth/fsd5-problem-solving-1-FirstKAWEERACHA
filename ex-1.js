//Exercise 1: Add Strings

const addStrings = function (num1, num2) {
  //Start coding here
  let carry = 0;
  let result = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    const digitSum = sum % 10;
    result = digitSum.toString() + result;
    i--;
    j--;
  }
  return result;
};

const result1 = addStrings("11", "123");
const result2 = addStrings("456", "77");
const result3 = addStrings("0", "0");

console.log(result1); // "134"
console.log(result2); // "533"
console.log(result3); // "0"
