const checkRegex = (number: string): boolean => {
  const regexp = /^[0-9]*\.?[0-9]*$/;
  return regexp.test(number);
}

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

  if (!checkRegex(numA) || !checkRegex(numB)) return '';

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

  return result.trim();
}

export default addNumbers;