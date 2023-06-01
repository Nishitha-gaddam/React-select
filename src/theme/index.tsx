/* eslint-disable @typescript-eslint/no-empty-interface */
//import react from react
import React from 'react'
//import createtheme from mui

import { createTheme } from '@mui/material/styles'

//Generate interfaces in the @mui/material/styles and @mui/material/Typography modules to extend the theme.

declare module '@mui/material/styles' {
  //Let the EmphasisColors interface define three color properties for text emphasis: highEmphasis, mediumEmphasis, and lowEmphasis optional

  interface EmphasisColors {
    highEmphasis?: string
    mediumEmphasis?: string
    lowEmphasis?: string
  }

  interface TypographyVariants {
    h1: React.CSSProperties
    h2: React.CSSProperties
    subtitle1: React.CSSProperties
    subtitle2: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    caption1: React.CSSProperties
    caption2: React.CSSProperties
    button: React.CSSProperties
    overline: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    h1?: React.CSSProperties
    h2?: React.CSSProperties
    subtitle1?: React.CSSProperties
    subtitle2?: React.CSSProperties
    body1?: React.CSSProperties
    body2?: React.CSSProperties
    caption1?: React.CSSProperties
    caption2?: React.CSSProperties
    button?: React.CSSProperties
    overline?: React.CSSProperties
  }

  //define The Palette and PaletteOptions interfaces define a textColor property of type EmphasisColors, and a greyColor property of type Palette['primary'].

  interface Palette {
    textColor: EmphasisColors
    greyColor: Palette['primary']
    semantic: Palette['primary']
  }

  interface PaletteOptions {
    textColor?: EmphasisColors
    greyColor?: PaletteOptions['primary']
    semantic?: PaletteOptions['primary']
  }

  //define the NewColors  with additional color properties eg , primary100 as strings and optional, including variations of primary and grey colors, white, and emphasis colors.

  interface NewColors {
    primary100?: string
    primary200?: string
    primary300?: string
    primary400?: string
    primary500?: string
    primary600?: string
    primary700?: string
    primary800?: string
    primary900?: string
    success100?: string
    success500?: string
    warning100?: string
    warning300?: string
    error100?: string
    error500?: string
    grey50?: string
    grey100?: string
    grey200?: string
    grey300?: string
    grey400?: string
    grey500?: string
    grey600?: string
    grey700?: string
    grey800?: string
    grey900?: string
    white?: string
    black?: string
    highEmphasis?: string
    mediumEmphasis?: string
    lowEmphasis?: string
  }

  //write a The PaletteColor interface extends NewColors and provides a single interface for defining a color in the palette. The SimplePaletteColorOptions interface extends NewColors and is used to provide a simpler interface for defining a color in the palette.

  interface PaletteColor extends NewColors {}
  interface SimplePaletteColorOptions extends NewColors {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    subtitle1: true
    subtitle2: true
    body1: true
    body2: true
    caption1: true
    caption2: true
    button: true
    overline: true
  }
}

//Write a React theme that creates a custom Material UI theme using createTheme from @mui/material. The theme should have custom values for spacing, typography, and palette. The typography property should include custom values for h1, h2, subtitle1, subtitle2, body1, body2, caption1, caption2, button, and overline. The palette property should include custom values for primary, greyColor, textColor, success, warning, and error. In addition, the declare module syntax should be used to extend the interfaces for EmphasisColors, TypographyVariants, TypographyVariantsOptions, Palette, PaletteOptions, NewColors, PaletteColor, SimplePaletteColorOptions, and TypographyPropsVariantOverrides from @mui/material/styles and @mui/material/Typography.

// Write your code here

const theme = createTheme({
  //     Create a theme with the following `spacing` values:
  // - 0
  // - 4
  // - 8
  // - 12
  // - 16
  // - 20
  // - 24
  // - 32

  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  //fontFamily: 'Graphik',
  // Set the typography properties similar to the following:
  // - `fontFamily` to 'Graphik'
  // - `h1`:
  //   - `fontFamily` to 'Graphik-Semibold'
  //   - `fontStyle` to 'normal'
  //   - `fontWeight` to 500
  //   - `fontSize` to '40px'
  //   - `lineHeight` to '54px'

  typography: {
    fontFamily: 'Graphik',
    h1: {
      fontFamily: 'Graphik-Semibold',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '40px',
      lineHeight: '54px',
    },

    // - `h2`:
    // - `fontFamily` to 'Graphik'
    // - `fontStyle` to 'normal'
    // - `fontWeight` to 400
    // - `fontSize` to '24px'
    // - `lineHeight` to '34px'
    h2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '34px',
    },
    subtitle1: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
    },
    subtitle2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '28px',
    },
    body1: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
    },
    body2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '22px',
    },
    caption1: {
      fontFamily: 'Graphik-Medium',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '16px',
    },
    caption2: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16px',
    },
    button: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '42px',
      textTransform: 'none',
    },
    overline: {
      fontFamily: 'Graphik',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
      textTransform: 'none',
    },
  },

  palette: {
    //create a primary color pallete main - #0052FF , primary100, 300 , 500, 700, 900

    primary: {
      main: '#0052FF',
      primary100: '#FAFCFF',
      primary300: '#CCE3FF',
      primary500: '#0052FF',
      primary700: '#002EB7',
      primary900: '#00177A',
    },

    //do the same for grey from 50 with white addeded as a color

    greyColor: {
      main: '#0E0E2E',
      grey50: '#F2F2F7',
      grey100: '#E8E8F7',
      grey300: '#B4B4CF',
      grey500: '#4B4B60',
      grey700: '#252545',
      grey900: '#0E0E2E',
      white: '#FFFFFF',
    },

    semantic: {
      main: '#FFFFFF',
      success100: '#E9F7EC',
      success500: '#20B03F',
      warning100: '#FFF6ED',
      warning300: '#FFA74F',
      error100: '#F3E6EB',
      error500: '#B71A33',
    },
    //Define a text color palette:

    textColor: {
      highEmphasis: '#343446',
      mediumEmphasis: '#7D7D89',
      lowEmphasis: '#B2B2B9',
    },
    // Create a success color palette with main and light values

    success: {
      main: '#20B03F',
      light: '#E9F7EC',
    },
    warning: {
      main: '#FFA74F',
      light: '#FFF6ED',
    },

    //   Create an error color palette:
    error: {
      main: '#B71A33',
      light: '#F3E6EB',
    },
  },

  //Generate the default props for the MuiButtonBase component with the disableRipple prop set to true.
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})

export default theme
