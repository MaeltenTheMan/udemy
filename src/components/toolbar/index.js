import React from 'react'
import classes from './toolbar.module.css'
import NavigationItems from '../navigation/navigationItems'

const toolbar = () => {
  return(
    <header className={classes.toolbar}>
      <div>Menu</div>

      <div>Logo</div>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar
