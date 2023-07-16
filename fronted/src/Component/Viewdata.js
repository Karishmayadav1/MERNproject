import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

function Viewdata() {
    const[data,setData] = useState();
   
    

    const getData=()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5002/showdata", requestOptions)
            .then(response => response.json())
            .then(result => {setData(result)})
            .catch(error => console.log('error', error));
     }
      useEffect(()=>{
     getData();
    },[])

    //function for delete data 
    const del = (e, deleted)=>{
        e.preventDefault();
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch("http://localhost:5002/delete/"+deleted, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            alert(deleted+"data delete with this id");

    }
     

  return (

    <div className='Container'>
        <div className='content'>
        <table border='1'>
        <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                {/* <th>phone</th>
                <th>password</th> */}
            </tr>
        </thead>
        <tbody>
        {
            data?(
                data.map((data,index)=>(
                    <tr  key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td> */
                         <td>{data.password}</td>
                        <button onClick={(e)=>{del(e,data._id)}}>Delete</button>
                        <Link to = {{pathname:'/editdata/'+data._id}}><u>Edit</u></Link>
                     
                    </tr>

                ))

            ):""
        }

        </tbody>

        </table>
        </div>
    </div>
  )
}

export default Viewdata;