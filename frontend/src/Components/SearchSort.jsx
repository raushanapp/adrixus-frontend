import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {CiSearch} from "react-icons/ci"
// import { useDispatch, useSelector } from 'react-redux';
// import { searchApiCall } from '../Redux/UserReducer/action';
function SearchSort({searchHandle,sortHandle}) {
    // const [search, setSearch] = useState();
    // const dispatch = useDispatch();
    // const data = useSelector(state => state.user.data);
    // const searchHandle = (e) => {
    //     if (e.key === 'Enter') {
    //         setSearch(e.target.value);
    //     }
    // }
    
    // useEffect(() => {
    //     if (data?.length !== 0) {
    //         dispatch(searchApiCall(search))
    //     }
    // }, [ data?.length,dispatch, search])
    // console.log(search)
    // console.log(data)

  return (
      <>
          <SearchDivWrapper>
              <CiSearch fontSize='25px' />
              <InputWrapper type="text"  placeholder='Search by first name'onKeyPress={searchHandle} />
          </SearchDivWrapper>
          
          {/* sort */}
          <SelectWrapper name="sortByAge" id="age" onChange={sortHandle} >
              <option value="">Sort By Age</option>
              <option value="age">Low To High</option>
              <option value="-age">High To Low</option>
          </SelectWrapper>
      </>
  )
}

export default SearchSort

const SearchDivWrapper = styled.div`
    display:flex;
    align-items:center;
    border:1px solid #ccc;
    width:40%;
    justify-content:space-around;
    /* gap:5px; */
    padding:10px;
    border-radius:5px;
   
`
const InputWrapper=styled.input`
    width:90%;
    height:28px;
    border:none;
    font-family: 'Lato';
    font-style: normal;
    font-size:19px;
    padding-left:5px;
    outline:none;
`
const SelectWrapper= styled.select`
    display:flex;
    align-items:center;
    width:20%;
    text-align:center;
    height:35px;
    font-family: 'Lato';
    font-style: normal;
    font-size:18px;
    border-radius:5px;

`