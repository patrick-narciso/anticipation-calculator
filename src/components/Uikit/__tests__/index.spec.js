import tokens from '../Tokens';

test('Ensures no design system changes', () => {
  expect(tokens).toMatchSnapshot();
});
