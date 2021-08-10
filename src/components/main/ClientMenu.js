import React,{useState} from 'react'
import { Nav,Navbar,Container,NavDropdown,Button,FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaSistrix} from 'react-icons/fa';
import { useHistory} from "react-router-dom";

function ClientMenu() {
    let history = useHistory();
    const [key,setKey]=useState("");
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top"  id="navbarClient">
            <Navbar.Brand href="#"><img src="../images/GuideMeLogo.png" alt="logo" className="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container>
                    <Navbar.Brand>
                    <InputGroup>
                                <Button id="bntGrp1" >
                                 <FaSistrix id="searchIcon" />
                                 </Button>
                                    <FormControl
                                    placeholder="Search by name or by city "
                                    aria-describedby="basic-addon2"
                                    id="inptGrp"
                                    onChange={(e)=>setKey(e.target.value)}
                                    />
                                    <Button  id="bntGrp"
                                    >
                                    <a href={`http://localhost:3000/find/${key}`} id="srLink">Search</a> 
                                    </Button>
                        </InputGroup>
                    </Navbar.Brand>
                    <Nav id="centerMenu">
                    <Nav.Link className="topLi" href="/main">Home</Nav.Link>
                    <Nav.Link className="topLi" href={`http://localhost:3000/chat/${JSON.parse(localStorage.getItem('userInfo')).user_id}`}>Messages</Nav.Link>
                    <Nav.Link className="topLi" href="http://localhost:3000/favorite">Favorite</Nav.Link>
                    {JSON.parse(localStorage.getItem('userInfo')).user.is_admin === 1 ? <Nav.Link className="topLi" href="http://localhost:3000/verify">Verify Guides</Nav.Link> : <Nav.Link className="topLi" href="/customer-reservations">Reservations</Nav.Link>}
                    
                    <Nav.Link>
                        <NavDropdown  title={<img alt="img" src={JSON.parse(localStorage.getItem("userInfo")).user.avatar} id="profileImg" />} >
                            <NavDropdown.Item href="">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="">Setting</NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={()=>{localStorage.removeItem("userInfo");  history.push("/login");}}>Log Out</NavDropdown.Item>
                        </NavDropdown>    
                    </Nav.Link>
                    </Nav>
                </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default ClientMenu
