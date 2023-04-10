import React from 'react'
import styled from 'styled-components'
const SHeader = styled.header`
  display:flex;
  width:100%;
  height: 40px;
  background: red;
`
const SDiv = styled.div`
  flex: 1;
  display: flex;
  heigth: 100%;
  align-items: center;
  justify-content: center;
`

function Header() {
    return (
        <SHeader>
            <SDiv>전체 회원</SDiv>
            <SDiv>3주간 미참석</SDiv>
        </SHeader>
    )
}

export default Header
