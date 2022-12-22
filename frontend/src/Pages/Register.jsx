import React from 'react';
import { useForm } from "react-hook-form";
import styled from "styled-components";
import {Link} from "react-router-dom"
function Register() {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <RegistionWrapper>
                <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                    <HeadingWrapper>Registration</HeadingWrapper>  
                    <LabelWrapper>
                        <label htmlFor="">
                            First Name
                        </label>
                            <InputWrapper  {...register("firstName", { required: true, maxLength: 20 })} />
                            <label htmlFor="">Last Name</label>
                            <InputWrapper {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            <label htmlFor="">Email</label>
                            <InputWrapper type="email" {...register("email",{required:true})} />
                            <label htmlFor="">Password</label>
                            <InputWrapper type="password" {...register("password",{min:6,max:15})} />
                            <TypeSubmitWrapper  type="submit" value={"Sign Up"} />
                        <span>Already have an account?<Link to='/login' >Login</Link></span>
                    </LabelWrapper>
                </FormWrapper>
                   
        </RegistionWrapper>
    );
}

export default Register

const RegistionWrapper=styled.div`
    display: flex;
 flex-direction: row;
  align-items: center;
  padding: 30px 74px;
  gap: 20px;
 position: absolute;
 width: 528px;
 height: 545px;
 left: 376px;
 top: 50px;
 background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
border-radius: 10px;
`
const HeadingWrapper=styled.h1`
    width: 108px;
height: 24px;
/* Wireframes / Title / T1 */
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 14px;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`

const FormWrapper = styled.form`
/* Auto layout */
display: flex;
border:1px solid #ccc;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 10px;
width: 530px;
height: 503px;
/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
`
const LabelWrapper=styled.div`
    display: flex;
    border:1px solid red;
   flex-direction: column;
 align-items: center;
 padding: 0px;
 gap: 15px;
 width: 450px;
height: 490px;

`
const InputWrapper=styled.input`
    width:380px;
    height:25px;
    font-family: 'Lato';
 font-style: normal;
 padding:5px;
 font-size:17px
`
const  TypeSubmitWrapper=styled.input`
    /* padding:20px; */
    width:380px;
    height:45px;
    font-family: 'Lato';
 font-style: normal;
 font-size:20px;
 background:#000000;
 align-items:center;
 color:white;
 text-align:center;
 cursor:pointer;
`