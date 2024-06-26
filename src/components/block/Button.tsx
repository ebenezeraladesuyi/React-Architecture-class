import React from 'react'

interface iButton {
    text: string,
} 

const Button:React.FC<iButton> = ({text}) => {
  return (
    <button style={{padding:"10px", height:"40px", borderRadius:"6px", backgroundColor:"lightblue", color:"white"}}>
        {text}
    </button>
  )
}

export default Button