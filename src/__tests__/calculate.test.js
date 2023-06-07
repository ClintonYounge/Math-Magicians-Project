import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an object with total: 0, next: null, and operation: null when buttonName is AC', () => {
    const result = calculate({ total: 100, next: 50, operation: '+' }, 'AC');
    expect(result).toMatchSnapshot({ total: null, next: null, operation: null }, `
Object {
  "next": null,
  "operation": null,
  "total": null,
}
`);
  });

  it('should return an object with updated next value when buttonName is a number', () => {
    const result = calculate({ total: 100, next: 50, operation: '+' }, '2');
    expect(result).toMatchSnapshot({ total: 100, next: '502', operation: '+' }, `
Object {
  "next": "502",
  "operation": "+",
  "total": 100,
}
`);
  });

  it('should return an object with updated next value when buttonName is .', () => {
    const result = calculate({ total: 100, next: '50', operation: '+' }, '.');
    expect(result).toMatchSnapshot({ total: 100, next: '50.', operation: '+' }, `
Object {
  "next": "50.",
  "operation": "+",
  "total": 100,
}
`);
  });

  it('should return an object with updated next value when buttonName is +/-', () => {
    const result = calculate({ total: 100, next: '50', operation: '+' }, '+/-');
    expect(result).toMatchSnapshot({ total: 100, next: '-50', operation: '+' }, `
Object {
  "next": "-50",
  "operation": "+",
  "total": 100,
}
`);
  });
});
