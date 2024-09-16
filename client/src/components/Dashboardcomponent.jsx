import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const DashboardComponent = () => {
    const navigate = useNavigate('')
    const user = JSON.parse(localStorage.getItem('currentuser'))
    if(!user){
      window.location.href="/"
    }

  
  return (
    <div className='container mt-4'>
        <div style={{textAlign:'center'}}>
            <h3>Welcome to Admin Panel</h3>

        </div>

    </div>
  )
}

export default DashboardComponent