function isSquareAndCube(n: number): boolean {
  const root = Math.round(Math.pow(n, 1/6)); // sixth root of the number
  return Math.pow(root, 6) === n; // check if the sixth power of the root is equal to the original number
}

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

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  // Answer for largest number questions
  const largestMatch = query.match(/Which of the following numbers is the largest:([\d ,]+)\?/i);
  if (largestMatch && largestMatch.length === 2) {
    const numbers = largestMatch[1].split(',').map(num => parseInt(num.trim()));
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  const squareAndCubeMatch = query.match(/Which of the following numbers is both a square and a cube:([\d ,]+)\?/i);
    if (squareAndCubeMatch && squareAndCubeMatch.length === 2) {
        const numbers = squareAndCubeMatch[1].split(',').map(num => parseInt(num.trim()));
        for (let num of numbers) {
            if (isSquareAndCube(num)) {
                return num.toString();
            }
        }
    }

    const multiplicationMatch = query.match(/what is (\d+) multiplied by (\d+)\?/i);
    if (multiplicationMatch && multiplicationMatch.length === 3) {
        const result = parseInt(multiplicationMatch[1]) * parseInt(multiplicationMatch[2]);
        return result.toString();
    }


  return "";
}
