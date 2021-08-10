import React, { Component } from 'react'
import {Card,Container,Row,Col,Button} from 'react-bootstrap';
import SideBar from './SideBar';
import axios from 'axios';
import styled from "styled-components";


export default class Reservations extends Component {

    state={
        reservations:[]
    }
    componentDidMount(){
        const id = JSON.parse(localStorage.getItem('userInfo')).id;
        axios.get(`http://127.0.0.1:8000/api/v1/get-reservation/${id}`).then(res=>{
           this.setState({reservations:res.data});
         
        }).catch(error => {console.log(error)})
    }
     

    render() {
       
        return (
            <div>
                 <Container fluid >
                
                <Row>
               
                    <Col md={2} >
                      <SideBar/>
                    </Col>
                    <Col md={8}>
                    <h1 className="hrProfile">Reservations</h1>
                        <ResDiv>
                            {
                              this.state.reservations.map(el => (
                                <Card mt="4" className="crd">
                                    <Card.Header as="h5" >Reservation from {el.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>date reservation {el.date_res}</Card.Title>
                                        <Card.Text>
                                        Email :  {el.email}
                                        </Card.Text>
                                        <Button variant="success" onClick={()=>{
                                            axios.patch('http://127.0.0.1:8000/api/v1/update-is_accept-reservation', { id: el.id }).then(res=>{
                                                window.location.reload();
                                             }).catch(error => {console.log(error)})
                                             
                                        }}>Accept</Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                        </ResDiv>
                    </Col>
                    <Col md={2}>
                    
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
const ResDiv=styled.div`
height: 500px;
overflow-y: auto;
overflow-x: hidden;
background-color: #f5f5f5;

`;