// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { Text } from '@Uikit';

test('Should be render Text Component correctly', () => {
  expect(<Text />).toMatchSnapshot();
});

test('Should be render Text Component Bold variant correctly', () => {
  expect(<Text bold />).toMatchSnapshot();
});

test('Should be render Text Component Detail variant correctly', () => {
  expect(<Text detail />).toMatchSnapshot();
});

test('Should be render Text Component Medium variant correctly', () => {
  expect(<Text medium />).toMatchSnapshot();
});

test('Should be render Text Component Reduced variant correctly', () => {
  expect(<Text reduced />).toMatchSnapshot();
});
