import React,{useState} from 'react'
import { Row,Col,Container,Form} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Menu from './Menu';


function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    let history = useHistory();
   
   async function userLogin(){
          if(email === "" || password === ""){
            setError("email and password is required");
            return;
          }
          let item={email,password};
          let result=await fetch("http://127.0.0.1:8000/api/v1/login",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json",
                },
                body:JSON.stringify(item)
          });
          result = await result.json();
          console.log(result);
          if(result.hasOwnProperty('error')){
           setError("Email Or Password Incorrect!");
          }
          else if(result.hasOwnProperty('cin')){
              localStorage.setItem("userInfo",JSON.stringify(result));
              history.push("/profile");
          }
          else {
            localStorage.setItem("userInfo",JSON.stringify(result));
            history.push("/main");
          }
          
        
    }
    return (
        <div>
            <Menu/>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className="formLogin">
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <input type="email" placeholder="Enter email" className="inpt"
                             onChange={(e)=>setEmail(e.target.value)}
                             required
                            />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            
                        <input type="password" placeholder="Enter password" className="inpt" required
                         onChange={(e)=>setPassword(e.target.value)}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Error>{error}</Error>
                        <button onClick={userLogin}  id="logButton">Login</button>
                        </div>
                    </Col>
                    <Col md={5}>
                          <img id="imgLogin" src="../images/login.png" alt="login image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login

const Error=styled.p`
color:red;
`;