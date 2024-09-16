import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
const EditEmployee = () => {
    const {id} = useParams();
    const [name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phno, setPhno] = useState('');
    const [designation, setDesignation] = useState('')
    const [gender, setGender] = useState('')
    const[course, setCourse] = useState('')
    const[file, setFile] = useState('')
  
    useEffect(() => {
    
        // const formData = new FormData();
        //   formData.append('file', file)
        //   formData.append('name', name);
        //   formData.append('email', email)
        //   formData.append('phno', phno)
        //   formData.append('designation', designation)
        //   formData.append('gender', gender)
        //   formData.append('course', course);
        //   const employeedetails = {
        //     name, email, phno, designation, gender, course, formData
        // }
        const updatedata = async() => {
            const res = await axios.get('http://localhost:5000/api/employee/getemployee/'+id)
            console.log(res.data);
            setName(res.data.name)
            setEmail(res.data.email)
            setDesignation(res.data.designation);
            setCourse(res.data.course);
            setGender(res.data.gender);
            setPhno(res.data.phno);
            setFile(res.data.image)
           // toast.success('employee added successfully')

        }
        updatedata();
       
      }, [])


      const Employeeupdatehandler = async() => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('name', name);
        formData.append('email', email)
        formData.append('phno', phno)
        formData.append('designation', designation)
        formData.append('gender', gender)
        formData.append('course', course);
      try {
       
          const res = await axios.put("http://localhost:5000/api/employee/updateemployee/"+id, formData)
          console.log(res.data);
          toast.success('employeeDetails updated successfully')
        
      } catch (error) {
        console.log(error)
      }

      }



  return (
    <div className='container'>

    <div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
<input type="email" class="form-control" value={email}  placeholder="name@example.com"/>
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
  <input class="form-control" name="file"  onChange={(e) => setFile(e.target.files[0])} type="file" id="formFile"/>
</div>

   </div>


 

<div class="mb-3">
 <button type="submit" onClick={Employeeupdatehandler} class="btn btn-primary mb-3">Submit</button>
</div>


   </div>
  )
}

export default EditEmployee