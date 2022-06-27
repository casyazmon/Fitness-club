import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/fetChData'
import './exercise.css'
import ExerciseCard from './ExerciseCard'

const Exercise = ({exercise, setExercise, bodyPart}) => {
  

  //pagination

  const[currentPage,setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
 


  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercise.slice(indexOfFirstExercise,indexOfLastExercise)
  console.log(currentExercises);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top:2000, behavior:'smooth'})
  }

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
    <div className="exercises">
      <div className="container">
          <div className="exericse-title">
            <h3>Perfect Exercises For Your <span>{bodyPart === 'all'? 'Body': bodyPart}</span></h3>
            <p>The full monty spiffing good time no biggie cack grub fantastic. </p>
          </div>
          <div className="exercises-card">
           
              {currentExercises.map((ex, index) =>(
                <ExerciseCard key={index} exercise={ex}/>
              ))}
            
            
            
           
          </div>
          {
            exercise.length > exercisesPerPage && (
              <Pagination
                color='standard'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercise.length/exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              >

              </Pagination>
            )
          }
            
        </div>

    </div>
    
  )
}

export default Exercise