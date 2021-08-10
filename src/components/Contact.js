import React from 'react'
import { Form,Row,Col,Container} from 'react-bootstrap';
import { FaSignInAlt} from 'react-icons/fa'
import ClientMenu from './main/ClientMenu';
import Menu from './Menu';
import emailjs from 'emailjs-com';
function Contact() {

    function sendEmail(e){
        
        e.preventDefault();
        emailjs.sendForm('service_rjdhk8n','template_eza3kca',e.target,'user_YvQfeu2f9cxEwJOSRzbya').
        then(res=>{
           alert("message sent successfully");
        }).catch(err=>console.log(err));
    }
    return (
        <div className="formBox">
            {localStorage.getItem('userInfo') !== null ?   <ClientMenu/> : <Menu/>}
            <Container>
            <Form onSubmit={sendEmail}>
                <div class="til">
                <h1 className="titre">Contact Us</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col md={6}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" />
                        </Col>
                        <Col md={6}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="user_email" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col md={12}>
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                        as="textarea"
                                        placeholder="Leave a Message here"
                                        style={{ height: '100px' }}
                                        name="message"
                                        />
                            </Col>
                    </Row>
                    <div class="til">
                    <button className="submitButton" type="submit">Send &ensp;<FaSignInAlt/></button>
                    </div>
                </Form.Group>
            </Form>
            </Container>
        </div>
    )
}

export default Contact
