import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  const user = JSON.parse(localStorage.getItem('currentuser'));
  console.log(user)

  const Logouthandler = () => {
    localStorage.removeItem('currentuser')
    window.location.href='/login'
   // props.history.push('/login')
}
const Removeuserhandler = () => {
   localStorage.removeItem('currentuser')
    window.location.href='/'
}

  return (
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img onClick={Removeuserhandler} src="src/assets/react.svg" alt="" width="30" height="24"/>
    </a>
  </div>    

    {user ?<>  <ul class="navbar-nav ms-auto">
        <li class="nav-item"style={{textAlign:'center', marginRight:40}} >
            <Link  to='/employeedetails'>EmployeeList</Link>
          </li>
          <li class="nav-item"style={{textAlign:'center', marginRight:40}} >
            <button onClick={Removeuserhandler} className='btn btn-primary'>Home</button>
          </li>
        
       
      </ul>  <h4>{user.name}</h4>: <button  onClick={Logouthandler} className='btn btn-primary'>Logout</button></>:(<>
  
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-4">
            <Link to='/register'>Register</Link>
          </li>
        <li class="nav-item">
            <Link to='/login'>Login</Link>
          </li>
        
       
      </ul>
    </div>
    </>)}
  </div>
</nav>
    




      </>
  )
}

export default NavbarComponent