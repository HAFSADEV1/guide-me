import React from 'react'
import { Row,Col,Container} from 'react-bootstrap';

function Destination() {
    return (
        <div className="til">
             <h2 className="titre">Best Destination </h2>
             <p className="subtitre">Popular professional services</p>
             <Container>
                <Row>
                    <Col md={4}>
                        <div className="dv">
                            <h6 className="dvTitle">Tanger,Morrocco</h6>
                            <img src="../images/tanger.jpg" className="dvImage"/>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="dv">
                            <h6 className="dvTitle">Desert,Morrocco</h6>
                            <img src="../images/sahra.jpg" className="dvImage"/>
                        </div>
                    </Col>
                    <Col md={4}>
                       <div className="dv">
                            <h6 className="dvTitle">the blue city,chefchaouen</h6>
                            <img src="../images/chawen.jpg" className="dvImage"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Destination
