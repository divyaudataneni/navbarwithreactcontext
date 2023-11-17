// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgCard = isDarkTheme ? 'dark-card' : 'home-card'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <div>
          <Navbar />
          <div className={bgCard}>
            <img src={imageUrl} alt="about" className="home-logo" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
