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
    const colonIndex = query.indexOf(':');
    if (colonIndex !== -1 && colonIndex < query.length - 1) {
      const numbersString = query.substring(colonIndex + 1).trim().replace('?', '');
      const numbers = numbersString.split(',')
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n));
      if (numbers.length > 0) {
        const largest = Math.max(...numbers);
        return largest.toString();
      }
    }
    return "";
  }

  return "";
}
