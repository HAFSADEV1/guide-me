import React, { Component } from 'react'
import axios from 'axios';
import styled from "styled-components";
import {Row,Col,Container,Form} from 'react-bootstrap';
import { FaTelegramPlane ,FaStar} from "react-icons/fa";
import ClientMenu from './ClientMenu';
import Rating from '../Rating/Rating';
import Send from '../chat/Send';



export default class Guide extends Component {

    state={
        guide:{},
        userInfo:{},
        comments:[],
        haveComments:false,
        show:false,
        bookingSrc:"../images/booking.svg"
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/v1/guides/${id}`).then(res=>{
            this.setState({guide:res.data});
            this.setState({userInfo:res.data.user});
            if(res.data.comments !==null){
                this.setState({haveComment:true});
                this.setState({comments:res.data.comments});
            }
            
        }).catch(error => {console.log(error)})
        ///get Comments
        axios.get(`http://127.0.0.1:8000/api/v1/getGuideComments/${id}`).then(res=>{
            
            if(res.data.length>0){
                this.setState({comments:res.data});
                this.setState({haveComments:true});
            }
            
        }).catch(error => {console.log(error)})
    }
             booking = async() =>{
                        const guid_id =parseInt(this.props.match.params.id);
                        const client_id=JSON.parse(localStorage.getItem('userInfo')).id;
                        let item={client_id,guid_id};
                        let result=await fetch("http://127.0.0.1:8000/api/v1/reservation",{
                            method:'POST',
                            headers:{
                                "Content-Type":"application/json",
                                "Accept":"application/json",
                            },
                            body:JSON.stringify(item)
                    });
                    result = await result.json();
                   if(result.hasOwnProperty('client_id')){
                       this.setState({bookingSrc:"../images/greenBooking.svg"})
                   }
                }
    render() {
        return (
            <div>
            <ClientMenu/>
            <Container>
            <Row>
                <Col md={6}>
                    <LeftSection>
                        <Col md={12}>
                         <UserImg alt="img" src={this.state.userInfo.avatar} alt="" />
                          <Name>{this.state.userInfo.name}</Name> 
                          <img alt="booking" src={this.state.bookingSrc} id="booking" onClick={this.booking}/>
                        </Col>
                        <Col md={12}>
                       <CoverImg src={this.state.guide.cover_img} alt="" />
                       </Col>
                    </LeftSection>
                </Col>
                <Col md={6}>
                    <RightSection>
                        <h2 className="titre">Description</h2>
                        <p>{this.state.guide.description}</p>
                        <SendButton onClick={()=>this.setState({show:true})}>Quick message&ensp;<FaTelegramPlane/></SendButton>
                    </RightSection>
                    {this.state.show ?<SendMsg> <Send image={this.state.userInfo.avatar} name={this.state.userInfo.name} idUser={this.state.userInfo.id}/></SendMsg> : null}
                </Col>
                <Col md={12}>
                    <h3>Commetns !</h3>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {
                        this.state.haveComments ? 
                            this.state.comments.map(el=>(
                               <div>
                                      <UserImg alt="img" src={el.clientAvatar} alt="" />
                                       <Name>{el.clientName}</Name>
                                       <p>{el.content}</p>
                                       <hr></hr>
                               </div>
                            ))
                          
                         : <h6>No Comment yet!</h6>
                    }
                </Col>
            </Row>
            <Rating/>
            
        
        </Container>
        </div>
        )
    }
}
const LeftSection=styled.div`
margin-top:120px;
`;
const RightSection=styled.div`
margin-top:160px;
background-color: #f5f5f5;
height:340px;
margin-left:-50px;
text-align:center;
`;
const UserImg=styled.img`
width: 50px;
height: 50px;
border-radius: 40px;
object-fit: cover;
object-position: 50% 50%;
margin-bottom:10px;
`;
const Name=styled.label`
margin-left:12px;
`;
const CoverImg=styled.img`
width:420px;
`;
const SendButton=styled.button`
background-color:#243666;
color:white;
float:right;
border-radius: 7px;
border:none;
outline:none;
margin:0 25px 10px 10px;
height:35px;
width:170px;
position: absolute;
right:    0;
bottom:   0;
`;
const Rate=styled(FaStar)`
color:yellow;
margin-left:10px;
font-size:19px;
`;
const Scrore=styled.label`
color:yellow;
margin-left:5px;
`;
const SendMsg=styled.div`
margin-top:-350px;
z-index:100;
float:right;
margin-right:-100px;
`;
