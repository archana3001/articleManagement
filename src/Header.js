
import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import {NavBar, Nav, NavDropdown} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Register from './Register';
import SignIn from './SignIn';
import Articles from './Articles';
import ArticleList from './ArticleList';

function Header() {
  const history=useHistory();
    let user=JSON.parse(localStorage.getItem('user-info'));
    function logout(){
      localStorage.clear();
      history.push('/SignUp');
    }

  return(
    <div>
    <Navbar  bg="dark" variant="dark">
      <Navbar.Brand href="#home">Article Management</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
        {
          localStorage.getItem('user-info') ?
          <>
            <Link to="/articles">Articles</Link>
            <br/>
            <Link to="/articlelist">ArticleList</Link>
            <Nav>
          <NavDropdown title="logout" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={logout} >LOGOUT</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          </>
          :
          <>
          <Link to="/login">Login</Link>
          <br/>
            <Link to="/signup">SignUp</Link>
        </>
      }
      </Nav>
    </Navbar>
</div>
  )

}




export default Header;
