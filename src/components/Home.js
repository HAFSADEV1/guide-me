import React,{useEffect}from 'react'
import Back from './Back';
import Service from './Service';
import Count from './Count';
import Destination from './Destination';
import Menu from './Menu';
import { useHistory } from "react-router-dom";


function Home() {
    let history = useHistory();
    useEffect(() => {
        // Update the document title using the browser API
        if(localStorage.getItem('fav') === null){
            localStorage.setItem('fav',JSON.stringify([]));
        }
      },[]);
    return (
        <div>
             {/* test if  user is connect */}
             {localStorage.getItem('userInfo') !== null ? 
               history.push("/main") : <div>
               <Menu/>
               <Back/>
               <Service/>
               <Count/>
               <Destination/>
               </div>}
           
        </div>
    )
}

export default Home
