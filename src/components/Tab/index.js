// React component
import {Link} from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Tab ({isActive, path, text}) {

  let tabClass
  if (!isActive) {
    tabClass = "tab tab_inactive"
  }
  else {
    tabClass = "tab tab_active"
  }
  
  return (
    <Link className={tabClass} to={path}>{text}</Link>
  )
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  path: PropTypes.string,
  text: PropTypes.string
}
  
export default Tab