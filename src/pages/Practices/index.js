// React
import {useParams} from 'react-router-dom'
import {useLayoutEffect} from 'react'

// Components
import Header from '../../components/Header'
import PracticeDetails from '../../components/PracticeDetails'

// Style
import './style.scss'

// Images
import soinsDetails from '../../images/soins-details.jpg'
import hypnoseDetails from '../../images/hypnose-details.png'
import psychkDetails from '../../images/psych-k-details.png'


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
            Je vous propose 3 méthodes complémentaires pour mobiliser votre potentiel de guérison : les soins énergétiques, l’hypnose humaniste et le PSYCH-K. 
          </p>
          <div id="soins" className='practices_anchor'>
            <PracticeDetails  classname="practice-details" img={soinsDetails} title="Soins énergétiques" text="Les soins énergétiques agissent sur nos corps subtils qui se nourrissent de toutes les énergies invisibles qui entourent notre corps physique, par l'intermédiaire de nos chakras et nos méridiens. Ces soins permettent notamment de nettoyer ces corps subtils, les ré-ancrer et les recentrer sur notre corps physique afin que l'énergie vitale y circule sans entraves. Toutes les problématiques peuvent être abordées sous cet angle en complément des autres approches de la santé. "/>
          </div>
          <div id="hypnose" className='practices_anchor'>
            <PracticeDetails classname="practice-details practice-details_reverse" img={hypnoseDetails} title="Hypnose humaniste" text="Ce type d'hypnose est une évolution de l'hypnose classique et de l'hypnose éricksonienne, elle donne le rôle principal à la personne en état modifié de conscience. L'hypnothérapeute joue seulement le rôle de guide dans la recherche des causes profondes et des solutions. Cette mét hode permet une véritable prise de conscience: un aspect de vous-même jusque-là inconscient se révèle à vous et prend du sens. Vous avez alors la possibilité de modifier vos croyances limitantes pour qu'elles soutiennent votre santé et votre sérénité."/>
          </div>
          <div id="psychk" className='practices_anchor'>
            <PracticeDetails classname="practice-details" img={psychkDetails} title="PSYCH-K" text=". . . . . . . . . . . . . . . .  (à écrire) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."/>
          </div>
        </section>

        <section className="prices">
          <h2 className="prices_title">Tarifs des séances</h2>
          <div className="prices_tab">

            <div className="prices_text">
              <div className="prices_firstline">
                <div className="prices_category">
                  <p className="prices_category_title">Adultes & Adolescents</p>
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
                  <p className="prices_category_title">Enfants</p>
                  <p className="prices_category_info">(- de 16 ans)</p>
                </div>
                <div className="prices_lastline">
                  <p className="prices_duration">1H00</p>
                  <p className="prices_separator">-</p>
                  <p className="prices_price">65€</p>
                </div>
              </div>
            </div>

            <p className="prices_offer">Offre de 5 séances pour adultes et adolescents au prix réduit de 350€</p>

          </div>
          
        </section>
      </main>
    </div>
  )
}
  
export default Practices