import React, {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const registercomponent = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const[password, setPassword] = useState('');



  const Registerhandler = async () => {
    const user = {
      name, email, password
    }
    
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', user)
      console.log(res)
      toast.success('Register Successfully Please Login')
      setEmail('')
      setName('')
      setPassword('');

      
    } catch (error) {
       console.log(error);

    }

  }


  return (
      <div className='container'>

       <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" value={name} onChange={(e) => {setName(e.target.value)}}  placeholder="Enter Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="form-control" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter password"/>
</div>
    

<div class="mb-3">
    <button type="submit" onClick={Registerhandler} class="btn btn-primary mb-3">Register</button>
  </div>

  <div>
				<p>Already Register? <a href="/login"> Login Here</a></p>
			</div>

      </div>
)  
}

export default registercomponent