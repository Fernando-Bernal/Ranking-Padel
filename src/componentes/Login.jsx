import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";


function Login() {
  const navigate = useNavigate();
  const [userAccount, setUser] = useState({
    email: "",
    password: "",
  });
  const { signIn } = UserAuth();
  const { googleSignIn } = UserAuth();
  const handleChanges = (e) => {
    setUser({ ...userAccount, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await signIn(userAccount.email, userAccount.password);
      navigate("/usuario");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Wrapper2>
        <LoginH2>Iniciar sesion </LoginH2>
        <form onSubmit={handleSubmit}>
          <div>
            <LoginLabel >Dirección Email:</LoginLabel>
            <Input name="email" onChange={handleChanges} type="email" />
          </div>
          <div>
            <LoginLabel>Contraseña:</LoginLabel>
            <Input name="password" onChange={handleChanges} type="password" />
          </div>
          <LoginBtn>Iniciar Sesion</LoginBtn>
          <LoginBtn>¿Olvidaste tu contraseña?</LoginBtn>
        </form>
        <LoginBtnGoogle onClick={handleGoogleSignIn}>
          <SVGgoogle
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </SVGgoogle>{" "}
          Iniciar Sesion con Google
        </LoginBtnGoogle>
      </Wrapper2>
    </div>
  );
}

export default Login;


const Wrapper2 = styled.div`
padding: 20px 30px;
background-color: rgba(227, 235, 232, 0.771);
width: 450px;
height: 450px;
max-width: 450px;
box-sizing: border-box;
border-radius: 10px;
box-shadow:  0px 0px 10px 3px rgba(0,0,0,0.59);
@media (max-width: 768px) {
  max-width: 280px;
  display: block;
  margin-bottom: 15px;
}
`
const LoginH2 = styled.h2`
color: #333;
text-align: center;
margin: 0;
padding: 0;
margin-bottom: 25px;
`
const LoginLabel = styled.label`
display: block;
font-size: 20px;
text-shadow: rgb(102, 102, 102) 1px 1px 1px;
padding: 13px 0px;
`

const LoginBtn = styled.button`
margin: 45px 20px 20px;
font-size: bolt;
border-radius: 5px;
background-color: rgba(29, 157, 114, 0.22);
@media (max-width: 768px) {
  margin: 10px auto;
  display: flex;
}
`

const LoginBtnGoogle = styled.button`
background-color: rgba(229, 54, 54, 0.88);
color: white;
font-weight: 700;
padding: 3px;
margin-left: 5rem;
margin-top: 7px;
border-radius: 10px;
@media (max-width: 768px) {
  margin: 10px auto;
  display: flex;
}
`
const SVGgoogle = styled.svg`
@media (max-width: 768px) {
  margin: 5px 4px 0 0;
}
`
const Input = styled.input`
padding: 10px;
border-radius: 5px;
border: none;
background-color: #f1f1f1;
margin-bottom: 10px;
width: 100%;
font-size: 16px;
color: #666;
`

