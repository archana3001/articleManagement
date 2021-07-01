import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';



export function ArticleList(){
   const[data, setData]=useState([]);
   let getToken=0;
   let timeAgo1=0;
   let timeAgo2=0;
   const history=useHistory();
   useEffect(()=>{
     if(localStorage.getItem('user-info')){
      getToken=localStorage.getItem('user-info');
      console.log(getToken);
     }
     //console.log(user-info);
     getData();
}, []);
//  console.log(data[0]);

async function getData(){
  let result=await fetch('https://conduit.productionready.io/api/articles')
    .then(response => response.json())
    .then( (data) => {
      console.log(typeof(data))
     setData(data.articles);
   }).catch(error => console.log('error', error));
   timeAgo1 = moment(data.createdAt).format('LLLL');
   timeAgo2=moment(data.updatedAt).format('LLLL');
}

// sort
data.sort(sortByProperty("createdAt"));
function sortByProperty(property){
   return function(a,b){
      if(a[property] > b[property])
         return 1;
      else if(a[property] < b[property])
         return -1;

      return 0;
   }
}

async function  deleteOperation(slug){
console.log("Article delete request!!", slug);

fetch('https://conduit.productionready.io/api/articles/'+slug,{
  method: 'DELETE',
  headers: {
    "Content-Type": 'application/json',
     "Authorization":`Bearer ${localStorage.getItem('user-info')}`
  }
}) .then((response) => response.json())
  .then((messages) => {console.log("messages");});

getData();
}

  return(
    <>
    <Header/>
    <div className="col-sm-6 offset-sm-3">
    <ul>
      {data.map((item) => (
        <>
        <hr/>
        <li>{item.title}
         <br/>slug: {item.slug}
         <br/>createdAt: <span className="date timeago" title={ timeAgo1 }>{ timeAgo1 }</span><br/>
         updatedAt:<span className="date timeago" title={ timeAgo2 }>{ timeAgo2 }</span>

        <br/>
        <p>{item.body}</p>
        <button type="delete" className="btn btn-danger" onClick={()=> deleteOperation(item.slug)}>Delete</button>
        </li>
        <hr/>
        </>
      ))}
    </ul>
    </div>
    </>
  )
}

export default ArticleList;
