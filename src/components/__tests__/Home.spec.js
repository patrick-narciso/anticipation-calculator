// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import Home from '@/components/Home';

test('Should be render Home Component correctly', () => {
  expect(<Home />).toMatchSnapshot();
});
