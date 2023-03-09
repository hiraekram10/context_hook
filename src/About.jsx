import React from 'react'
import NoTEContext from './context/NoteContext'
import { useContext,useEffect } from 'react'

const About = () => {
    const first = useContext(NoTEContext)
    useEffect(()=>{
        first.update()
    },[])
  return (
    <div>
        Hi this is {first.state.name} im in class {first.state.class}
    </div>
  )
}

export default About