import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const user = JSON.parse(localStorage.getItem("data")) ||'';
// const user = localStorage.getItem("data")||'';

function Navbar() {
  const navigate = useNavigate();
  const logout =useCallback (() => {
    navigate("/login");
    localStorage.removeItem("data");
  },[navigate])
  // console.log("navbar",user?.user?.first_name)
  return (
    <NavbarWrapper>
      <HedaingWrapper>User</HedaingWrapper>
      <AdminWrapper>
        <PtagWrapper>{`${user?.user?.first_name} | admin`}</PtagWrapper>
        {/* <p></p>  */}
        <ButtonWrapper onClick={logout}>Logout</ButtonWrapper>
      </AdminWrapper>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper= styled.div`
  display:flex;
  /* border:1px solid #ccc; */
  width:99.8%;
  height:20px;
  gap:40px;
  top:0px;
  padding:10px 0px 10px 0px;
  align-items:center;
  position:fixed;
  z-index:1;
  background:white;
  justify-content:space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
/* border-radius: 10px; */

`
const AdminWrapper= styled.div`
  display:flex;
  align-items:center;
  justify-content: space-around;
  gap:5px;
  width:20%;
`
const HedaingWrapper=styled.h1`
  width:40%;
  /* border:1px solid red; */
  font-family: 'Lato';
 font-style: normal;
 font-size:25px;
 opacity:0.6;
`
const PtagWrapper= styled.p`
   font-family: 'Lato';
 font-style: normal;
 font-size:20px;
 opacity:0.6;
`
const ButtonWrapper=styled.button`
  padding:4px;
  width:35%;
  background:none;
  border:none;
  cursor:pointer;
  border-radius:5px;
  font-family: 'Lato';
 font-style: normal;
 font-size:17px;
 opacity:0.6;
`