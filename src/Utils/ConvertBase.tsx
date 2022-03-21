// ---------------- FILE: src/Utils/ConvertBase.tsx  -------------------------
// Language: typescript
// Function: convertBase
// Description: Convert a number from one base to another
// Input: Value to convert, base to convert from, base to convert to
// Output: Converted value
// Example: convertBase("ff", 16, 2) // returns "11111111"
// Example: convertBase("ff", 16, 10) // returns "255"
// Made by: Ismail Sacic

const convertBase = (value: string, from_base: number, to_base: number) => {

    // The digits we use in our code to extend the 0-9 digit sytem for example A = 10 and Z = 35
    const DIGITS: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    // Input value as an array
    let value_array: Array<string> = value.toUpperCase().split('');
    
    // The result of the conversion to a base 10 number
    let result_desc: number = 0;
  
    // The result of the conversion to a base {to_base} number
    let result: string = '';
  
    // return null if base is not between 2 and 36
    if (from_base < 2 || from_base > 36 || to_base < 2 || to_base > 36) {
      throw new Error('Base must be between 2 and 36');
    }
   
    // Loop through the input value
    for(let i = 0; i < value_array.length; i++) {
      // Get the index of the current digit
      let current_digit = DIGITS.indexOf(value_array[i]);
  
      // If the current digit is not found in the digit system return null
      if (current_digit >= from_base) {
        throw new Error('Invalid digit used in input');
      }
      // Add the current digit to the result
      result_desc += current_digit * Math.pow(from_base, value_array.length - i - 1);
    }
  
  
    // Loop through the result and convert to the new base
    while (result_desc > 0) {
      // Get the remainder of the result
      let remainder = result_desc % to_base;
  
      // Add the remainder to the result
      result = DIGITS[remainder] + result;
      
      // Remove the remainder from the result
      result_desc = Math.floor(result_desc / to_base);
    }
  
    return result
  }
  
export default convertBase;