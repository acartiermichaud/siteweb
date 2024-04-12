// PropTypes
import PropTypes from 'prop-types'

// Component
import Tab from '../../components/Tab'

// Style
import './style.scss'

// Image
import logo from '../../images/logo.png'


function Header ({activeTab}) {
  
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_title-container">
          <img src={logo} alt="logo" className="header_logo" loading="lasy"/>
            <div className="header_title">
              <h1>Alain Cartier-Michaud</h1>
              <p>Hypnothérapeute | Énergéticien | Facilitateur PSYCH-K</p>
            </div>
        </div>
        <nav className='header_nav'>
          <Tab isActive={activeTab==="home"} path="/" text="Accueil"/>
          <Tab isActive={activeTab==="practices"} path="/pratiques-et-tarifs" text="Pratiques & Tarifs"/>
          <Tab isActive={activeTab==="about"} path="/a-propos-de-moi" text="A propos de moi"/>
          <Tab isActive={activeTab==="contact"} path="/contact" text="Contact"/>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  activeTab: PropTypes.string
}
  
export default Header