import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetChData';
import Cards from './Cards'
import './service.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = ({bodyPart, setBodyPart}) => {

  const [bodyParts, setBodyParts] = useState([]);
  

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])

    }
    fetchExerciseData();

  },[])

 

  


  return (
    <section className="services">
        <div className="container">
          <div className="services-title">
            <h3>Perfect Exercises <br/>for various body Parts</h3>
            <p>The full monty spiffing good time no biggie cack grub fantastic. </p>
          </div>
          <div className="services-card">
           
              <Cards data = {bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
     
            
            
           
          </div>
            
        </div>
    </section>
  )
}

export default Services