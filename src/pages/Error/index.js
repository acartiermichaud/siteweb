// React component
import {Link} from 'react-router-dom'

// Component
import Header from '../../components/Header'

// Style
import './style.scss'


function Error () {
  
  return (
    <div className='page'>
      <Header activeTab=""/>
      <main>
        <section className="error">
          <h1 className="error_title">Erreur 404</h1>
          <h2 className="error_subtitle">Page non trouvée</h2>
          <Link className="error_link" to="/">Retour à la page d'accueil</Link>
        </section>
      </main>
    </div>
  )
}
  
export default Error