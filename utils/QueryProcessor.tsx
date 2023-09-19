function isSquareAndCube(n: number): boolean {
  const root = Math.round(Math.pow(n, 1/6)); // sixth root of the number
  return Math.pow(root, 6) === n; // check if the sixth power of the root is equal to the original number
}

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
  }
  return true;
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

    const subtractionMatch = query.match(/what is (\d+) minus (\d+)\?/i);
    if (subtractionMatch && subtractionMatch.length === 3) {
        const result = parseInt(subtractionMatch[1]) - parseInt(subtractionMatch[2]);
        return result.toString();
    }

    const primeMatch = query.match(/which of the following numbers are primes:([\d ,]+)\?/i);
    if (primeMatch && primeMatch.length === 2) {
        const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim()));
        const primes = numbers.filter(isPrime);
        return primes.join(", ");
    }


    const powerMatch = query.match(/what is (\d+) to the power of (\d+)\?/i);
    if (powerMatch && powerMatch.length === 3) {
        // Compute the result. Keep in mind that this might return an approximation or 
        // might even throw an error for very large computations.
        const result = Math.pow(parseInt(powerMatch[1]), parseInt(powerMatch[2]));
        return result.toString();
    }


    const additionMatch = query.match(/what is ((\d+ plus )+\d+)\?/i);
    if (additionMatch && additionMatch.length >= 2) {
        const numbers = additionMatch[1].split(' plus ').map(num => parseInt(num.trim()));
        const result = numbers.reduce((acc, curr) => acc + curr, 0);
        return result.toString();
    }

  return "";
}
