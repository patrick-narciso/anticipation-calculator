import { render } from '@/components/Route';
import { injectGlobal } from 'emotion';
import tokens from '@Uikit/Tokens';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${tokens.color('grey', 'dark')};
    font-family: ${tokens.get('type.regularFontFamily')};
  }
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');
`;

render();
