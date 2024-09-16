import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const Loginhandler = async() => {
    const user = {
      email, password
    }
    try {
         const res = await axios.post('http://localhost:5000/api/users/login', user);
         console.log(res.data)
         localStorage.setItem('currentuser', JSON.stringify(res.data))
         window.location.href = "/dashboard"
          

      
    } catch (error) {
        console.log(error.response)
        toast.error('something went wrong or user not exist')
    }

  }

  // const user = localStorage.getItem('currentuser');
  // if(user){
  //    window.location.href='/dashboard'
  // } else{
  //   alert("please login")
  // }


  return (
    <div className='container'>
    <div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
<input type="email" class="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}  placeholder="name@example.com"/>
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Password</label>
<input type="password" class="form-control" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder="Enter password"/>
</div>
 

<div class="mb-3">
 <button type="submit" onClick={Loginhandler} class="btn btn-primary mb-3">Login</button>
</div>

   </div>
  )
}

export default LoginComponent