import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';

const EmployeeDetails = () => {
    const [details, setDetails] = useState([]);
    const [duplicatedata, setDuplicatedata] = useState([])
    const [searchkey, setSearchkey] = useState()


    const navigate = useNavigate('')

    const user = JSON.parse(localStorage.getItem('currentuser'))
    if(!user){
        window.location.href="/"
    }

    useEffect (() => {
        const getData = async () => {
            const res = await axios.get('http://localhost:5000/api/employee/getemployeedetails')
            console.log(res.data);
            setDetails(res.data);
            setDuplicatedata(res.data)
        }
        getData();
    }, [])

    const clickHandler = () => {
        navigate('/createemployee')
    }

    // const updateHandler = () => {
    //     navigate(`/update/${room._id}`)
    // }

    const handledelete = async(id) => {
        try {
            const res = await axios.delete('http://localhost:5000/api/employee/delete/'+id);
            console.log(res.data);
            window.location.reload();

            
        } catch (error) {
             console.log(error)
        }
    }

    const SearchData = () => {
        const tempdata = duplicatedata.filter(item => item.name.toLowerCase().includes(searchkey.toLowerCase()))
        setDetails(tempdata)
      }

  return (
    <div>
        <div className='row mb-4'>
            <div className='container'>
                <label>Total Count:{details.length}</label>
                <button onClick={clickHandler} style={{marginLeft:40}} className='btn btn-primary mt-2'>CreateEmployee</button>
                 
                <div className='col-md-3 mt-3'>
                
                <input type='text' className='form-control' placeholder='Search keyword' value={searchkey}
                onChange={(e) => setSearchkey(e.target.value)} onKeyUp={SearchData}/>
                </div>
            </div>


        </div>
        <div className='row'>
              <div className='col-md-12'>
                
              <table className='table table-bordered table-black'>
                  <thead>
                      <tr>
                          <th>Unique Id</th>
                          <th>Name</th>
                          <th>email</th>
                          <th>phno</th>
                          <th>Gender</th>
                          <th>Designation</th>
                          <th>course</th>
                          <th>Image</th>    
                          <th>Actions</th>                      
                      </tr>
                  </thead>
                  <tbody>
                      {details.length ? details.map(room => {
                          return <tr>
                              <td>{room._id}</td>
                              <td>{room.name}</td>
                              <td>{room.email}</td>
                              <td>{room.phno}</td>
                              <td>{room.gender}</td>
                              <td>{room.designation}</td>
                              <td>{room.course}</td>
                              <td><img src={`./src/assets/${room.image}`} height={100} width={100} /></td>
                              <td>
                            <Link to={`/update/${room._id}`} className='btn btn-primary mx-3'>Edit</Link>
                                <button className='btn btn-danger' onClick={(e) =>handledelete(room._id)}>Delete</button>
                              </td>
                          </tr>
                      }) : <h4>No records Found</h4>}
                  </tbody>
              </table>
              </div>
          </div>

    </div>
  )
}

export default EmployeeDetails