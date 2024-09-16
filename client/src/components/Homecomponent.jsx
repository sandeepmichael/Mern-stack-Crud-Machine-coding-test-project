import React from 'react'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
   
  return (
    <div className='container mt-5'>
      <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Mern Stack Application</h5>
    <p class="card-text"></p>
    <Link to={'/register'} className='btn btn-primary'>Get Started</Link>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>

    </div>
  )
}

export default HomeComponent