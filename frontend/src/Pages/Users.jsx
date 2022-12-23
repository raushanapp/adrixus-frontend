import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import SearchSort from '../Components/SearchSort'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { searchApiCall, sortApiCall, userApiCall } from '../Redux/UserReducer/action';
import UserCard from '../Components/UserCard';
import Pagination from '../Components/Pagination';
function Users() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const [search, setSearch] = useState("");
  // search part 
  const searchHandle = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value)
    }
  }
  // sort part 
  const sortHandle = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value)
    }
  useEffect(() => {
    if (data?.length === 0) {
      dispatch(userApiCall())
    }
    else if (search === "-age" || search === "age") {
        dispatch(sortApiCall(search))
    }
    else {
      dispatch(searchApiCall(search))
    }
    
  },[data?.length, dispatch, search])
  
  return (
    <>
      <Navbar />
      <SearchWrapper>
        <SearchSort  searchHandle={searchHandle} sortHandle={sortHandle} />
      </SearchWrapper>
      <TableWrapper>
        <tr>
          <ThWrapper>No.</ThWrapper>
          <ThWrapper>Full Name</ThWrapper>
          <ThWrapper>Email</ThWrapper>
          <ThWrapper>Age</ThWrapper>
          <ThWrapper>Registration Date</ThWrapper>
        </tr>
        {data?.users?.length > 0 && data?.users.map((el, index) => (
          // <tbody>
            <UserCard key={el.id} index={index}data={el} />
          // </tbody>
          
        ))}
      </TableWrapper>
      {/* pagination section import here components */}
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
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

const PaginationWrapper=styled.div`
  display:flex;
  /* border:2px solid #ccc; */
  width:40%;
  height:40px;
  margin:auto;
  align-items:center;
  justify-content:space-between;
  gap:5px;
  border-radius:5px;
  padding:5px 0px 5px 0px;
  margin-top:30px;
  /* overflow:hidden; */
`