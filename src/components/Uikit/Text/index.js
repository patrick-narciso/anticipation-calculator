// eslint-disable-next-line no-unused-vars
import { dom } from 'isomorphic-jsx';
import { cx, css } from 'emotion';
import TextBold from './Bold';
import TextDetail from './Detail';
import TextReduced from './Reduced';
import TextMedium from './Medium';
import tokens from '../Tokens';

const Text = ({ children, medium, bold, detail, reduced }) => (
  <span
    class={cx({ [TextMedium]: medium, [TextBold]: bold, [TextDetail]: detail, [TextReduced]: reduced, [text]: true })}>
    {children}
  </span>
);

const text = css`
  font-family: ${tokens.get('type.regularFontFamily')};
  font-size: ${tokens.fontSize('base')};
  line-height: 22px;
  color: black;
`;

export default Text;
