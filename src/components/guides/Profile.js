import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import styled from "styled-components";
import SideBar from './SideBar';
import { FaCheck } from "react-icons/fa";


export default class Profile extends Component {

    state={
        guide:JSON.parse(localStorage.getItem('userInfo'))
    }
    
    
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                          <SideBar/>
                        </Col>
                        
                        <Col md={10}>
                        <h1 className="hrProfile">Your Profile</h1>
                            <Row>
                                <Col md={5}>
                                <Wrap>
                                <CoverImg src={this.state.guide.cover_img}/><br/>
                                <Avatar src={this.state.guide.user.avatar}/>
                                 <h4>{this.state.guide.user.name}</h4>
                                 <Ville>{this.state.guide.ville}</Ville><br/>
                                 <Tel>{this.state.guide.tel}</Tel>
                                 <IsVerified>{this.state.guide.valid === 1 ? <span id="verify"><FaCheck/>&ensp;Verified</span> : <Pending>Pending</Pending>}</IsVerified>
                                 </Wrap>
                                </Col>
                                <Col md={7}>
                                   <Wrap>
                                       <Info>
                                           <label><b>Email :</b> {this.state.guide.user.email}</label><br/> <hr/>
                                           <label><b>Address :</b> {this.state.guide.adresse}</label><br/> <hr/>
                                           <label><b>CIN :</b> {this.state.guide.cin}</label><br/> <hr/>

                                       </Info>
                                       <label> <b>Description :</b></label><br/>
                                       <p>
                                           {this.state.guide.description}
                                       </p>
                                   </Wrap>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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

const IsVerified=styled.div`

`;
const Wrap=styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
text-align:center;
margin-top:3vh;
min-height:400px;
`;
const Pending=styled.span`
color:red;
`;
const Info=styled.div`

`;