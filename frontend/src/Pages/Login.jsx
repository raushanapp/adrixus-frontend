import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginApiCall } from '../Redux/AuthReducer/action';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.data);

    const sendingRequest = () => {
        console.log(email, password)
        if (email && password) {
            dispatch(loginApiCall({ email, password }))
                .then((r) => {
                    if (r.type === "LOGIN_SUCCESS") {
                        console.log(user,"localstorage")
                        localStorage.setItem("data", JSON.stringify(user));
                        alert("Login Successfully")
                        navigate("/users/dashborad")
                    }
                    else {
                        alert("Please check email and pasword")
                        navigate("/login")
                        
                    }
            });
        }
        // setEmail("")
    }
    
    console.log(user,"user")
  return (
      <MainWrapper>
        <HeadingWrapper>Log In</HeadingWrapper>
        <LabelWrapper htmlFor="email">Email</LabelWrapper> 
          <Input1Wrapper type="email" value={email} name="email" id="email" placeholder='Enter email'
            onChange={(e)=>setEmail(e.target.value)}
          />
        <LabelWrapper htmlFor="password">Password</LabelWrapper> 
          <Input1Wrapper type="password" name="password" id="password" placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
          />
          {/* forget Password to do  */}
          <ForgetWrapper>Forget Password ?</ForgetWrapper>
        <ButtonWrapper  onClick={sendingRequest}>Login</ButtonWrapper>
        <span>Don't have account? <Link to='/'>Register</Link></span>
    </MainWrapper>
  )
}

export default Login

const MainWrapper=styled.div`
    position: absolute;
width: 528px;
height: 406px;
display: flex;
flex-direction: column;
align-items:center;
/* gap: 5px; */
justify-content:space-around;
left: 376px;
top: 60px;
padding:20px;
background: #FFFFFF;
/* Shadow / level 1 */
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
border-radius: 10px;
/* line-height:5px; */
`
const HeadingWrapper=styled.h1`
/* position: absolute; */
width: 74px;
height: 24px;
/* margin-left: 50px; */
top: 30px;
/* Wireframes / Title / T1 */
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */
color: #000000;
`
const Input1Wrapper=styled.input`
    width:80%;
    height:35px;
    border-radius:5px;
    margin-top:-10px;
    padding-left:10px;
    font-family: 'Lato';
    font-style: normal;
    font-size: 18px;
`
const LabelWrapper=styled.label`
    font-family: 'Lato';
    font-style: normal;
    font-size: 18px;
    margin-left:-365px;
`
const ButtonWrapper= styled.button`
    padding:10px;
    width:80%;
    font-family: 'Lato';
    font-style: normal;
    font-size: 20px;
    border:1px solid #ccc;
    border-radius:5px;
    background:#000000;
    color:white;
    cursor:pointer;
`
const ForgetWrapper=styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-size: 18px;
    margin-top:-15px;
    margin-left:300px
`