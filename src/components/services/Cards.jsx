import React from 'react'
import './cards.css'
import CardIcon from '../../assets/icons/1.png'

const Cards = ({data,bodyPart,setBodyPart}) => {
  console.log(bodyPart);
  return (
    
    data.map((bodyPart) => (
        <div key={bodyPart.id || bodyPart} className="card" 
        onClick={()=>{
          setBodyPart(bodyPart);
          window.scrollTo({top: 2000, left:100, behavior:"smooth"})
        }}>
          <div className="card-container">
              <div className="card-icon">
                  <img src={CardIcon} alt="card icon" />
                  <span>1</span>
              </div>
              <h4 className='card-title'>{bodyPart}</h4>
              <p className='card-desc'>Mucker plastered bugger all mate morish are.</p>
          </div>
      </div>

    ))
    
  )
}

export default Cards