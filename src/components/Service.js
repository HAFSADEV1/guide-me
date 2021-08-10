import React from 'react'
import { Row,Col,Container} from 'react-bootstrap';

import Menu from './Menu';

function Service() {
    return (
        <div id="serv">
       <Menu/>
            <h2 className="titre">Professional Services</h2>
            <p className="subtitre">Popular professional services</p>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="sec">
                            <img src="../images/serv1.png" className="servImg"/>
                            <h3>800+ Our Local Guides</h3>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="sec">
                            <img src="../images/serv2.png" className="servImg"/>
                            <h3>Online reservation</h3>
                        </div>
                    </Col>
                    <Col md={4}>
                       <div className="sec">
                            <img src="../images/serv3.png" className="servImg"/>
                            <h3>Customer Support</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Service
