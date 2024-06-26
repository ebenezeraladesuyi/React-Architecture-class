// import React from 'react'

import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import styled from "styled-components";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const HEader = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show)
  }


  return (
    <div style={{width:"100%", height:"70px", backgroundColor:"green", color:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>

      <div style={{width:"90%", display:"flex", justifyContent:"space-between", alignItems:"center", position:"relative" }}>

          <h5 style={{fontSize:"17px", fontWeight:"600"}}>LOGO</h5>

          <Desk style={{fontSize:"17px", fontWeight:"600", display:"flex", gap:"30px", alignItems:"center"}}>
            <NavLink to="/" style={{color:"white"}}>
              <Nav>Home</Nav>
            </NavLink>

            <NavLink to="/about" style={{color:"white"}}>
              <Nav>About</Nav>
            </NavLink>

            <NavLink to="/contact" style={{color:"white"}}>
              <Nav>Contact</Nav>
            </NavLink>
          </Desk>

          {show ?
            <Menu onClick={toggle}>
              <MdOutlineClose />
            </Menu>
          :
            <Menu onClick={toggle}>
                <RiMenu5Fill />
            </Menu>
          }


          {/* mobile */}
          { show ? 
            <Mobile>
              <NavLink to="/" style={{color:"white"}}>
                <Nav2>Home</Nav2>
              </NavLink>

              <NavLink to="/about" style={{color:"white"}}>
                <Nav2>About</Nav2>
              </NavLink>

              <NavLink to="/contact" style={{color:"white"}}>
                <Nav2>Contact</Nav2>
              </NavLink>

            </Mobile>
          : 
            null
          }

      </div>
    </div>
  )
}

export default HEader

const Menu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 25px;
  }
`;

const Desk =  styled.div`

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Nav =  styled.ol`

@media screen and (max-width: 768px) {
  display: none;
}
`;

const Mobile = styled.div`
position: absolute;
width: 280px;
height: 320px;
background-color: gray;
border-radius: 10px;
top: 65px;
right: 0px;
display: flex;
flex-direction: column;
/* gap: 15px; */
`;

const Nav2 = styled.ol`
padding: 15px;
margin-left: 20px;
`;