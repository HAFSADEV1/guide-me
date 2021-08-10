import React, {useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl} from 'react-bootstrap';
import styled from 'styled-components';
import { FaTelegramPlane,FaTimes} from "react-icons/fa";
import { useParams } from "react-router-dom";
 
export default function Send({name,image,idUser}) {
    const [message,setMessage]=useState("");
    const [content,setContent]=useState("");
    const [show,setShow]=useState(true);
  
    
 async  function sendMsg(){
    let cliId=JSON.parse(localStorage.getItem('userInfo')).user_id;
    let item={"src_user":cliId,"des_user":idUser,"msg":message}
    let result=await fetch("http://127.0.0.1:8000/api/v1/sendMessage",{
          method:'POST',
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
          },
          body:JSON.stringify(item)
    });
    result = await result.json();
    setContent(message);
}

    return (
        <div>
            {show? 
              <Message>
              <GuidInfo>
                 <GuidImg src={image ? image : "https://via.placeholder.com/150"} />
                 <Name>{name}</Name>
                 <CancelIcon onClick={()=>setShow(false)}/> 
              </GuidInfo>
            <Content>
                <Msg>
                   {content}
                </Msg>
            </Content>
           <InputGroup >
              <FormControl as="textarea" style={{ height: '50px' }}
               onChange={(e)=>setMessage(e.target.value)}
              />
              <InputGroup.Prepend style={{ height: '50px'}}
              
              >
              <InputGroup.Text><SendIcon onClick={sendMsg}/></InputGroup.Text>
              </InputGroup.Prepend>
          </InputGroup>
          </Message>: null
        
        }
      
        </div>
    )
}

const Message=styled.div`
margin:auto;
width:250px;
background-color:white;
height:300px;
position: relative;
z-index: 2;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const SendIcon=styled(FaTelegramPlane)`
color:#243666;
margin-left:10px;
font-size:30px;
cursor:pointer;
margin-right:10px;
`;
const CancelIcon=styled(FaTimes)`
color:white;
float:right;
font-size:22px;
margin:5px;
cursor:pointer;
`;

const GuidInfo=styled.div`
background-color:#243666;

`;
const GuidImg=styled.img`
width:50px;
border-radius:25px;
height:50px;
margin:5px;
`;
const Name=styled.label`
color:white;
`;

const Content=styled.div`
height:200px;
text-align:center;
`;
const Msg=styled.label`
background-color:#D8D5DB;
min-width:100px;
border-radius:20px;
float:right;
margin:10px;

`;