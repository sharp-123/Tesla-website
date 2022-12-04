import React from 'react'
import {Link} from 'react-router-dom'
import style from './MenuItems.module.css'
const MenuItems = props => {
  return (
    <ul className={`${style.menu} ${style.middle__menu}`}>
      {props.products &&
        props.products.map((el, i) => {
          return <Link key={i} to={`/${el}`}>{el}</Link>
        })}
    </ul>
  )
}

export default MenuItems