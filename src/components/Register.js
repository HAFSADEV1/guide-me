import React,{useState} from 'react'
import { Form,Row,Col,Container} from 'react-bootstrap';
import { FaChalkboardTeacher} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Menu from './Menu';
import { useHistory } from "react-router-dom";


function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [avatar,setAvatar]=useState("");
    const [country,setCountry]=useState("");
    const [tel,setTel]=useState("");
    let history = useHistory();
    
    
   async function register(){
        //The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values
        const formData=new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('avatar',avatar);
        formData.append('password',password);
        formData.append('pays',country);
        formData.append('tel',tel);
        let result=await fetch('http://127.0.0.1:8000/api/v1/registerClient',{
            method:'POST',
            body:formData
        });
        if(result.status === 201){
            history.push('/login');
        }
        else{
            alert("ERROR!!!");
        }
    }

    return (
        <div className="formBox">
            <Menu/>
            <Container>
                <div className="til">
                <h1 className="titre">Create an account</h1>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col md={6}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
                        </Col>
                        <Col md={6}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col md={6}>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter country" onChange={(e)=>setCountry(e.target.value)}/>
                        </Col>
                        <Col md={6}>
                            <Form.Label>phone number</Form.Label>
                            <Form.Control type="email" placeholder="phone number" onChange={(e)=>setTel(e.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Row>
                        <Col md={6}>
                             <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                        </Col>
                        <Col md={6}>
                            <Form.Label>Avatar</Form.Label>
                             <Form.Control type="file" placeholder="Enter password" accept=".jpg,.png" onChange={e=>setAvatar(e.target.files[0])}/>
                        </Col>
                    </Row>
                <div className="til">
                    <button className="submitButton" onClick={register} >Submit &ensp;<FaChalkboardTeacher/></button>
                   <br/> <Link to="/addguide">Create a guide account</Link>
               </div>
                </Form.Group>
            </Container>
        </div>
    )
}

export default Register
