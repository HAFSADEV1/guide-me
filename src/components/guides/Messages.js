import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import SideBar from './SideBar';
import styled from "styled-components";
import axios from 'axios';
import { FaTelegramPlane } from "react-icons/fa";

export default class Messages extends Component {
    state={
        messages:[],
        selectedMsg:[],
        clientId:0,
        message:""
    }
    

    componentDidMount(){
        const id = JSON.parse(localStorage.getItem('userInfo')).user.id;
        axios.get(`http://127.0.0.1:8000/api/v1/guides-messages/${id}`).then(res=>{
           console.log(res.data);
            ///remove duplicate guides des
            const uniqueGuides = [...new Map(res.data.map(item => [item.src_user, item])).values()];
           this.setState({messages:uniqueGuides});
        }).catch(error => {console.log(error)})
        
    }
    refersh = () =>{
        
        const id = JSON.parse(localStorage.getItem('userInfo')).user.id;
         axios.get(`http://127.0.0.1:8000/api/v1/messages/${id}/${this.state.clientId}`).then(res=>{
          this.setState({selectedMsg:res.data});
          }).catch(error => {console.log(error)})
     }
     sendMsg = async () =>{
        let guideId=JSON.parse(localStorage.getItem('userInfo')).user.id;
        let item={"src_user":guideId,"des_user":this.state.clientId,"msg":this.state.message}
        let result=await fetch("http://127.0.0.1:8000/api/v1/sendMessage",{
              method:'POST',
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json",
              },
              body:JSON.stringify(item)
        });
        result = await result.json();
        this.setState({message:""})
        this.refersh();
 
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={2} sm={12}>
                      <SideBar/>
                    </Col>
                    <Col md={10}>
                    <Container>
                        <Row>
                            <Col md={4} sm={12}>
                            <LeftChat>
                                {/* <input type="text" className="searchMsg" placeholder="Search" /> */}
                                {this.state.messages.map(el=>(
                                        <Content
                                        onClick={()=>
                                        {
                                            this.setState({clientId:el.source.id});
                                            const id =JSON.parse(localStorage.getItem('userInfo')).user.id;
                                            console.log(el);
                                            axios.get(`http://127.0.0.1:8000/api/v1/messages/${id}/${el.source.id}`).then(res=>{
                                            this.setState({selectedMsg:res.data});
                                            }).catch(error => {console.log(error)})
                                        }
                                        }
                                        >
                                        <UserImg src={el.source.avatar}/>
                                        <Name>{el.source.name}</Name>
                                    </Content>
                                    ))}
                            </LeftChat>
                            </Col>
                            <Col md={8}>
                                <RightChat>
                                    { 
                                    this.state.selectedMsg.map(el => 
                                    el.src_user==this.state.clientId ?
                                    <RightMsg><span className="lftsp">{el.msg}</span></RightMsg>   :
                                    <LeftMsg><span className="rtsp">{el.msg}</span></LeftMsg>
                                    )}
                                </RightChat>
                                <input type="text" value={this.state.message} id="inptSend1" onChange={(e)=>this.setState({message:e.target.value})}/>
                                <button id="btnSend" onClick={this.sendMsg}>Send &ensp;<FaTelegramPlane/></button>
                            </Col>
                        </Row>
                    </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const LeftChat=styled.div`
height: 500px;
overflow-y: auto;
overflow-x: hidden;
margin-left: -5px;
background-color: #f5f5f5;
margin-top:20px;
`;
const RightChat=styled.div`
height: 470px;
overflow-y: auto;
overflow-x: hidden;
margin-left: -5px;
background-color: #f9f9f9;
margin-top:20px;
width:650px;
`;
const UserImg=styled.img`
border-radius: 28px;
width: 50px;
height: 50px;
margin-left: 1vw;
margin-top:14px;
object-fit: cover;
object-position: 50% 50%;
`;

const Name=styled.label`
margin-left: 0.5vw;
font-weight:bold;
margin-top:14px;

`;

const Content=styled.div`
background-color:#f9f9f9;
width:350px;
height:80px;
margin:2px;
margin:auto;
cursor:pointer;
&:hover{
    background-color:#E6E6EA;
  }
`;
const LeftMsg=styled.div`
float:left;
border-radius:10px;
min-width:200px;
min-height:30px;
width:100%;
`;

const RightMsg=styled.div`
float:right;
border-radius:10px;
min-width:200px;
min-height:30px;
width:100%;
`;