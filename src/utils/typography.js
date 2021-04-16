import Typography from "typography"
import ElkGlen from "typography-theme-elk-glen"

ElkGlen.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: '#171a21'
  }
})

const typography = new Typography(ElkGlen)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

