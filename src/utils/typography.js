import Typography from "typography"
import irvingTheme from "typography-theme-irving"

irvingTheme.overrideThemeStyles = () => {
  return {
    li: {
      marginBottom: `calc(1.56rem / 8)`,
    },
    ".gatsby-resp-image-wrapper": {
      marginTop: `1rem`,
    },
    pre: {
      borderLeft: "2pt solid #607d8b",
      marginLeft: "12pt",
      paddingLeft: "12pt",
    },
    h2: {
      marginBottom: `calc(1.56rem / 2)`,
    },
    h3: {
      marginBottom: `calc(1.56rem / 3)`,
    },
    h4: {
      marginBottom: `calc(1.56rem / 3)`,
    },
    h5: {
      marginBottom: `calc(1.56rem / 3)`,
    },
    h6: {
      marginBottom: `calc(1.56rem / 3)`,
    },
  }
}



const typography = new Typography(irvingTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
