// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, HEader } from "../components"

const HomeLayout = () => {
  return (
    <div>
        <HEader />

        <Outlet />

        <Footer />
    </div>
  )
}

export default HomeLayout