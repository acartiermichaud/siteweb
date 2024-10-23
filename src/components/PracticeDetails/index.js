// Component
import ButtonLink from '../../components/ButtonLink'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function PracticeDetails ({classname, img, alt, title, text}) {
  
  return (
    <article className={classname}>
      <img className="practice-details_img" src={img} alt={alt} loading="lasy"></img>
      <div className="practice-details_container">
        <h3 className="practice-details_title">{title}</h3>
        <p className="practice-details_paragraph">{text}</p>
        <ButtonLink classname="button-link basic" path="/contact" text="Planifier une séance"/>
      </div>
    </article>
  )
}

PracticeDetails.propTypes = {
  classname: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
  
export default PracticeDetails