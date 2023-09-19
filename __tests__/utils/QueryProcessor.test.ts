import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrewID', () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "jeh2"
          ));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "jonathan"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should find greatest number', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 34, 12, 93?")).toEqual("93");
    });

    test('should find square and cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 4452, 4273, 729, 4096, 512, 686, 2231?")).toEqual("729");
    });

    test('should find product', () => {
        expect(QueryProcessor("What is 34 multiplied by 35?")).toEqual("1190");
    });

    test('should find difference', () => {
        expect(QueryProcessor("What is 32 minus 66?")).toEqual("-34");
    });

    test('should find prime numbers', () => {
        expect(QueryProcessor("Which of the following numbers are primes: 43, 27, 62, 63, 65?")).toEqual("43");
        expect(QueryProcessor("Which of the following numbers are primes: 79, 77, 42, 87, 83?")).toEqual("79, 83");
    });

    // test('should do exponentiation', () => {
    //     expect(QueryProcessor("What is 53 to the power of 81?")).toEqual("43");
    // });

    test('should find prime numbers', () => {
        expect(QueryProcessor("What is 56 plus 72 plus 48?")).toEqual("176");
    });

    
});