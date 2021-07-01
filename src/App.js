import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import Register from './Register';
import SignIn from './SignIn';
import Articles from './Articles';
import ArticleList from './ArticleList';
import Header from './Header';
import Protected from './Protected';
function App() {

  return(
    <Router>

         <Route path="/login">
           <SignIn />
         </Route>
         <Route path="/signup">
           <Register />
         </Route>
         <Route path="/articles">
         <Protected Cmp={Articles}/>
         </Route>
         <Route path="/articlelist">
         <Protected Cmp={ArticleList}/>
         </Route>
     </Router>
  )

}




export default App;
