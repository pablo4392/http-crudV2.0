import './todoContainer.css';
import {useEffect, useState} from 'react';
import Services from './services.js'
import TodoItem from './TodoItem.js';
import CreateTodo from './CreateTodo.js';



const TodoContainer = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(null); 
    const [idToDelete, setIdToDelete] = useState(null);

        // GET
    useEffect(() => {
        Services.read()
            .then(response => {
                setTasks(response.data.todos)
        });
    }, []);

        //POST
    useEffect(() => {
        if (newTask) {
            Services.create(newTask).then(response => {
                setTasks((prevState) => [response.data, ...prevState]);
            },
            err => {
                console.error(err)   
            })
        };
    }, [newTask]);

        //DELETE
    useEffect( () => {
        if(idToDelete) {
            Services.remove(idToDelete).then(() => {
                setTasks(prevState =>
                    prevState.filter(value => value.id !== idToDelete)
                )
            });
        };
        return () => {
            setIdToDelete(null);
        };
    }, [idToDelete]);

    const createTaskFunction = values => {
        setNewTask(values);
    };

    const deleteFunction = id => { 
        setIdToDelete(id);
    };

    return (
        <div className='container'>
            <CreateTodo handleCreate={createTaskFunction} />
            {tasks.map(value => (
                <TodoItem
                    key={value.id}
                    id={value.id}
                    student={value.student}
                    task={value.task}
                    handleDelete={deleteFunction}
                />
            ))}
        </div>
    )
}

export default TodoContainer