import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../assets/organization.png'
import './Navigation.styles.scss'

const Navigation = () => {
  return (
    <>
    <div className='navigation-container'>
        <Link className='logo-container' to='/'>
            <img src={Logo} alt='logo' className='logo'/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation