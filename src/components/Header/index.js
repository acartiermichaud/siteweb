// React
import {useState} from 'react'

// PropTypes
import PropTypes from 'prop-types'

// Component
import Tab from '../../components/Tab'

// Style
import './style.scss'

// Image
import logo from '../../images/logo.png'


function Header ({activeTab}) {

  const [displayMenu, setDisplayMenu] = useState(false)
  console.log("displayMenu : "+displayMenu)

  function openMenu () {
    if (displayMenu === false) {
      setDisplayMenu(true)
    }
    else {
      setDisplayMenu(false)
    }
  }
  
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_title-container">
          <img src={logo} alt="logo" className="header_logo" loading="lasy"/>
            <div className="header_title">
              <h1>Alain Cartier-Michaud</h1>
              <p>Hypnothérapeute | Énergéticien <span className='header_title_separator'>|</span> Facilitateur PSYCH-K</p>
            </div>
        </div>
        <button className='header_button' onClick={() => openMenu()}><i className="header_menu-icon fa-solid fa-bars"></i></button>
        <nav className={displayMenu === false ? 'header_nav' : "header_mobile-nav"}>
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