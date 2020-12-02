import Typography from "typography"

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Exo', 'sans-serif'],
  bodyFontFamily: ['Ubuntu Mono', 'monospace'],
  // See below for the full list of options.
})


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
