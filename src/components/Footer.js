import React from 'react'
import styled from "styled-components";
import { FaFacebook,FaTwitter,FaGooglePlusG,FaLinkedinIn} from 'react-icons/fa';
import { Row,Col,Container} from 'react-bootstrap';


function Footer() {
    return (
       
             <Wrap>
               <ButtomLogo><img src="../images/footerLogo.png" id="footerLogo" /></ButtomLogo>
               <ul className="footerList">
                   <li className="listItem">Home</li>
                   <li className="listItem">Contact US</li>
                   <li className="listItem">Services</li>
                   <li className="listItem">Become a Guide</li>
               </ul>
               <Container>
                   <Row>
                       <Col md={3}>
                          <p id="cpy">&copy; 2021 Created by Hafsa</p>
                       </Col>
                       <Col md={3}>
                          
                       </Col>
                       <Col md={6}>
                                    <ul className="footerList">
                                    <li>Fllow US</li>
                                    <li className="listItem "><a href="https://www.facebook.com/"><FaFacebook className="buttomIcon"/></a></li>
                                    <li className="listItem"><a href="https://www.facebook.com/"><FaTwitter className="buttomIcon"/></a></li>
                                    <li className="listItem"><a href="https://www.facebook.com/"><FaGooglePlusG className="buttomIcon"/></a></li>
                                    <li className="listItem"><a href="https://www.facebook.com/"><FaLinkedinIn className="buttomIcon"/></a></li>
                                    </ul>
                        </Col>
                   </Row>
                   </Container>
            </Wrap>
       
    )
}

export default Footer

const Wrap=styled.footer`
background-color: #243666;
text-align:center;
margin-top:10vh;

`;
const ButtomLogo=styled.h1`
color:white;
`;
    
