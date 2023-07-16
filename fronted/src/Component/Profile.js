import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();
    const [userToken,setUserToken] = useState('');

    useEffect(() => {
      
        
        if(!localStorage.getItem('userToken')){
            console.log("Token not avilable");
            setUserToken(localStorage.getItem('userToken'))    
            navigate("/login")
            
        }
        
    },[3000]);
    
  return (
    <div className='card'>
    <h1>profile</h1>
    <p>{userToken}</p>
       

    </div>
  )
}

export default Profile;