// React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Pages
import Home from '../../pages/Home'
import Practices from '../../pages/Practices'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Error from '../../pages/Error'

// Component
import Footer from '../../components/Footer'

// Style
import './style.scss'


function MyRouter () {
  
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />}/>
          <Route path="/pratiques-et-tarifs" element={<Practices />} errorElement={<Error />}/>
          <Route path="/a-propos-de-moi" element={<About />} errorElement={<Error />}/>
          <Route path="/contact" element={<Contact />} errorElement={<Error />}/>
          <Route path="/erreur" element={<Error />} errorElement={<Error />}/>
          <Route path="*" element={<Error />} errorElement={<Error />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
  
export default MyRouter