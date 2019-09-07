import DesignSystem from 'design-system-utils';

const designTokens = {
  type: {
    regularFontFamily: 'Source Sans Pro, sans-serif',

    sizes: {
      xxs: '11px',
      xs: '14px',
      s: '16px',
      base: '18px',
      l: '24px',
      xl: '48px',
    },
  },

  colors: {
    colorPalette: {
      grey: {
        light: '#CECECE',
        dark: '#F2F2F2',
      },
      blue: {
        light: '#5D9CEC',
        dark: '#3D75BB',
      },
    },

    brand: {
      black: '#656565',
      white: '#FFFFFF',
    },
  },

  breakpoints: {
    sm: '768px',
    xs: '415px',
    xxs: '320px',
  },
};

export default new DesignSystem(designTokens, {
  fontSizeUnit: 'rem',
});
