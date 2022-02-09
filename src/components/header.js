/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    className="site-header"
    sx={{
      bg: "white",
      color: "black",
    }}
  >
    {children}
  </header>
)

export default Header
