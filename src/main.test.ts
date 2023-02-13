import { describe, it, expect } from '@jest/globals';
import addNumbers from "./main";

const numbers: string[][] = [
  ["123 456 789", "11 22 33", "134 478 822"],
  ["123456789012345678901 23456789", "12345678 234567890123456789012", "123456789012358024579 234567890123480245801"],
  ["1234567.8901 2.345", "12.34 2345678901.2", "1234580.2301 2345678903.545"]
];

const notSameAccountOfNumbers: string[][] = [
  ["123 456 789", "11 22", "134 478 789"],
  ["23456789", "12345678 234567890123456789012", "35802467 234567890123456789012"],
  ["1234567.8901", "", "1234567.8901"],
  ["", "12.34", "12.34"]
];

const invalidNumbers: string[][] = [
  ["abc def ghi", "11 22 33", "a1b1c d1e1f g1h1i"],
  ["1a3 4b6 7c9", "11 22 33", "1a14 4b28 71c32"]
];

describe('addNumbers', () => {
  it.each(numbers)('\"%s\" + \"%s\" = \"%s\"', (a, b, expected) => {
    expect(addNumbers(a, b)).toEqual(expected)
  });
});

describe('same account of numbers', () => {
  it.each(notSameAccountOfNumbers)('\"%s\" + \"%s\" = \"%s\"', (a, b, expected) => {
    expect(addNumbers(a, b)).not.toBe(expected)
  });
});

describe('not a number', () => {
  it.each(invalidNumbers)('\"%s\" + \"%s\" = \"%s\"', (a, b, expected) => {
    expect(addNumbers(a, b)).not.toBe(expected);
  });
});