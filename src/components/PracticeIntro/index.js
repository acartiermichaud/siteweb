// Component
import ButtonLink from '../../components/ButtonLink'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function PracticeIntro ({img, alt, title, text, path}) {
  
  return (
    <article className="practice">
      <img className="practice_img" src={img} alt={alt} loading="lasy"></img>
      <h3 className="practice_title">{title}</h3>
      <p className="practice_paragraph">{text}</p>
      <ButtonLink classname="button-link basic" path={path} text="En savoir plus"/>
    </article>
  )
}

PracticeIntro.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string
}
  
export default PracticeIntro