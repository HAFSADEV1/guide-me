import React, { Component } from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import SideBar from './SideBar';


export default class Dashboard extends Component {
    render() {
        return (
            <Container fluid >
                <Row>
                    <Col md={4}>
                      <SideBar/>
                    </Col>
                    <Col md={8}>
                       <h1>WELCOME..</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}
