const addStrings = (numberA: string, numberB: string): string => {
  let numA: string = numberA;
  let numB: string = numberB;

  if (numA.indexOf('.') !== -1 && numB.indexOf('.') !== -1) { // both numbers have a decimal point
    let numADecimals: number = numA.length - numA.indexOf('.') - 1;
    let numBDecimals: number = numB.length - numB.indexOf('.') - 1;

    if (numADecimals > numBDecimals) {
      numB = numB.padEnd(numB.length + numADecimals - numBDecimals, '0');
    } else {
      numA = numA.padEnd(numA.length + numBDecimals - numADecimals, '0');
    }
  }

  let i: number = numA.length - 1;
  let j: number = numB.length - 1;
  let carry: number = 0;
  let result: (number | string)[] = [];

  while(i > -1 || j > -1) { // loop until both numbers have been processed
    if (numA.charAt(i) !== '.' && numB.charAt(j) !== '.') {
      let digitA: number = i > -1 ? parseInt(numA.charAt(i)) : 0;
      let digitB: number = j > -1 ? parseInt(numB.charAt(j)) : 0;

      let sum: number = digitA + digitB + carry;
      result.push(sum % 10);

      carry = Math.trunc(sum / 10);
    } else {
      result.push(".");
    }

    --i; --j;
  }

  if (carry == 1) result.push(1);

  return result.reverse().join('');
}

const addNumbers = (numbersA: string, numbersB: string): string => {
  const splitA: string[] = numbersA.split(' ');
  const splitB: string[] = numbersB.split(' ');
  let result: string = '';

  if (splitA.length != splitB.length || numbersA === "" || numbersB === "") return result;

  for (let i: number = 0; i < splitA.length; ++i) {
    result += `${addStrings(splitA[i], splitB[i])} `;
  }

  return result.substring(0, result.length - 1);
}

// const result1 = addNumbers("123 456 789", "11 22 33");
// const result2 = addNumbers("123456789012345678901 23456789", "12345678 234567890123456789012");
// const result3 = addNumbers("1234567.8901 2.345", "12.34 2345678901.2");

// console.log('result1:\t', result1, '\t', result1 === "134 478 822");
// console.log('\nresult2:\t', result2, '\t', result2 === "123456789012358024579 234567890123480245801");
// console.log('\nresult3:\t', result3, '\t', result3 === "1234580.2301 2345678903.545");

export default addNumbers;