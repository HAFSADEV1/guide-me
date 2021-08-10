import React from 'react'
import { Row,Col,Container} from 'react-bootstrap';

function Count() {
    return (
        <div className="blueContainer">
             <Container >
                <Row>
                    <Col md={3}>
                        <h2 className="cpt">55 +</h2>
                        <p className="cptTitle">Professional Tour Guides</p>
                    </Col>
                    <Col md={3}>
                         <h2 className="cpt">99 +</h2>
                        <p className="cptTitle">Traveling Experience</p>
                    </Col>
                    <Col md={3}>
                         <h2 className="cpt">133 +</h2>
                        <p className="cptTitle">Professional Tour Guides</p>
                    </Col>
                    <Col md={3}>
                         <h2 className="cpt">299 +</h2>
                          <p className="cptTitle">Happy Customers</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Count
