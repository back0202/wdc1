import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const SHeader = styled.header`
  display:flex;
  width:100%;
  height: 40px;
  
  }
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

            <SDiv >
                <NavLink to="/AllMembers" style={{ textDecoration: "none", color: "black" }}>
                    전체 회원
                </NavLink>
            </SDiv>
            <SDiv>
                <NavLink to={"/"} style={{ textDecoration: "none", color: "black" }}>
                    달력
                </NavLink>
            </SDiv>
            <SDiv>
                <NavLink to="/NotPresent" style={{ textDecoration: "none", color: "black" }}>
                    3주간 미참석
                </NavLink>
            </SDiv>


        </SHeader >
    )
}

export default Header
