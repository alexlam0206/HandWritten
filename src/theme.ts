import theme from '@hackclub/theme'

const handwrittenTheme = {
  ...theme,
  config: {
    ...theme.config,
    initialColorModeName: 'dark',
    useColorSchemeMediaQuery: false,
  },
  colors: {
    ...theme.colors,
    primary: '#DACC3E',
    accent: '#BC2C1A',
    background: '#121217',
    text: '#ffffff',
    modes: {
      dark: {
        background: '#121217',
        text: '#ffffff',
        primary: '#DACC3E',
        accent: '#BC2C1A',
        elevated: '#252429',
        sheet: '#252429',
        sunken: '#17171d',
        muted: '#8492a6',
      }
    }
  },
  fonts: {
    ...theme.fonts,
    heading: '"Shadows Into Light", cursive',
    body: '"Shadows Into Light", cursive',
  },
  fontSizes: [18, 24, 32, 48, 64, 96, 128, 160, 192],
  styles: {
    ...theme.styles,
    root: {
      ...theme.styles.root,
      bg: 'background',
      color: 'text',
      fontFamily: 'body',
    }
  }
}

export default handwrittenTheme
