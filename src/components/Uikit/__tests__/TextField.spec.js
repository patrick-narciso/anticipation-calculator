// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { TextField } from '@Uikit';

test('Should be render TextField Component without extraMessage correctly', () => {
  expect(<TextField id="amount" type="text" required="required" label="Informe o valor da venda*" />).toMatchSnapshot();
});

test('Should be render TextField Component with extraMessage correctly', () => {
  expect(
    <TextField
      id="installments"
      extraMessage="Máximo de 12 parcelas"
      type="number"
      required="required"
      label="Em quantas parcelas*"
    />
  ).toMatchSnapshot();
});
