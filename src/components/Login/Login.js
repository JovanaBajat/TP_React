import React from 'react';
import './Login.scss';
import Button from '../Button/Button.js'

const Form = () => {
  return (
    <div className="wrapper-login-page">
      <div className="wrapper-login">
        <div className="login">
          <div className="input">
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
          </div>
          <p className="password-infos">Password must contain minimum 4 characters</p>
          <p className="password-forgoten">Forgot password?</p>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Form;
