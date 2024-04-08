import React from 'react'

//INTERNAL IMPORT
import Style from './Button.module.css'


export const Button = ({btnName,handleClick}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={ () => handleClick() } >
        {btnName}
      </button>
    </div>
  )
}
