import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/login.module.css"
import {loginAndSignUp} from "../loginAndSignUp/loginAndSignUp"

const signUp = () => {
  return (
    <div className={Style.login}>
    <div className={Style.login_box}>
      <h1>SignUp</h1>
      <loginAndSignUp/>
      <p className={Style.login_box_para}>
        New user? <a href="#">Create an account</a>
      </p>
    </div>
  </div>
  )
}
export default signUp;