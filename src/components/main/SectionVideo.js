import React from 'react'
import { Row,Col,Container} from 'react-bootstrap';
import styled from "styled-components";

function SectionVideo() {
    return (
       
            <Container>
            <Row>
                <Col md={4}>
                    <LeftSection>
                        <div id="column">
                        <h2>Hello Welcome...</h2>
                        <p>Morocco like you've never seen it before </p>
                        <button id="findOut">Find Out</button>
                        </div>
                    </LeftSection>
                </Col>
                <Col md={8}>
                <video id="vid" autoPlay playsInline muted src="./videos/main.mp4"  />
                </Col>
            </Row>
            </Container>
        
    )
}

export default SectionVideo

const LeftSection=styled.div`
    background-color:#F1F1F1;
    margin-top:95px;
    height:300px;
    text-align:center;
`;
