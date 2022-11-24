import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ title }) => {
    return (
        <>
        <NavLink to='/'>Home</NavLink>/{title}

    </>
  )
}

export default Navigation