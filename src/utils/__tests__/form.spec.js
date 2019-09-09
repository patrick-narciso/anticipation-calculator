import { ocurrencesCount, currencyToFloat, validateForm } from '../form';

test('should be return the number of occurrences of a char in a string correctly', () => {
  const value = '1.000.00'.split('');
  const char = '.';
  expect(ocurrencesCount(value, char)).toBe(2);
});

test('should be return 0 when the value not contains the char', () => {
  const value = '100000'.split('');
  const char = '.';
  expect(ocurrencesCount(value, char)).toBe(0);
});

test('should be return the float value from currency', () => {
  const value = 'R$ 1.000.00';
  expect(currencyToFloat(value)).toBe('1000.00');
});

test('should be return decimal value correctly when number has no more than one floating point', () => {
  const value = 'R$ 1,50';
  expect(currencyToFloat(value)).toBe('1.50');
});

test('should be return true when the form is valid', () => {
  const form = { id: 'installments', value: '' };
  expect(validateForm(form)).toBeFalsy();
});
