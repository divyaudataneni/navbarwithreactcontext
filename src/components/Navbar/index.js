// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgCard = isDarkTheme ? 'nav-dark' : 'nav-light'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const items = isDarkTheme ? 'light' : 'list-item'
      const onClickTheme = () => {
        toggleTheme()
      }
      return (
        <div className={bgCard}>
          <img src={logoUrl} alt="website logo" className="logo" />
          <ul className="list-items">
            <Link to="/" className="links">
              <li className={items}>Home</li>
            </Link>
            <Link to="/about" className="links">
              <li className={items}>About</li>
            </Link>
          </ul>
          <button
            type="button"
            className="button"
            onClick={onClickTheme}
            data-testid="theme"
          >
            <img src={theme} alt="theme" className="logo" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
