import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <h1>Pixel<span>Blog</span></h1>
      
      <div>
      <NavLink to="/">Início</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <Button text="Registre-se"/>
      </div>

      
    </nav>
  )
}

export default Navbar