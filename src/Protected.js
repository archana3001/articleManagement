import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

export function SignIn(props){
  let Cmp=props.Cmp
  const history=useHistory();

  useEffect(()=>{
    if(!localStorage.getItem('user-info')){
      history.push("/signup");
    }
  }, [])

  return(
    <>
    <Cmp/>
    </>
  )
}
export default SignIn;
