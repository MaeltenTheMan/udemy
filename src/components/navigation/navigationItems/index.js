import React from 'react'
import NavigationItem from '../navigationItem/index'
import classes from './navigationItems.module.css'

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active label='Test1' />
      <NavigationItem link='/' label='Test2' />
    </ul>
  )
}

export default navigationItems
