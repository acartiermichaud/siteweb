// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Button ({path, text}) {
  
  return (
    <Link className="button" to={path}>{text}</Link>
  )
}

Button.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
}
  
export default Button