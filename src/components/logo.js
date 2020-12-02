/** @jsx jsx */
import { jsx } from "theme-ui"

const Logo = (props) => (
<h1 sx={{ pt: 2, pb: 2, mb: 2, mt: 2, fontSize: [8, 8], padding: 0, fontStyle: "italic", display: "inline-block", backgroundClip : "text", color: "transparent", textShadow:"5px 5px 0px #FFADAD, 10px 10px 0px #FFD6A5, 15px 15px 0px #FEF193, 20px 20px 0px #DDFFD6, 25px 25px 0px #B2EFF5, 30px 30px 0px #A0C4FF,35px 35px 0px #1D2D49;", marginBottom:"0.75em", marginTop:"0em"  }}>avgloss</h1>


)

Logo.defaultProps = {
  color: "white",
}

export default Logo
