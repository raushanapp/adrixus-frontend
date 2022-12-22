import React from 'react'
import styled from"styled-components"
function UserCard({data,index}) {
  return (
    <tr>
          <TdWrapper>{ index+1}</TdWrapper>   
          <TdWrapper>{ `${data.first_name}  ${data.last_name}`}</TdWrapper>   
          <TdWrapper>{ data.email}</TdWrapper>   
          <TdWrapper>{ data.age}</TdWrapper>   
          <TdWrapper>{ data.register_date}</TdWrapper>   
    </tr>
  )
}

export default UserCard
const TdWrapper=styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`