


const ExerciseCard = ({exercise}) => {


  return (
    //  exercise.map((item) => (
    //     <div key={item.id || item} className="card" 
    //     onClick={()=>{
    //     //   setBodyPart(bodyPart);
    //     //   window.scrollTo({top: 2000, left:100, behavior:"smooth"})
    //     }}>
    //       <div className="card-container">
    //           <div className="card-icon">
    //               <img src={item.gifUrl} alt="card icon" />
    //               <span>1</span>
    //           </div>
    //           <h4 className='card-title'>{item.name}</h4>
    //           <p className='card-desc'>Mucker plastered bugger all mate morish are.</p>
    //       </div>
    //   </div>

    // ))

    exercise.map((item) => (
        <div key={item.id || item.name} className="exercise-card">
            <div className="exercise-thumnail">
                <img src={item.gifUrl} alt={item.name} />
            </div>
            <div className="exercise-content">
                <span>{item.target}</span>
                <h3>{item.name}</h3>
            </div>

        </div>
    ))
  )
}

export default ExerciseCard