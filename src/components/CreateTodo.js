import './createTodo.css';
import { useForm } from 'react-hook-form'

const  CreateTodo = ({handleCreate}) => {
    const {handleSubmit, register, reset} = useForm();

    const onSubmit = values => {
        handleCreate(values)
        reset({
            student:"",
            task:""
        })
    }
    

    return(
        <form className='create-task mt-4' onSubmit={handleSubmit(onSubmit, e => {console.log(e)})} > 
            <h1 className="principal-title mb-3">TO DO APP</h1> 
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    id="student" 
                    {...register('student', {required: true})}
                />
                <label className="label-input" htmlFor="studentName"> Name </label>
            </div>
            <div className="form-floating">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Task" 
                    id="task"
                    {...register('task', {required: true})}
                />
                <label className="label-input" htmlFor="task">Task</label>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-3">
                <button className="btn btn-outline-success" >Submit</button>
            </div>
        </form>
    )
}

export default CreateTodo