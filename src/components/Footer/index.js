// Style
import './style.scss'

// Images
import orchidee from '../../images/orchidee.webp'


function Footer () {
  
  return (
    <footer className='footer'>
      <img className="footer_img" src={orchidee} alt="Orchidée" loading="lasy"/>
      <p className='footer_text'>Copyright © 2024 Alain Cartier-Michaud</p>
      <span className='footer_separator'> - </span>
      <p className='footer_text'>Tous droits réservés</p>
      <img className="footer_img" src={orchidee} alt="Orchidée" loading="lasy"/>
    </footer>
  )
}
  
export default Footer