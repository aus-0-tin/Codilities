/*Write a loop, that prints all three-digits numbers in decreasing order 
(999, 998, 997, ..., 101, 100).*/

/*Algorithm
   - Initialize a variable `number` to 999.
   - Start a loop that iterates while `number` is greater than or equal to 100.
   - Within each iteration of the loop, print the value of `number`.
   - After printing the current number, decrement `number` by 1.
   - Once the loop reaches a value less than 100, exit the loop.
   - End the program after printing all three-digit numbers in decreasing order.
*/

//code 
function printThreeDigitNumbers() {
    let number = 999;

    while (number >= 100) {
        console.log(number);

        number--;
    }
}

printThreeDigitNumbers();