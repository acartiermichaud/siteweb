// React
import {useState, useEffect} from 'react'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Carousel ({pictures}) {
  
  const total = pictures.length
  let [position, setPosition] = useState(0)

  // Function that calculates the new position in carousel
  function calcPosition () {
    if (position === total - 1) {
      position = 0
    }
    else {
      position += 1
    }
    return position
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(calcPosition())
    }, 6000)
    return () => clearInterval(interval)
  }, [position]) 

  return (
    <div className='carousel'>
      <img className="carousel_image carousel_image carousel_image_1" src={pictures[0]} alt="Photo 1" loading="lasy"></img>
      <img className="carousel_image carousel_image carousel_image_2" src={pictures[1]} alt="Photo 2" loading="lasy"></img>
      <img className="carousel_image carousel_image carousel_image_3" src={pictures[2]} alt="Photo 3" loading="lasy"></img>
      <img className="carousel_image carousel_image carousel_image_4" src={pictures[3]} alt="Photo 4" loading="lasy"></img>
      <img className="carousel_image carousel_image carousel_image_5" src={pictures[4]} alt="Photo 5" loading="lasy"></img>
      <img className="carousel_image carousel_image carousel_image_6" src={pictures[5]} alt="Photo 6" loading="lasy"></img>
      <img className="carousel_image carousel_image carousel_image_7" src={pictures[6]} alt="Photo 7" loading="lasy"></img>

      <div className='carousel_cercle-container'>
         {position === 0 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 1 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 2 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 3 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 4 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 5 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 6 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Carousel