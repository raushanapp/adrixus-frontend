import React from 'react'
import styled from "styled-components";
import{MdNavigateNext,MdNavigateBefore} from"react-icons/md"
function Pagination() {
  return (
    <>
      <ButtonWrapper>
        <MdNavigateBefore/>
      </ButtonWrapper>
      <PageWrapper>1</PageWrapper>
      <PageWrapper>2</PageWrapper>
      <PageWrapper>....</PageWrapper>
      <PageWrapper>3</PageWrapper>
      <PageWrapper>4</PageWrapper>
      <PageWrapper>5</PageWrapper>
      <PageWrapper>6</PageWrapper>
      <PageWrapper>7</PageWrapper>
      <PageWrapper>8</PageWrapper>
      <PageWrapper>9</PageWrapper>
      <PageWrapper>10</PageWrapper>
      <ButtonWrapper>
        <MdNavigateNext/>
      </ButtonWrapper>
    </>
  )
}

export default Pagination

const ButtonWrapper = styled.div`
  /* background:none; */
  border:1px solid #ccc;
  padding:0px 3px 0px 2px;
  text-align:center;
  font-size:22px;
  border-radius:5px;
  cursor:pointer;
  /* background:#000000; */
  opacity:0.9;
  color:black;
`
const PageWrapper=styled.p`
  border:1px solid #ccc;
  padding:0px 5px 0px 4px;
  text-align:center;
  font-size:22px;
  border-radius:5px;
  /* cursor:pointer; */
  /* background:#000000; */
  opacity:0.9;
  /* color:black; */
`