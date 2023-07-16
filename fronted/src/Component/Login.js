import React, { useState,useEffect} from 'react'
import{Link, useNavigate} from 'react-router-dom';
import {useParams}  from 'react-router-dom';


function Login() {
    const[email,setEmail] = useState('');
    const[password,setPassword]= useState('');
    const navigate = useNavigate();

    
    const loginId=(e)=>{
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var data= JSON.stringify({
        "email":email,
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
      };

      fetch("http://localhost:5002/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.status==false){
            alert(result.message);
          }
          else{
            const _id=result.data._id;
            localStorage.setItem("userToken",_id);
            navigate('/profilepage');
          }
        })
        
        .catch(error => console.log('error', error));
        // alert("success");
        
    }


  return (
    <div className='login-card'>
      <h1>Login </h1>
        <form onSubmit={(e)=>loginId(e)}>
        <input 
            type="text" 
            placeholder='email' 
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br></br>
        <input 
           type="text"
            placeholder='password'
             value={password} 
             onChange={(e)=>{setPassword(e.target.value)}}
        />
         <br></br>
        <button type="submit">submit</button>

        </form>
    </div>
  )
}

export default Login