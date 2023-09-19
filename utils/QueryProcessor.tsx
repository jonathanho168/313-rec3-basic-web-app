export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "jeh2"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "jonathan"
    );
  }

  const additionMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (additionMatch && additionMatch.length === 3) {
    const result = parseInt(additionMatch[1]) + parseInt(additionMatch[2]);
    return result.toString();
  }

  // Answer for largest number questions
  const largestMatch = query.match(/Which of the following numbers is the largest:([\d ,]+)\?/i);
  if (largestMatch && largestMatch.length === 2) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim()));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  return "";
}
