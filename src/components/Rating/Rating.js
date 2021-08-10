import React,{useState,useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from 'axios';


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


function Rating() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [content, setContent] = useState("");
    const [isreserv, setIsreserv] = useState(false);
    
    let { id } = useParams();
    let cliId=JSON.parse(localStorage.getItem('userInfo')).id;

    const stars = Array(5).fill(0)
    
    useEffect(() => {
       axios.get(`http://127.0.0.1:8000/api/v1/get-reservation/${cliId}/${id}`).then(res=>{
       if(res.data !== ""){
        setIsreserv(true);
       }
      });
    },[]);

    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
    
    async function comment(){
        
        let comment={"client_id":cliId,"guid_id":parseInt(id),"content":content}
        let result=await fetch("http://127.0.0.1:8000/api/v1/comment",{
              method:'POST',
              headers:{
                  "Content-Type":"application/json",
                  "Accept":"application/json",
              },
              body:JSON.stringify(comment)
        });
        result = await result.json();
        if(currentValue !== 0){
                let rateObj={"client_id":cliId,"guid_id":parseInt(id),"score":currentValue}
                let result=await fetch("http://127.0.0.1:8000/api/v1/rate",{
                  method:'POST',
                  headers:{
                      "Content-Type":"application/json",
                      "Accept":"application/json",
                  },
                  body:JSON.stringify(rateObj)
            });
       }
        window.location.reload();
  }

    return (
      <div style={styles.container}>
        <h2> Rate this Guide </h2>
        <div style={styles.stars}>
          {isreserv ? stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }} 
              />
            )
          }) : ""}
        </div>
        <textarea
          placeholder="Leave a comment !"
          style={styles.textarea}
          onChange={e=>setContent(e.target.value)}
        />
  
        <button
          style={styles.button}
          onClick={comment}
        >
          Submit
        </button>
      </div>
    );
}

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
      color:"white",
      backgroundColor:"#243666",
    }
  
  };

  
export default Rating
