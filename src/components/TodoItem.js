import './todoItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoItem = ({student, task, handleDelete, id}) => {

    return(
        <div className='task-box mt-4 mb-3'>
            <h3 className='student'>{student}</h3>
            <p className='task'>Task: {task}</p>
            <div className='buttons-panel'>
                <div>
                    <input type="checkbox" className="btn-check" id="complete-btn" />
                    <label className="btn btn-outline-primary" htmlFor="complete-btn">Complete</label>
                </div>
                <button className='btn btn-outline-danger' onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem