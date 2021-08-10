import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import styled from "styled-components";
import axios from 'axios';
import ClientMenu from '../main/ClientMenu';
import { FaCheck } from "react-icons/fa";

export default class Verify extends Component {
    state={
        unverifiedGuides:[]
    }
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/v1/guides-unverified`).then(res=>{
            this.setState({unverifiedGuides:res.data});
         }).catch(error => {console.log(error)})
    }
    render() {
        return (
            <div>
                <ClientMenu/>
                <Container className="unContent">
                <h1 className="hrProfile">Unverified Guides</h1>

                  {
                      this.state.unverifiedGuides.map(el => (
                        <Row>
                        <Col md={5}>
                        <Wrap>
                        <CoverImg src={el.cover_img}/><br/>
                        <Avatar src={el.user.avatar}/>
                         <h4>{el.user.name}</h4>
                         <Ville>{el.ville}</Ville><br/>
                         <Tel>{el.tel}</Tel><br/>
                         <AcceptButton
                            onClick={()=>{
                                axios.patch('http://127.0.0.1:8000/api/v1/update-isValid-guide', { id: el.id }).then(res=>{
                                    window.location.reload();
                                 }).catch(error => {console.log(error)})
                                 
                            }}
                            >Accept &ensp;<FaCheck/></AcceptButton>
                         </Wrap>
                        </Col>
                        <Col md={7}>
                           <Wrap>
                               <Info>
                                   <label><b>Email :</b> {el.user.email}</label><br/> <hr/>
                                   <label><b>Address :</b> {el.adresse}</label><br/> <hr/>
                                   <label><b>CIN :</b> {el.cin}</label><br/> <hr/>

                               </Info>
                               <label> <b>Description :</b></label><br/>
                               <p>
                                   {el.description}
                               </p>
                           </Wrap>
                        </Col>
                    </Row>
                      ))
                  }
                </Container>
            </div>
        )
    }
}

const Avatar=styled.img`
width:90px;
height:90px;
border-radius:50px;
object-fit: cover;
object-position: 50% 50%;
margin-top:-15px;
`;
const CoverImg=styled.img`
margin-top:15px;
width:320px;
height:170px;
object-fit: cover;
object-position: 50% 50%;
`;
const Ville=styled.label`
color:gray;
`;
const Tel=styled(Ville)``;


const Wrap=styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
text-align:center;
margin-top:3vh;
min-height:400px;
`;

const Info=styled.div`

`;
const AcceptButton =styled.button`
color:white;
background-color:#243666 ;
width:120px;
border-radius:15px;
border:2px solid white;
outline:none;
height:40px;
&:hover{
    background-color:#32CD32;
}
`;