// React
import {useLayoutEffect} from 'react'

// Components
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import ButtonLink from '../../components/ButtonLink'
import PracticeIntro from '../../components/PracticeIntro'

// Style
import './style.scss'

// Images
import photo1 from '../../images/carousel/photo1.webp'
import photo2 from '../../images/carousel/photo2.webp'
import photo3 from '../../images/carousel/photo3.webp'
import photo4 from '../../images/carousel/photo4.webp'
import photo5 from '../../images/carousel/photo5.webp'
import photo6 from '../../images/carousel/photo6.webp'
import photo7 from '../../images/carousel/photo7.webp'
import portrait from '../../images/portrait.webp'
import soins from '../../images/soins.webp'
import hypnose from '../../images/hypnose.webp'
import psychk from '../../images/psych-k.webp'


function Home () {

  const pictures = [photo1, photo2, photo3, photo4, photo5, photo6, photo7]

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })
  
  return (
    <div className='page'>
      <Header activeTab="home"/>
      <main>
        <section className="diaporama">
          <div className='carousel'><Carousel pictures={pictures}/></div>
          <div className="diaporama_text">
            <h2 className='diaporama_text_title'>Devenez la meilleure version de vous-même !</h2>
            <h3 className='diaporama_text_paragraph'>Je vous accompagne avec des méthodes reconnues pour reprendre en main votre vie et faciliter votre épanouissement.</h3>
            <ButtonLink classname="button-link img" path="/contact" text="Contactez-moi"/>
          </div>
        </section>

        <section className="presentation">
          <h2 className="presentation_title">Bienvenue !</h2>
          <div className='presentation_container'>
            <img className="presentation_portrait" src={portrait} alt="portrait" loading="lasy"/>
            <div className="presentation_text">
              <p className="presentation_paragraph"> 
                Je m'appelle Alain Cartier-Michaud, je suis hypnothérapeute, énergéticien et facilitateur PSYCH-K.
              </p>
              <p className="presentation_paragraph"> 
                Passionné par les méthodes alternatives de santé, j’ai commencé à me former puis à pratiquer il y a une quinzaine d’années.
                Au travers de mes formations, rencontres, lectures et expériences personnelles, j’ai pris conscience de l’étendue du potentiel que nous avons tous pour mieux comprendre et maîtriser notre vie.
              </p>
              <p className="presentation_paragraph"> 
                Je vous propose de vous guider vers les racines de vos maux pour en comprendre le sens profond, qu’ils soient physiques ou psychiques, issus de traumatismes passés ou de difficultés relationnelles. Grâce aux prises de conscience qui s'en suivront, je vous aiderai à mobilliser toutes vos ressources pour dépasser vos peurs, repousser vos limites, retrouver votre joie de vivre et votre santé.
              </p>
              <ButtonLink classname="button-link basic" path="/contact" text="Contactez-moi"/>
            </div>
          </div>
        </section>

        <section className="practices">
          <h2 className="practices_title">Mes pratiques</h2>
          <p className="practices_paragraph">
            Je vous propose 3 méthodes complémentaires. 
          </p>
          <div className="practices_container">
            <PracticeIntro img={hypnose} alt="Illustation hypnose" title="Hypnose humaniste" text="Avec l'hypnose humaniste, je vous guide dans un état de conscience modifiée, léger et dynamique, afin d'aller à la rencontre de la source de votre problème et le résoudre." path="/pratiques-et-tarifs/hypnose"/>
            <PracticeIntro img={soins} alt="Illustation soins" title="Soins énergétiques" text="Les soins énergétiques ont pour objectif d'améliorer la circulation de &#8220;l'énergie de vie&#8221;  dans votre corps physique en levant les blocages ou freins existants, ce qui permet d'augmenter votre potentiel de guérison." path="/pratiques-et-tarifs/soins"/>
            <PracticeIntro img={psychk} alt="Illustation PSYCH-K" title="PSYCH-K" text="PSYCH-K est une approche simple et efficace. Elle agit sur les croyances limitantes de votre subconscient qui créent des résistances dans la réalisation de vos objectifs de vie ou dans votre parcours de guérison. Avec cette approche, je vous aiderai à intégrer de nouvelles croyances afin de faciliter votre guérison et la réalisation de vos projets." path="/pratiques-et-tarifs/psychk"/>
          </div>
        </section>

        <div className="contact-link_container">
          <div className='contact-link_text'>
            <h3 className='contact-link_title'>Reprenez votre vie en main !</h3>
            <ButtonLink classname="button-link img script contact-link_button" path="/contact" text="Contactez-moi pour planifier une séance"/>
          </div>
        </div>
      </main>
    </div>
  )
}
  
export default Home