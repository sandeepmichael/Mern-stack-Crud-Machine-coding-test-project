import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CreateEmployee = () => {
    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phno, setPhno] = useState('');
    const [designation, setDesignation] = useState('')
    const [gender, setGender] = useState('')
    const[course, setCourse] = useState('')
    const[file, setFile] = useState('')
  


  const Employeehandler = async() => {
    
    const formData = new FormData();
      formData.append('file', file)
      formData.append('name', name);
      formData.append('email', email)
      formData.append('phno', phno)
      formData.append('designation', designation)
      formData.append('gender', gender)
      formData.append('course', course);
    //   const employeedetails = {
    //     name, email, phno, designation, gender, course, formData
    // }
    try{

    
    const res = await axios.post("http://localhost:5000/api/employee/createemployee", formData)
    console.log(res.data);
    toast.success('employee added successfully')
    }catch(error){
      toast.error('employee wit this email already exist')
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
<label for="exampleFormControlInput1" class="form-label">Mobile No</label>
<input type="text" class="form-control" value={phno} onChange={(e) => {setPhno(e.target.value)}}  placeholder="Enter Mobilenumber"/>
</div>

<div className='mb-3'>
  <select  className="form-select" value={designation} onChange={(e) => setDesignation(e.target.value)}>
      <option>Designation</option>
      <option>HR</option>
      <option>Manager</option>
      <option>Sales</option>


  </select>

</div>

<div className='mb-3'>
<label for="exampleFormControlInput1" class="form-label">Gender</label>
<div class="form-check">
  <input class="form-check-input" value="Male" onChange={(e) => setGender(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" value="Female" onChange={(e) => setGender(e.target.value)} name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>


</div>

   <div className='mb-3'>
   <label for="exampleFormControlInput1" class="form-label">Course</label>

   <div class="form-check">
  <input class="form-check-input" value="MCA" onChange={(e) => setCourse(e.target.value)} type="checkbox" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    MCA
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" value="BSC" onChange={(e) => setCourse(e.target.value)} type="checkbox"  id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    BSC
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" value="BCA" onChange={(e) => setCourse(e.target.value)} type="checkbox"  id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    BCA
  </label>
</div>



   </div>

   <div className='mb-3'>
   <div class="mb-3">
  <label for="formFile" class="form-label">Please Provide Image (JPG/PNG only)</label>
  <input class="form-control" name="file" onChange={(e) => setFile(e.target.files[0])} type="file" id="formFile"/>
</div>

   </div>


 

<div class="mb-3">
 <button type="submit" onClick={Employeehandler} class="btn btn-primary mb-3">Submit</button>
</div>


   </div>
  )
}

export default CreateEmployee