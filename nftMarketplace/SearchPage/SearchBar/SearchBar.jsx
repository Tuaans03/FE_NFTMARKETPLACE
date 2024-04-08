import React from 'react'
import {BsArrowRight, BsSearch} from 'react-icons/bs'

//INTERNAL IMPORT 
import Style from "./SearchBar.module.css"


export const SearchBar = () => {
  return (
    <div className={Style.SearchBar}>
        <div className={Style.SearchBar_box}>
            <BsSearch className={Style.SearchBar_box_icon}/>
            <input type="text" placeholder='type your keyword'/>
            <BsArrowRight className={Style.SearchBar_box_icon}/>
        </div>
    </div>
  )
}
