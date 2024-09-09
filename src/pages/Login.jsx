import React from 'react'
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import LoginButton from '../components/LoginButton';
import SocialloginButton from '../components/SocialloginButton';


  //rafce 치면됨.
const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <div className="login-form">
        <InputField />
        <PasswordField />
        <LoginButton />
        <p className="signup-link">
          계정이 없으신가요? <a href="#">가입하기</a>
        </p>
        <p className="or-divider">or</p>
        <SocialloginButton />
      </div>
    </div>
  )
  }

export default Login;