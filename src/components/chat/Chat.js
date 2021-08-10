import React, { Component } from 'react'
import styled from "styled-components";
import { FaTelegramPlane } from "react-icons/fa";
import { Col,Row,Container} from 'react-bootstrap';
import axios from 'axios';
import ClientMenu from '../main/ClientMenu';

export default class Chat extends Component {
    state={
        messages:[],
        selectedMsg:[],
        guideId:0,
        message:""
    }
    


    componentDidMount(){
        const id = JSON.parse(localStorage.getItem('userInfo')).user_id;
        axios.get(`http://127.0.0.1:8000/api/v1/messages/${id}`).then(res=>{
           console.log(res.data);
            ///remove duplicate guides des
            const uniqueGuides = [...new Map(res.data.map(item => [item.des_user, item])).values()];
           this.setState({messages:uniqueGuides});
        }).catch(error => {console.log(error)})
    }
    ///for getting new messages where insert
    refersh = () =>{
        
       const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/v1/messages/${id}/${this.state.guideId}`).then(res=>{
         this.setState({selectedMsg:res.data});
         }).catch(error => {console.log(error)})
    }
     sendMsg = async () =>{
        let cliId=JSON.parse(localStorage.getItem('userInfo')).user_id;
        let item={"src_user":cliId,"des_user":this.state.guideId,"msg":this.state.message}
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
            <div>
                <ClientMenu/>
            <Container>
                <Row>
                    <Col md={4} >
                       <LeftChat>
                           <input type="text" className="searchMsg" placeholder="Search" />
                           {this.state.messages.map(el=>(
                                <Content
                                onClick={()=>
                                {
                                    this.setState({guideId:el.destination.id});
                                    const id = this.props.match.params.id;
                                    console.log(el);
                                    axios.get(`http://127.0.0.1:8000/api/v1/messages/${id}/${el.destination.id}`).then(res=>{
                                     this.setState({selectedMsg:res.data});
                                    }).catch(error => {console.log(error)})
                                }
                                }
                                 >
                                <UserImg src={el.destination.avatar}/>
                                <Name>{el.destination.name}</Name>
                               </Content>
                            ))}
                       </LeftChat>
                    </Col>
                    <Col md={8}>
                        <RightChat>
                   
                            { 
                               this.state.selectedMsg.map(el => 
                               el.src_user==this.state.guideId ?
                              <RightMsg><span className="lftsp">{el.msg}</span></RightMsg>   :
                              <LeftMsg><span className="rtsp">{el.msg}</span></LeftMsg>
                            )}
                        </RightChat>
                        <input type="text" value={this.state.message} id="inptSend" onChange={(e)=>this.setState({message:e.target.value})}/>
                        <button id="btnSend" onClick={this.sendMsg}>Send &ensp;<FaTelegramPlane/></button>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
const LeftChat=styled.div`
height: 500px;
overflow-y: auto;
overflow-x: hidden;
margin-left: -5px;
background-color: #f5f5f5;
margin-top:110px;
`;
const RightChat=styled.div`
height: 470px;
overflow-y: auto;
overflow-x: hidden;
margin-left: -5px;
background-color: #f9f9f9;
margin-top:110px;
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