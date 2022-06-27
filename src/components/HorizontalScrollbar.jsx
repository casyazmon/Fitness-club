import React from 'react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import ExerciseCard from './exercises/ExerciseCard'
import Cards from './services/Cards'

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu>
        {data.map((item) => (
            <Cards key={item.id} item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        ))}

    </ScrollMenu>
  )
}

export default HorizontalScrollbar