import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

export function SignIn(){
  const [email, setEmail]=useState(" ");
  const [password, setPassword]=useState(" ");
  const history=useHistory();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      history.push("./articles");
    }
  }, [])

  async function signin(){
    let user={email, password}
    let obj={user}
    console.warn(obj);
   let result=await fetch('https://conduit.productionready.io/api/users/login',{
     method: 'POST',
     headers: {
       "Content-Type": 'application/json'
     },
     body: JSON.stringify(obj)
   });

   result=await result.json();
   const getToken=result.user.token;
   console.log(getToken);
   localStorage.setItem('user-info',JSON.stringify(result));
   history.push("./articles");
  }

  return(
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3">
    <br/>
    <br/>
     <h1>SignIn</h1>
     <br/>
     <br/>
      <input type="email" className="FormControl"onChange={(e)=>setEmail(e.target.value)}/>
      <br/>
      <br/>
      <input type="password" className="FormControl" onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <br/>
      <button className="btn btn-primary" onClick={signin}>SignIn</button>
      <br/>
    </div>
    </>
  )
}
export default SignIn;
