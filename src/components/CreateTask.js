import "./componentStyles.css";
import {useForm} from "react-hook-form";

const CreateTask = () => {
    const {register, handleSubmit} = useForm()
    return(
        <form className="create-task" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Student</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="create-button">Submit</button>
        </form>
    )
}

export default CreateTask