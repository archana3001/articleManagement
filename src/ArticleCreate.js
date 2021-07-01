import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

export function ArticleCreate(){
  const [title, setTitle]=useState(" ");
  const [description, setDescription]=useState(" ");
  const [body, setBody]=useState(" ");
  const [tagList, setTag]=useState(" ");
  let getToken=0;
  const history=useHistory();
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
     getToken=localStorage.getItem('user-info');
     console.log(getToken);
    }
}, []);

  async function handle(){
    let article={title, description, body, tagList}
    let obj={article}
    console.warn(obj);
     fetch('https://conduit.productionready.io/api/articles', {
     method: 'POST',
     body: JSON.stringify(obj),
     headers:{
       "Content-Type": 'application/json',
       "Accept": 'application/json',
       "Authorization":`Bearer ${getToken}`
     }
   }) .then((response) => response.json())
     .then((messages) => {console.log("messages");});
  }
  return(
    <>
    <div className="col-sm-6 offset-sm-3">
    <br/>
    <br/>
     <h1>Create Article</h1>
     <br/>
     <br/>
     Title:
     <br/>
     <input type="text" className="FormControl" onChange={(e)=>setTitle(e.target.value)}/>
     <br/>
     <br/>
     Description:
     <br/>
      <input type="text" className="FormControl" onChange={(e)=>setDescription(e.target.value)}/>
      <br/>
      <br/>
      Body:
      <br/>
       <input type="text" className="FormControl"onChange={(e)=>setBody(e.target.value)}/>
       <br/>
       <br/>
       TagList:<br/>
      <input type="text" className="FormControl" onChange={(e)=>setTag(e.target.value)}/>
      <br/>
      <br/>
      <button className="btn btn-primary" onClick={handle}>Create Article</button>
    </div>
    </>
  )
}
export default ArticleCreate;
