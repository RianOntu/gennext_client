import React, { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mytasks = () => {
    const notify = () => toast("Work Status Updated!");
    const {user}=useContext(AuthenticationContext);
    const [mytasks,setMytasks]=useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event,id) => {
        const selectedStatus = event.target.value;
        setSelectedValue(selectedStatus);
        
        fetch(`http://localhost:5000/updatestatus/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:selectedStatus})
        }).then(res=>res.json()).then(data=>{
            if(data.modifiedCount){
notify()
            }
        })
      };
      
    useEffect(()=>{
        fetch(`http://localhost:5000/mytasks?email=${user?.email}`).then(res=>res.json()).then(data=>setMytasks(data))
    },[mytasks])
    return (
        <div>
            <ToastContainer />
        <h1 className='text-center'>My Tasks</h1>
      { mytasks.length>0? <table className="table mt-5">
<thead>
<tr>
  <th scope="col">Task Name</th>
  <th scope="col">Due Date</th>
  <th scope="col">Assignee</th>
  <th scope="col">Status</th>
  <th scope="col">Action</th>
</tr>
</thead>
<tbody>
{
   mytasks.map(task=><tr>
        <td>{task.task_name}</td>
          <td>{task.due_date}</td>
          <td>{task.assignee}</td>
          <td>
          <select className="form-select" aria-label="Default select example" value={selectedValue} onChange={(event)=>handleSelectChange(event,task._id)}>
  <option disabled value="">Select Work Status</option>
  <option value="Working">Working</option>
  <option value="Complete">Complete</option>
  
  
</select>
            </td>
          <td><Link to={`/taskdetails/${task._id}`}><button className='btn btn-primary'>View Task Details</button></Link></td>
        </tr>)
}


</tbody>
</table>:<p className='text-center text-danger'>No task yet</p>}
    </div>
    );
};

export default Mytasks;