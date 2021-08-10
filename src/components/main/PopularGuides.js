import React, { Component } from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';
import { FaHeart,FaStar} from 'react-icons/fa';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import ClientMenu from './ClientMenu';
import axios from 'axios' 

export default class PopularGuides extends Component {

    state={
        guides:[],
    }
    componentDidMount(){

         axios.get("http://127.0.0.1:8000/api/v1/guides").then(res=>{
            this.setState({guides:res.data});
        });
        
    }

    render() {
        return (
            <div>
            <ClientMenu/>
            <Parent className="parent">
               <h2 className="titre">Most Popular Guides</h2>
               <Container>
                <Row>
                {this.state.guides.map(el => (
                <React.Fragment key={el.id}>
                    <Col md={4}>
                        <Card m={4} style={{ width: '18rem'}} id="card">
                            <Link to={`search/${el.id}`}><Card.Img variant="top" src={el.cover_img} id="imgTop"/></Link>
                            <Card.Body>
                                <Card.Title>
                                   <Link to={`search/${el.id}`}><img alt="img" src={el.avatar} className="cardProfile" /></Link> 
                                    <Name>{el.name}</Name>
                                    <FaStar id="fastar" />
                                    <Count>{ el.totalscore === null ? "" : parseFloat(el.totalscore).toFixed(1)}</Count>
                                </Card.Title>
                                <br/>
                                <Card.Text>
                                    <Description>{el.ville}</Description>
                                </Card.Text>
                                <br/> <br/> 
                                <CusomFooter>
                                <FaHeart id="fav" onClick={()=>{
                                         let all=JSON.parse(localStorage.getItem("fav"));
                                         let obj={id:el.id,avatar:el.avatar,ville:el.ville,name:el.name,cover_img:el.cover_img,totalscore:el.totalscore,prix_min:el.prix_min};
                                         all.push(obj);
                                         localStorage.setItem("fav",JSON.stringify(all));
                                  }}/>
                                  <PrixMin>STARTING AT &ensp;{el.prix_min}$</PrixMin>
                                </CusomFooter>
                                <Card.Footer>
                               
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>   
                </React.Fragment>))}
                </Row>
                </Container>
            </Parent> 
            </div>
        )
    }
}
const Name=styled.p`
float:left;
margin:10px 0 0 10px;
font-size:16px;
`;
const Parent=styled.div`
width: 70%;
margin: 0 auto;
text-align: center;
`;
const Count=styled.label`
  color: yellow;
  float: left;
  margin: 12px 0 0 3px;
  font-size:15px;
`;
const Description=styled.p`
float:left;
margin-top:24px;
margin-left:-36px;
`;
const CusomFooter=styled.div`
border-top:1px solid gray;

`;
const PrixMin=styled.label`
  float:right;
  text-transform: uppercase;
`;