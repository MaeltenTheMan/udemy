import React from 'react'
import classes from './toolbar.module.css'

const toolbar = () => {
  return(
    <header className={classes.toolbar}>
      <div>Menu</div>

      <div>Logo</div>
      <nav>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </nav>
    </header>
  )
}

export default toolbar
