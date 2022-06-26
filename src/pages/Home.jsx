import React, { useState } from 'react'
import Exercise from '../components/exercises/Exercise'
import Hero from '../components/header/Hero'
import Navbar from '../components/navbar/Navbar'
import Services from '../components/services/Services'

const Home = () => {
  const[bodyPart, setBodyPart] = useState('all')
  const[exercise, setExercise] = useState([]);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services bodyPart ={bodyPart} setBodyPart= {setBodyPart}/>
      <Exercise bodyPart={bodyPart} exercise={exercise} setExercise={setExercise}/>
    </div>
  )
}

export default Home