import React,{useState} from 'react'
import { Form,Row,Col,Container} from 'react-bootstrap';
import { FaChalkboardTeacher} from 'react-icons/fa';
import { useHistory } from "react-router-dom";

import Menu from './Menu';

function AddGuid() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [avatar,setAvatar]=useState("");
    const [city,setCity]=useState("");
    const [tel,setTel]=useState("");
    const [adresse,setAdresse]=useState("");
    const [cin,setCin]=useState("");
    const [minprice,setMinprice]=useState("");
    const [coverpic,setCoverpic]=useState("");
    const [description,setDescription]=useState("");
    let history = useHistory();
    
    
    async function register(){
        const formData=new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('avatar',avatar);
        formData.append('password',password);
        formData.append('ville',city);
        formData.append('tel',tel);
        formData.append('cin',cin);
        formData.append('adresse',adresse);
        formData.append('prix_min',minprice);
        formData.append('description',description);
        formData.append('cover_img',coverpic);
        let result=await fetch('http://127.0.0.1:8000/api/v1/registerGuide',{
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
        <div className="formBox2">
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
                            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col md={6}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" onChange={(e)=>setCity(e.target.value)}/>
                        </Col>
                        <Col md={6}>
                            <Form.Label>phone number</Form.Label>
                            <Form.Control type="email" placeholder="phone number" onChange={(e)=>setTel(e.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col md={6}>
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type="text" placeholder="Enter Adresse" onChange={(e)=>setAdresse(e.target.value)}/>
                        </Col>
                        <Col md={6}>
                            <Form.Label>CIN </Form.Label>
                            <Form.Control type="text" placeholder="Enter Cin" onChange={(e)=>setCin(e.target.value)} />
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
                             <Form.Control type="file" onChange={e=>setAvatar(e.target.files[0])}/>
                        </Col>
                    </Row>
                    <Row>
                    <Col md={6}>
                             <Form.Label>Min price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price"  onChange={(e)=>setMinprice(e.target.value)}/>
                        </Col>
                    <Col md={6}>
                            <Form.Label>Cover Picture</Form.Label>
                             <Form.Control type="file" onChange={e=>setCoverpic(e.target.files[0])}/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row>
                        <Col md={12}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                   
                                    as="textarea"
                                    placeholder="Leave a Description here"
                                    style={{ height: '100px' }}
                                    onChange={(e)=>setDescription(e.target.value)}
                                    />
                        </Col>
                    </Row>
                    <div className="til">
                    <button className="submitButton" onClick={register}>Submit &ensp;<FaChalkboardTeacher/></button>
                    </div>
                </Form.Group>
            </Container>
        </div>
    )
}

export default AddGuid
