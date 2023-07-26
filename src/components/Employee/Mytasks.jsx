import React, { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';
import { Link } from 'react-router-dom';

const Mytasks = () => {
    const {user}=useContext(AuthenticationContext);
    const [mytasks,setMytasks]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/mytasks?email=${user?.email}`).then(res=>res.json()).then(data=>setMytasks(data))
    },[])
    return (
        <div>
        <h1 className='text-center'>My Tasks</h1>
        <table className="table mt-5">
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
          <td>{task.status}</td>
          <td><Link to={`/taskdetails/${task._id}`}><button className='btn btn-primary'>View Task Details</button></Link></td>
        </tr>)
}


</tbody>
</table>
    </div>
    );
};

export default Mytasks;