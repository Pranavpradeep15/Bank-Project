import React, { useEffect } from 'react'
import Array from './Data'
import './Dash.css'
import { Link } from 'react-router-dom'
import {BsFlag} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from 'react'


const Dash = () => {
  const [selectedStatus, setSelectedStatus] = useState('Draft');
  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
  };
 useEffect(()=>{
  localStorage.clear()
 },[])
  let filteredArray;
  
  if (selectedStatus === 'Draft') {
    filteredArray = Array.filter((item) => item.status !== 'Completed');
  } else {
    filteredArray = Array.filter((item) => item.status === selectedStatus);
  }
  return (

    <div className='main'>
       <div className='heading'> <h1>DASHBOARD</h1></div> 
      <div className='create-btn'>
       <button><Link to='Request'>Create</Link></button>
</div>

    <div className='container'>
<div className='button-container'>

<button className='buttonblue'   onClick={() => handleStatusFilter('Draft')} ><AiOutlineCloseCircle/> Inprogress</button>
<button className='buttonwhite' onClick={() => handleStatusFilter('Completed')}><BsFlag/> Completed</button>
<hr />
</div>
<div className='line'></div>
<div className='search'>
  <label htmlFor="text">Search:</label>
  <input type="text" />
</div>
 

    <div className='table-response'>
    <table id='containertable'>
            <thead>
    <tr>



        <th>Id</th>
        <th>Requested On</th>
        <th>Customer Name</th>
        <th>Branch Code</th>
        <th>Branch Name</th>
        <th>Customer Account Number</th>
        <th>Compensation</th>
        <th>Status</th>
    </tr>
    </thead>
    <tbody>

    {filteredArray.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.requestedOn}</td>
                <td>{user.customername}</td>
                <td>{user.branchcode}</td>
                <td>{user.branchname}</td>
                <td>{user.customeraccountnumber}</td>
                <td>{user.compensation}</td>
                <td>{user.status}</td>
              </tr>
        
))}




    </tbody>
    </table>
    </div>
    </div>
    
    

    </div>
  )
}

export default Dash

