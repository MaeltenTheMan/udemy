import React from 'react'
import classes from './navigationItem.module.css'

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : ''}>{props.label}</a>
    </li>
  )
}

export default navigationItem
