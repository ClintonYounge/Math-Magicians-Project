import operate from '../logic/operate';

describe('test operate', () => {
  it('subtract numbers', () => {
    const test = operate(10, 4, '-');
    expect(test).toMatchSnapshot('6');
  });

  it('plus two numbers', () => {
    const test = operate(10, 8, '+');
    expect(test).toMatchSnapshot('18');
  });

  it('times two numbers', () => {
    const test = operate(3, 7, 'x');
    expect(test).toMatchSnapshot('21');
  });

  it('divide two numbers', () => {
    const test = operate(15, 3, '÷');
    expect(test).toMatchSnapshot('5');
  });

  it('divide a number by 0', () => {
    const test = operate(19, 0, '÷');
    expect(test).toMatchSnapshot("Can't divide by 0.");
  });

  it('Module a number by 0', () => {
    const test = operate(19, 0, '%');
    expect(test).toMatchSnapshot("Can't find modulo as can't divide by 0.");
  });

  it('Module a number by 0', () => {
    const test = operate(8, 3, '%');
    expect(test).toMatchSnapshot('2');
  });
});
