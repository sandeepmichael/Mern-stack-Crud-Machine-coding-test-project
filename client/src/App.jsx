import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registercomponent from './components/Registercomponent'
import NavbarComponent from './components/Navbarcomponent';
import LoginComponent from './components/Logincomponent';
import DashboardComponent from './components/Dashboardcomponent';
import CreateEmployee from './components/Createemployee';
import EmployeeDetails from './components/Employeedetails';
import EditEmployee from './components/Editemployee';
import HomeComponent from './components/Homecomponent';
function App() {

  return (
     <div>

        <BrowserRouter>
        <NavbarComponent />

              <Routes>
            <Route path="/dashboard" Component={DashboardComponent}/>
            <Route path='/' Component={HomeComponent}/>
            <Route path='/employeedetails' Component={EmployeeDetails}/>
            <Route path='/update/:id' Component={EditEmployee}/>
            <Route path='/createemployee' Component={CreateEmployee}/>
           <Route path='/register' Component={registercomponent}/>
            <Route path='/login' Component={LoginComponent}/>
           </Routes>
        </BrowserRouter>
        <ToastContainer />
     </div>
  )
}

export default App
