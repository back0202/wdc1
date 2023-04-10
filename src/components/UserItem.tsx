import React from 'react'
import styled from 'styled-components'
import { GiMountainClimbing } from 'react-icons/gi';

const SIconContainer = styled.div`
  width:42px;
  height:42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgray;


`

const SUserItem = styled.div`
  display:flex;
`

const SUserInfo = styled.div`
padding-top: 5px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  p + p{
    color: gray;
  }
`
function UserItem() {
    return (
        <div>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>

            </SUserItem>
            <SUserItem>
                <SIconContainer>

                    <GiMountainClimbing />


                </SIconContainer>

                <SUserInfo>
                    <p>백광천</p>
                    <p>960202</p>
                </SUserInfo>
            </SUserItem>
        </div>
    )
}

export default UserItem
