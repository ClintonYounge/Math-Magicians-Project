import operate from '../logic/operate';

describe('test operate', () => {
  test('subtract numbers', () => {
    const test = operate(10, 4, '-');
    expect(test).toBe('6');
  });

  test('plus two numbers', () => {
    const test = operate(10, 8, '+');
    expect(test).toBe('18');
  });

  test('times two numbers', () => {
    const test = operate(3, 7, 'x');
    expect(test).toBe('21');
  });

  test('divide two numbers', () => {
    const test = operate(15, 3, '÷');
    expect(test).toBe('5');
  });

  test('divide a number by 0', () => {
    const test = operate(19, 0, '÷');
    expect(test).toBe("Can't divide by 0.");
  });

  test('Module a number by 0', () => {
    const test = operate(19, 0, '%');
    expect(test).toBe("Can't find modulo as can't divide by 0.");
  });

  test('Module a number by 0', () => {
    const test = operate(8, 3, '%');
    expect(test).toBe('2');
  });
});
