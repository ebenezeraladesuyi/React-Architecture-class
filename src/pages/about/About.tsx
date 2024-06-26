// import React from 'react'

import { NavLink } from "react-router-dom"
import { Button } from "../../components"

const About = () => {
  return (
    <div style={{width:"100%", height:"50vh", backgroundColor:"", color:""}}>
      <h4 style={{marginBottom:"20px"}}>About</h4>

      <NavLink to="vacancy">
        <Button
          text="See Our Vacancies"
         />
      </NavLink>
    </div>
  )
}

export default About