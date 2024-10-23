// React
import {useLayoutEffect} from 'react'

// Components
import Header from '../../components/Header'
import PhoneLink from '../../components/PhoneLink'

// Style
import './style.scss'

// Images
import exterieur from '../../images/cabinet/exterieur.webp'
import canape from '../../images/cabinet/canape.webp'
import bol from '../../images/cabinet/bol.webp'
import bureau from '../../images/cabinet/bureau.webp'


function Contact () {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  
  return (
    <div className="page">
      <Header activeTab="contact"/>
      <main>
        <section className='contact'>
          <h2 className='contact_title'>Contact</h2>

          <div className="contact_phone">
            <p className='contact_phone_paragraph'>Pour planifier une séance contactez-moi par téléphone au</p>
            <PhoneLink num="+33616231330" text="06 16 23 13 30"/>
          </div>

          <div className="contact_container">
            <div className="contact_container_left">
              <div className='address'> 
                <h3 className='address_title'>Adresse</h3>
                <p className='address_paragraph'>12 Chemin Laydernier</p>
                <p className='address_paragraph'>74450 Saint Jean de Sixt</p>
              </div>
              <div className='schedule'>
                <h3 className='schedule_title'>Horaires</h3>
                <div className='schedule_tab'>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Lundi</div> 
                    <div className='schedule_line_info'>Fermé</div>
                  </div>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Mardi</div> 
                    <div className='schedule_line_info'>14H-18H</div>
                  </div>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Mercredi</div> 
                    <div className='schedule_line_info'>14H-18H</div>
                  </div>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Jeudi</div> 
                    <div className='schedule_line_info'>14H-18H</div>
                  </div>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Vendredi</div> 
                    <div className='schedule_line_info'>14H-18H</div>
                  </div>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Samedi</div> 
                    <div className='schedule_line_info'>14H-17H</div>
                  </div>
                  <div className='schedule_line'>
                    <div className='schedule_line_day'>Dimanche</div> 
                    <div className='schedule_line_info'>Fermé</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='contact_container_right'> 
              <iframe title="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2775.4579614846893!2d6.410684300000001!3d45.922146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478bf310d7a6c9f7%3A0xe15f42efaf2b3a96!2sAlain%20Cartier-Michaud%2C%20Hypnoth%C3%A9rapeute%20%7C%20Energ%C3%A9ticien%20%7C%20Facilitateur%20PSYCH-K!5e0!3m2!1sfr!2sfr!4v1719904955224!5m2!1sfr!2sfr" 
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          <div className='contact_photos'>
            <img className="contact_photos_1" src={exterieur} alt="immeuble" loading="lasy"/>
            <img className="contact_photos_2" src={bureau} alt="bureau" loading="lasy"/>
            <img className="contact_photos_3" src={canape} alt="canapé" loading="lasy"/>          
            <img className="contact_photos_4" src={bol} alt="bol tibétain" loading="lasy"/>
          </div>
        </section>
      </main>
    </div>
  )
}
  
export default Contact