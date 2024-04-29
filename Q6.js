//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

/*Algorithm
   - Create an empty array to store all the integers from the two-dimensional array
   - Iterate through each row of the two-dimensional array
   - For each row, iterate through each element and push it to the empty array created
   - Use any sorting algorithm to sort the flattened array in ascending order
 */

//code
function flattenAndSort(arr) {
    const flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]);
        }
    }

    flattenedArray.sort((a, b) => a - b);

    return flattenedArray;
}

