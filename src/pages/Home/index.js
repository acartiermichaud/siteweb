// Components
import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import PhoneLink from '../../components/PhoneLink'

// Style
import './style.scss'

// Images
import photo1 from '../../images/carousel/photo1.png'
import photo2 from '../../images/carousel/photo2.png'
import photo3 from '../../images/carousel/photo3.png'


function Home () {

  const pictures = [photo1, photo2, photo3]
  
  return (
    <div>
      <Header activeTab="home"/>
      <main>
        <section className="diaporama">
          <div className='carousel'><Carousel pictures={pictures}/></div>
          <div className="diaporama_text">
            <h2>Libérez votre potentiel !</h2>
            <h3>Je vous accompagne avec des techniques innovantes pour prendre le contrôle de votre vie et vous épanouir enfin !</h3>
            <PhoneLink num="+33616231330" text="Contactez-moi"/>
          </div>
        </section>

        {/* <section>
          <h2>Bienvenue !</h2>
        </section>

        <section>
          <h2>Pratiques</h2>
        </section>

        <section>
          <h2>Contact</h2>
        </section> */}
      </main>
    </div>
  )
}
  
export default Home