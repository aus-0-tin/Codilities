//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

/*Algorithm
   - Split the input string by spaces  to obtain an array of individual words.
   - Create an empty object  to store unique words encountered while iterating through the array.
   - Start iterating through each word in the array.
   - For each word encountered, check if it exists in the object  of unique words.
   - If the word is not found in the object , add it to the object to mark it as encountered.
   - If the word is already in the object, remove it from the array of words.
   - After removing duplicate words, join the array of unique words back into a single string, separated by spaces.
   - Return the modified string with all duplicate words removed.
*/

//code 
function removeDuplicates(str) {
    
    const words = str.split(" ");

    const uniqueWords = {};

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (!uniqueWords[word]) {
      
            uniqueWords[word] = true;
        } else {
           
            words.splice(i, 1);
          
            i--;
        }
    }

    const result = words.join(" ");

    return result;
}

// Test case
const inputString = "       ";
console.log(removeDuplicates(inputString));