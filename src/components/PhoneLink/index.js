// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function PhoneLink ({num, text}) {

  const phone = "tel:"
  
  return (
    <a className="phone-link" href={phone.concat(num)}>{text}</a>
  )
}

PhoneLink.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string
}
  
export default PhoneLink