import React from 'react'
import './cards.css'
import CardIcon from '../../assets/icons/1.png'

const Cards = ({item,bodyPart,setBodyPart}) => {
  return (
    
  
        <div className="card" 
        onClick={()=>{
          setBodyPart(item);
          window.scrollTo({top: 1200, left:100, behavior:"smooth"})
        }}>
          <div className="card-container">
              <div className="card-icon">
                  <img src={CardIcon} alt="card icon" />
                  <span>1</span>
              </div>
              <h4 className='card-title'>{item}</h4>
          </div>
      </div>

    
    
  )
}

export default Cards