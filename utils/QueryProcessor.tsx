export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return (
      "simony"
    );
  }


  if (query.toLowerCase().includes("name")) {
    return "simony";
  }

  if (query.toLowerCase().includes("plus")) {
    const parts = query.split(" "); 
    let num1 = 0;
    let num2 = 0;
    
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].toLowerCase() === "plus") {
        num1 = parseInt(parts[i - 1]);
        num2 = parseInt(parts[i + 1].replace('?', ''));
        break;
      }
    }
    const sum = num1 + num2;
    return sum.toString(); 
  }

  if (query.toLowerCase().includes("largest")) {
    // Find the index of the colon, which separates the question from the number list.
    const colonIndex = query.indexOf(':');

    // Check if a colon was found and the list isn't empty after it.
    if (colonIndex !== -1 && colonIndex < query.length - 1) {
      // Extract the string containing the numbers (e.g., " 44, 43, 8?").
      const numbersString = query.substring(colonIndex + 1).trim().replace('?', '');

      // Split the string by comma, convert each part to an integer, 
      // and remove any results that aren't valid numbers (NaN).
      const numbers = numbersString.split(',')
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n));

      // If we successfully extracted numbers, find the largest one.
      if (numbers.length > 0) {
        // Math.max can find the largest number in an array using the spread operator (...).
        const largest = Math.max(...numbers);
        
        // Return the result as a string, as required by the function signature.
        return largest.toString();
      }
    }
    
    // Return an empty string or handle the error if no numbers were found.
    return "";
  }

  return "";
}
