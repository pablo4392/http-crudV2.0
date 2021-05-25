import './todoItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const TodoItem = ({student, task, studentValue, taskValue, handleUpdate, handleDelete, id}) => {
    const [isComplete, setIsComplete] = useState(true);
    const [updating, setUpdating] = useState(true)

    const handleComplete = () => {
        setIsComplete(!isComplete)
    }

    const handleCallUpdate = () => {
        setUpdating(false)
    }

    return(
        <div className='task-box mt-4 mb-3'>
            { updating ? (
                <>
                    <div>
                        <h3 className='student'>{student}</h3>
                        <p className='task'>{task}</p>
                    </div>
                    <div className='buttons-panel'>
                        <div>
                            <input type="checkbox" className="btn-check" id="complete-btn" onClick={() => handleComplete()} />
                            <label className="btn btn-outline-dark" htmlFor="complete-btn">{isComplete ? "Incomplete" : "Complete"}</label>
                        </div>
                        <button className="btn btn-outline-warning" onClick={() => handleCallUpdate()}>Update</button>
                        <button className='btn btn-outline-danger' onClick={() => handleDelete(id)}>Delete</button>
                    </div>         
                </> 
                ) : (
                <>
                    <div className="update-inputs">
                        <input className="student-input mb-2" defaultValue={studentValue}  type="text" />
                        <input className="task-input mb-1" defaultValue={taskValue} type="text" />
                    </div>
                    <div className="update-panel mt-3">
                        <button className="btn btn-outline-warning" onClick={() => handleUpdate()} >Update</button>
                        <button className="btn btn-outline-dark" onClick={() => setUpdating(true)} >Cancel</button>                        
                    </div>
                </> )
            }
        </div>
    )
}

export default TodoItem