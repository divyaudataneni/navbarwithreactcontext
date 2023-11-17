// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgCard = isDarkTheme ? 'dark-card' : 'home-card'
      return (
        <div>
          <Navbar />
          <div className={bgCard}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-logo"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
