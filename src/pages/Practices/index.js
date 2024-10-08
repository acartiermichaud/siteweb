// React
import {useParams} from 'react-router-dom'
import {useLayoutEffect} from 'react'

// Components
import Header from '../../components/Header'
import PracticeDetails from '../../components/PracticeDetails'

// Style
import './style.scss'

// Images
import soinsDetails from '../../images/soins-details.webp'
import hypnoseDetails from '../../images/hypnose-details.webp'
import psychkDetails from '../../images/psych-k-details.webp'


function Practices () {

  const selectedAnchor = useParams().anchor

  useLayoutEffect(() => {
    if (selectedAnchor === undefined) {
      window.scrollTo(0, 0)
    }
    else {
      const anchor = document.getElementById(selectedAnchor);
      anchor.scrollIntoView();
    }
  })
  
  return (
    <div className='page'>
      <Header activeTab="practices"/>
      <main>
        <section className="practices-description">
          <h2 className="practices-description_title">Mes pratiques</h2>
          <p className="practices-description_paragraph">
            Je vous propose 3 méthodes complémentaires pour mobiliser votre potentiel : les soins énergétiques, l’hypnose humaniste et PSYCH-K. 
          </p>
          <div id="soins" className='practices_anchor'>
            <PracticeDetails  classname="practice-details" img={soinsDetails} alt="Illustration soins" title="Soins énergétiques" text="Les soins énergétiques agissent sur nos corps subtils qui se nourrissent de toutes les énergies invisibles qui entourent notre corps physique, par l'intermédiaire de nos chakras et nos méridiens. Ces soins permettent notamment de nettoyer ces corps subtils, les ré-ancrer et les recentrer sur notre corps physique afin que l'énergie vitale y circule sans entraves. Toutes les problématiques peuvent être abordées sous cet angle en complément des autres approches de santé. "/>
          </div>
          <div id="hypnose" className='practices_anchor'>
            <PracticeDetails classname="practice-details practice-details_reverse" img={hypnoseDetails} alt="Illustration hypnose" title="Hypnose humaniste" text="Ce type d'hypnose est une évolution de l'hypnose classique et de l'hypnose éricksonienne, elle donne le rôle principal à la personne en état modifié de conscience. L'hypnothérapeute joue seulement le rôle de guide dans la recherche des causes profondes et des solutions. Cette méthode permet une véritable prise de conscience : un aspect de vous-même jusque-là inconscient se révèle à vous et prend du sens. Vous avez alors la possibilité de modifier les croyances limitantes quelles qu'en soient les origines pour qu'elles soutiennent votre santé et votre sérénité."/>
          </div>
          <div id="psychk" className='practices_anchor'>
            <PracticeDetails classname="practice-details" img={psychkDetails} alt="Illustration PSYCH-K" title="PSYCH-K" text="PSYCH-K (pour Psychologie-kinésiologie) est une technique puissante de reprogrammation des croyances qui ne sont plus alignées avec vos objectifs de vie ou qui ne soutiennent pas votre guérison. Elle permet également de transformer le stress généré par une épreuve difficile. Enfin, elle peut vous faire accéder à des messages éclairants sur l'origine de vos maux ou difficultés de vie, et à des sagesses qui vous aideront à retrouver votre souveraineté et vos potentiels."/>
          </div>
        </section>

        <section className="prices">
          <h2 className="prices_title">Tarifs des séances</h2>
          <div className="prices_tab">

            <div className="prices_text">
              <div className="prices_firstline">
                <div className="prices_category">
                  <h3 className="prices_category_title">Adultes & Adolescents</h3>
                  <p className="prices_category_info">(+ de 16 ans)</p>
                </div>
                <div className="prices_lastline">
                  <p className="prices_duration">1H30</p>
                  <p className="prices_separator">-</p>
                  <p className="prices_price">80€</p>
                </div>
              </div>
            </div>

            <div className="prices_text">
              <div className="prices_firstline">
                <div className="prices_category">
                  <h3 className="prices_category_title">Enfants</h3>
                  <p className="prices_category_info">(- de 16 ans)</p>
                </div>
                <div className="prices_lastline">
                  <p className="prices_duration">1H00</p>
                  <p className="prices_separator">-</p>
                  <p className="prices_price">65€</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
  
export default Practices