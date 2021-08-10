import React from 'react'
import styled from "styled-components";
function Back() {
    return (
        <div>
            <Wrap>
                <ItemText>
                    <h1 className="title">Find your <span id="subtitle">Next tour</span></h1>
                    <p className="description">Morocco like you've never seen it before</p>
                </ItemText>
                <DownArrow src="/images/down-arrow.svg" />
            </Wrap>
        </div>
    )
}

export default Back




const Wrap=styled.div`
  width=100vw;
  height:100vh;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  background-image:url('images/bg.jpg');
  background-attachment: fixed;
  text-align:center;
 
`;
const ItemText=styled.div`
    padding-top:20vh;
    text-align:center;
    color:white;
`;
const DownArrow=styled.img`
height:40px;
cursor:pointer;
overflow-x:hidden;
animation:animateDown infinite 1s;
margin-top:24vw;
`;