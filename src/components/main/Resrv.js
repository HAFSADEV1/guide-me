import React, { Component } from 'react'
import axios from 'axios';
import {Card,Container} from 'react-bootstrap';
import ClientMenu from './ClientMenu';

export default class Resrv extends Component {

    state={
        reservations:[]
    }

    componentDidMount(){
        const client_id=JSON.parse(localStorage.getItem('userInfo')).id;
        axios.get(`http://127.0.0.1:8000/api/v1/customer-reservations/${client_id}`).then(res=>{
            this.setState({reservations:res.data});
         }).catch(error => {console.log(error)})
    }
    render() {
        return (
            <div className="min-height">
                <ClientMenu/>
                <Container id="resMt">
                        <h1 className="hrProfile">Your Reservations</h1>
                        {
                              this.state.reservations.map(el => (
                                <Card mt="4" className="crd">
                                    <Card.Header as="h5" >Date Rservations {el.date_res}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Guide Email :  {el.email}
                                        </Card.Title>
                                        <Card.Text>
                                            {el.is_accept ===0 ? <span id="red">Pending</span> : <span id="green">Accepted</span>}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }     
                        </Container>       
                        </div>
        )
    }
}
