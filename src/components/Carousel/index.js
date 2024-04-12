// React
import {useState, useEffect} from 'react'

// PropTypes
import PropTypes from 'prop-types'

// Style
import './style.scss'


function Carousel ({pictures}) {
  
  const total = pictures.length
  let [position, setPosition] = useState(0)
  const [oldPosition, setOldPosition] = useState(0)

  // Function that calculates the new position in carousel
  function calcPosition () {
    if (position === total - 1) {
      position = 0
      setOldPosition(total - 1)
    }
    else {
      position += 1
      setOldPosition(position - 1)
    }
    return position
  }

  useEffect(() => {
    console.log("position : "+position)
    console.log("oldPosition : "+oldPosition)
    const interval = setInterval(() => {
      setPosition(calcPosition())
    }, 6000)
    return () => clearInterval(interval)
  }, [position]) 

  return (
    <div className='carousel'>
      <img className="carousel_image carousel_image carousel_image_1" src={pictures[0]} alt="Photo 1" loading="lasy"></img>
      <img className={"carousel_image carousel_image carousel_image_2"} src={pictures[1]} alt="Photo 2" loading="lasy"></img>
      <img className={"carousel_image carousel_image carousel_image_3"} src={pictures[2]} alt="Photo 3" loading="lasy"></img>

      <div className='carousel_cercle-container'>
         {position === 0 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 1 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
         {position === 2 ? <div className="carousel_cercle carousel_cercle_full"></div> : <div className="carousel_cercle carousel_cercle_empty"></div>}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Carousel