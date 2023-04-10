import React from 'react'
import styled from 'styled-components'

const SButton = styled.button`
    border:none;
    width:80px;
    height:80px;
    border-radius: 50%;
    background-color: blue;
    font-size: 40px;
    color:white;
`
const SMenuContainer = styled.div`
position: fixed;
right:60px;
bottom: 80px;
`
const SMenu = styled.div`
    position: absolute;
    width:115px;
    top: -70px;
    left: -80px;
    border: 1px solid black;
    border-radius: 4px;
`
function Menu() {
    return (
        <SMenuContainer>
            <SMenu>
                <div>회원등록</div>
                <div>출석체크이미지</div>
                <div>출석체크 개인</div>
                <div>3주간 미참석 수정</div>
            </SMenu>
            <SButton>+</SButton>

        </SMenuContainer>
    )
}

export default Menu
