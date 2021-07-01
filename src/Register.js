import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

export function Register(){
  const [username, setName]=useState(" ");
  const [email, setEmail]=useState(" ");
  const [password, setPassword]=useState(" ");
  const history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      history.push("./articles");
    }
  }, [])

  async function signup(){
    let user={username, email, password}
    let obj={user}
    console.warn(obj);
   let result= await fetch('https://conduit.productionready.io/api/users', {
     method: 'POST',
     body: JSON.stringify(obj),
     headers:{
       "Content-Type": 'application/json',
       "Accept": 'application/json'
     }
   })
   result=await result.json();
   localStorage.setItem('user-info', JSON.stringify(result));
   history.push("/articles");
   console.warn(result);
  }
  return(
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3">
    <br/>
    <br/>
     <h1>SignUp</h1>
     <br/>
     <br/>
     <input type="text" className="FormControl" onChange={(e)=>setName(e.target.value)}/>
     <br/>
     <br/>
      <input type="email" className="FormControl"onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <br/>
      <input type="password" className="FormControl" onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <br/>
      <button className="btn btn-primary" onClick={signup}>SignUp</button>
    </div>
    </>
  )
}
export default Register;
