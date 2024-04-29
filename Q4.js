//Given an integer x, return true if x is a palindrome, and false otherwise.

/*Algorithm
   - Convert the integer `x` to a string representation. This makes it easier to check for palindrome properties
   - Initialize two pointers, `left` and `right`, to the beginning and end of the string, respectively
   - Start a loop that continues until `left` is less than or equal to `right`
   - At each iteration, compare the characters at positions `left` and `right` in the string
   - If the characters don't match, return `false`, hence, the integer is not a palindrome
   - Move the `left` pointer to the right  and the `right` pointer to the left  to continue checking characters
   - If the loop completes without finding any mismatched characters, return `true`, indicating that the integer is a palindrome
*/

//code 
function isPalindrome(x) {
    
    const str = String(x);
    
    let left = 0;
    let right = str.length - 1;
  
    while (left <= right) {
     
        if (str[left] !== str[right]) {
          
            return false;
        }
     
        left++;
        right--;
    }
    
    return true;
}
console.log(isPalindrome(333));
