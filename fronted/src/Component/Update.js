import React,{useState,useEffect} from 'react'
import{Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'

function Update() {
    const[data,setData] =useState('');
    const[name,setName]  =useState('');
    const[phone,setPhone] = useState('');
    const[email,setEmail] =useState(''); 
    const[password,setPassword] = useState('');

    var params = useParams();
    const edit = (e) =>{
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5002/EditData/"+params.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setName(result[0].name);
                setEmail(result[0].email);
                setPhone(result[0].phone);
                setPassword(result[0].phone);
            })
            .catch(error => console.log('error', error));

    }
    useEffect(() => {
      edit();
    }, [])
    
  // data update---
    const updateData=(e)=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "password": password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:5002/updateData/"+params.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            alert(result.acknowledged);
        })
        .catch(error => console.log('error', error));
            }

  
  return (
    <div className='update'>
      <h1>Update your Data</h1>
      <div className='updated'>
    <form onSubmit={updateData}>
         <input type='name' 
            placeholder='Name' 
            value={name} 
            onChange={(e)=>{setName(e.target.value)}}/>
     <br></br>
          <input type='email'
                placeholder='email' 
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>
                <br></br>
          <input type='phone'
                placeholder='phone' 
                value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}/>
     <br></br>
          <input type='Password'
                placeholder='password' 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
     <br></br>
          <button type='submit'>submit</button>
 </form>
 </div>
    </div>
  )
}

export default Update;