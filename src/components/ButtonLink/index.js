// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function ButtonLink ({classname, path, text}) {
  
  return (
    <Link className={classname} to={path}>{text}</Link>
  )
}

ButtonLink.propTypes = {
  classname: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string
}
  
export default ButtonLink