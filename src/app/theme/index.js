import Color from 'color';
import * as _ from 'lodash';

/******************************************************************************
* Colors
*******************************************************************************/

const baseColor = Color('#000000');

const defaultColorScheme = {
  black: baseColor.darken(0.5).string(),
  white: baseColor.negate().string(),
  gray: baseColor.lighten(0.5).string(),
  lightGray: baseColor.lighten(0.75).string(),
  lightestGray: baseColor.lighten(0.9).string(),
  primary: '#4b367c',
  secondary: '#f2f2f2',
  accent: '#170A1F',
  // others
  red: Color('#e74c3c').string(),
};

const colors = (overrides) => defaultColorScheme;

/******************************************************************************
* TYPOGRAPHY
*******************************************************************************/

const defaultFonts = 'Roboto, HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", sans-serif'

const typography = (overrides) => ({
  base: {
    fontFamily: _.get(overrides, ['base', 'fontFamily'], defaultFonts),
    fontWeight: _.get(overrides, ['base', 'fontWeight'], 300),
    color:  _.get(overrides, ['base', 'color'], defaultColorScheme.white)
  },
  branding: {
    fontFamily: _.get(overrides, ['branding', 'fontFamily'], defaultFonts),
    fontWeight: _.get(overrides, ['branding', 'fontWeight'], 500)
  },
  header: {
    fontSize: '1.75em',
    fontWeight: 400
  },
  labels: {
    fontSize: '0.8em',
    fontWeight: 500
  }
});

const spacing = 10;

/******************************************************************************
* Default Theme
*******************************************************************************/

const theme = ({ typography: typoOverrides, colors: colorOverrides }) => ({
  typography: typography(typoOverrides),
  colors: colors(colorOverrides),
  spacing,
  branding: {
    youtube: {
      color: '#cc181e'
    },
    twitch: {
      color: '#4b367c'
    }
  },
  components: {
    tooltip: {
      fontFamily: 'Roboto, sans-serif',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      fontWeight: 400,
      justifyContent: 'center',
      color: defaultColorScheme.primary
    }
  }
});

/******************************************************************************
* Application specific overrides
*******************************************************************************/

const applicationThemeOverrides = {
  typography: {
    base: {
      fontFamily: 'Roboto, sans-serif',
      color: colors.white
    },
    branding: {
      fontFamily: 'Orbitron, sans-serif',
      fontWeight: 300
    }
  }
};

export default theme(applicationThemeOverrides);
