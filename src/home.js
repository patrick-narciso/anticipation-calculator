import { dom } from 'isomorphic-jsx';
import { css } from 'emotion';

const Test = () => <div class={field}>teste</div>;

const field = css`
  background: red;
`;

export default Test;
