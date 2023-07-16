import React,{useState} from 'react';
import '../App.css';

function Registration() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[password,setPassword] = useState('');

    const postData=(e)=>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "name": name,
        "email": email,
        "phone": phone,
        "password":password
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:5002/postApi", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }


  return (
    <div className='card'>
        <h1>Registration</h1>
    <form onSubmit={postData}>
        <input
            type="name"
            placeholder='name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
        />
        <br></br>
        <input
            type='email'
            placeholder='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br></br>
        <input
            type='tel'
            placeholder='phone'
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
        />
        <br></br>
        <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br></br>
        <button type='submit'>submit</button>
    </form>

    </div>
  )
}

export default Registration;