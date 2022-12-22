import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import SearchSort from '../Components/SearchSort'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { userApiCall } from '../Redux/UserReducer/action';
import UserCard from '../Components/UserCard';
function Users() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  // const [users,setUsers] =useState()
  const [serach, setSearch] = useState("");
  const searchHandle = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value)
    }
  }
  useEffect(() => {
    if (data?.length === 0) {
      dispatch(userApiCall())
    }
    
  },[data?.length, dispatch])
  console.log(data)
  return (
    <>
      <Navbar />
      <SearchWrapper>
        <SearchSort searchHandle={searchHandle} />
      </SearchWrapper>
      <TableWrapper>
        <tr>
          <ThWrapper>No.</ThWrapper>
          <ThWrapper>User Name</ThWrapper>
          <ThWrapper>Email</ThWrapper>
          <ThWrapper>Age</ThWrapper>
          <ThWrapper>Registration Date</ThWrapper>
        </tr>
        {data?.users?.length > 0 && data?.users.map((el, index) => (
          <tbody>
            <UserCard key={index} index={index}data={el} />
          </tbody>
          
        ))}
      </TableWrapper>
      
    </>
  )
}

export default Users
const SearchWrapper=styled.div`
  display:flex;
  /* border:1px solid #ccc;  */
  width:80%;
  height:35px;
  margin:auto;
  justify-content:space-between;
  padding:10px;
  margin-top:70px;
  border-radius:5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);
border-radius: 10px;
`
const TableWrapper=styled.table`
   font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin:auto;
  padding:20px 0px 30px 0px;
  /* padding:20px; */
  margin-top:20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.11);

`
const ThWrapper=styled.th`
   border: 1px solid #ccc;
  text-align: left;
  padding: 15px;
`