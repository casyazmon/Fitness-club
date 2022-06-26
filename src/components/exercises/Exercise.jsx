import React, { useEffect } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetChData'
import './exercise.css'
import ExerciseCard from './ExerciseCard'

const Exercise = ({exercise, setExercise, bodyPart}) => {

    useEffect(() =>{
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if (bodyPart === 'all') {
                exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }

            setExercise(exercisesData);
        }

        fetchExercisesData();

    },[bodyPart])

  return (
    <div className="container">
          <div className="exericse-title">
            <h3>Perfect Exercises <br/>for various body Parts</h3>
            <p>The full monty spiffing good time no biggie cack grub fantastic. </p>
          </div>
          <div className="exercises-card">
           
              
            <ExerciseCard exercise={exercise}/>
            
            
           
          </div>
            
        </div>
  )
}

export default Exercise