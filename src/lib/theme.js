import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('latte_body', 'body')(props),
      color: mode('latte_text', 'text')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: 'surface',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('latte_pink', 'pink')(props),
      textUnderlineOffset: 3
    })
  },
  Button: {
    variants: {
      primary: props => ({
        color: mode('latte_body', 'body')(props),
        bg: mode('latte_teal', 'teal')(props),
        _hover: {
          bg: mode('latte_teal_hover', 'teal_hover')(props)
        }
      }),
      inversed: props => ({
        color: mode('latte_teal', 'teal')(props),
        bg: mode('latte_body', 'body')(props),
        _hover: {
          color: mode('latte_body', 'body')(props),
          bg: mode('latte_teal', 'teal')(props)
        }
      })
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  body: '#1E1E2E',
  text: '#CDD6F4',
  pink: '#F5C2E7',
  yellow: '#F9E2AF',
  teal: '#94E2D5',
  lavender: '#B4BEFE',
  surface: '#585B70',
  subtext: '#BAC2DE',
  crust: '#11111B',

  yellow_hover: '#EED49F',
  teal_hover: '#8BD5CA',

  latte_body: '#EFF1F5',
  latte_text: '#4C4F69',
  latte_pink: '#EA76CB',
  latte_yellow: '#DC8C1C',
  latte_teal: '#179299',
  latte_lavender: '#7287FD',

  latte_yellow_hover: '#E5C890',
  latte_teal_hover: '#81C8BE',
  latte_lavender_hover: '#B9BAF0'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme
