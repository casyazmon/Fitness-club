


const ExerciseCard = ({exercise}) => {


  return (
    
        <div className="exercise-card" onClick={() => (console.log(exercise.id))}>
            <div className="exercise-thumnail">
                <img src={exercise.gifUrl} alt={exercise.name} />
            </div>
            <div className="exercise-content">
                <span>{exercise.target}</span>
                <h3>{exercise.name}</h3>
            </div>

        </div>

  )
}

export default ExerciseCard