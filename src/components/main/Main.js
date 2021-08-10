import React from 'react'
import SectionVideo from './SectionVideo'
import PopularGuides from './PopularGuides'
import { useHistory } from "react-router-dom";
import ClientMenu from './ClientMenu';


function Main() {
    let history = useHistory();
    return (
        <div>
             {/* test if  user is connect */}
            {localStorage.getItem('userInfo') !== null ?   <div><ClientMenu/><SectionVideo/><PopularGuides/></div> : history.push("/login")}
        </div>
    )
}

export default Main
