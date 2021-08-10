import React, { Component } from 'react'
import styled from 'styled-components';
import { FaHome ,FaRocketchat,FaMapMarkedAlt,FaUser,FaArrowLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
export default class SideBar extends Component {
    render() {
        return (
            <Side>
                <NavList>
                   <NavItem><GuideImage src={JSON.parse(localStorage.getItem("userInfo")).user.avatar} /></NavItem> 
                   <NavItem><FaUser/> &ensp;<Link to="/profile" className="gdlink">Profile</Link></NavItem>
                   <NavItem><FaMapMarkedAlt/>&ensp;<Link to="/reservations" className="gdlink">Resrvations</Link></NavItem>
                   <NavItem><FaRocketchat/>&ensp;<Link to="/guides-messages" className="gdlink">Messages</Link></NavItem>
                   <NavItem><FaArrowLeft/>&ensp;<Link to="/login" className="gdlink" onClick={()=>{localStorage.removeItem("userInfo");}}>Log Out</Link></NavItem>
                </NavList>
            </Side>

        )}
}
const Side=styled.div`
background-color: #243666;
color: white;
height:650px;
width:190px;
margin-left:-2vw;
margin-bottom:-10vh;
@media(max-width:768px){
    height:300px;
    width:500px;
    margin-bottom:0;
   }
`;

const NavList=styled.ul`
display:block;
list-style:none;

`;

const GuideImage=styled.img`
width:110px;
height:110px;
border-radius:50px;
object-fit: cover;
object-position: 50% 50%;
margin-top:15px;
@media(max-width:768px){
    width:80px;
    height:80px;
   }
`;
const NavItem=styled.li`
padding-bottom:25px;
`;