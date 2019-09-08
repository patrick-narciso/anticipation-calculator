// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { cx, css } from 'emotion';
import tokens from '../Tokens';

const Field = ({ id, children, label }) => (
  <div class={cx(wrapper)}>
    {label && (
      <label class={labelInput} for={id}>
        {label}
      </label>
    )}

    <div class={inputWrapper}>{children}</div>
  </div>
);

const wrapper = css`
  margin-bottom: 25px;
  margin-right: 20px;
`;

const labelInput = css`
  display: inline-block;
  margin-bottom: 6px;
  font-family: ${tokens.get('type.regularFontFamily')};
  font-size: ${tokens.fontSize('xs')};
  color: ${tokens.brand('black')};
  line-height: 18px;
`;

const inputWrapper = css`
  position: relative;
`;

export default Field;
