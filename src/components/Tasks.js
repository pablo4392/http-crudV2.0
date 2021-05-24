import "./componentStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Tasks = ({student, task, doIt, handleDelete}) => {
    return(
        <div className="task-card">
            <h4 className="student">{student}</h4>
            <p className="task">{task}</p>
            <div className="buttons">
                <div>
                    <input type="checkbox" className="btn-check" id="btn-check-outlined" />
                    <label className="btn btn-outline-primary" htmlFor="btn-check-outlined"> Complete </label>
                </div>
                <button className="btn btn-outline-danger" onClick={() => handleDelete()} >Delete</button>
            </div>
        </div>
    )
}

export default Tasks