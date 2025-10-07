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
        // Assume the number before "plus" is at index i-1, and the number after is at index i+1.
        // We use parseInt to convert the string numbers into actual numbers.
        num1 = parseInt(parts[i - 1]);
        num2 = parseInt(parts[i + 1].replace('?', '')); // Remove the '?' if present
        break;
      }
    }
    
    // c. Calculate the sum.
    const sum = num1 + num2;
    
    // d. Return the result as a string.
    return sum.toString(); 
  }

  return "";
}
