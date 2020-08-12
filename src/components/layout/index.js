import React from 'react'
import Toolbar from '../toolbar/index'
import classes from './layout.module.css'

const layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={classes.layout}>
        {props.children}
      </main>
    </>
  )
}

export default layout
