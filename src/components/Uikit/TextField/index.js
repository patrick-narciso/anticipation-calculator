// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { css } from 'emotion';
import tokens from '../Tokens';
import Field from '../Field';

const TextField = ({ label, id, type, onChange, value }) => (
  <Field label={label} id={id}>
    <div class={wrapper}>
      <input id={id} class={fieldInput} name={id} type={type} onchange={onChange} value={value || ''} />
    </div>
  </Field>
);

const wrapper = css`
  position: relative;
`;

const fieldInput = css`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0 9px 14px;
  border: 1px solid #dde6e9;
  border-radius: 4px;
  margin: 0;
  color: #000000;
  outline: none;
  font-size: ${tokens.fontSize('xs')};
  font-family: ${tokens.get('type.regularFontFamily')};
  transition: all 0.2s ease;
`;

export default TextField;
