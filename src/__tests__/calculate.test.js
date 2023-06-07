import calculate from '../logic/calculate';

describe('calculate', () => {
  test('should return an object with total: 0, next: null, and operation: null when buttonName is AC', () => {
    const result = calculate({ total: 100, next: 50, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('should return an object with updated next value when buttonName is a number', () => {
    const result = calculate({ total: 100, next: 50, operation: '+' }, '2');
    expect(result).toEqual({ total: 100, next: '502', operation: '+' });
  });

  test('should return an object with updated next value when buttonName is .', () => {
    const result = calculate({ total: 100, next: '50', operation: '+' }, '.');
    expect(result).toEqual({ total: 100, next: '50.', operation: '+' });
  });

  test('should return an object with updated next value when buttonName is +/-', () => {
    const result = calculate({ total: 100, next: '50', operation: '+' }, '+/-');
    expect(result).toEqual({ total: 100, next: '-50', operation: '+' });
  });
});
