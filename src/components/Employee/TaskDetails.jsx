import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
    const mytask=useLoaderData();
   
    return (
        <div className='container mt-5'>
            {
                mytask.map(task=><><h3>Task Name : {task.task_name}</h3>
                <p>Due Date : {task.due_date}</p>
                <p>Task Description : {task.task_desc}</p></>)
            }
            
        </div>
    );
};

export default TaskDetails;