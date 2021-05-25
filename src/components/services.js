import axios from "axios";

const baseUrl = "https://todos-go.herokuapp.com/api/todos";

class Services {
    static read() {
        const readPromise = axios({
            method: 'GET',
            url: baseUrl
        })
        return readPromise
    }
    
    static create(newTask) {
        const createPromise = axios({
            method:'POST',
            url: baseUrl,
            data: newTask
        })
        return createPromise;
    }
    
    static remove(id) {
        const removePromise = axios({
            method: 'DELETE',
            url:`${baseUrl}/${id}`
        })
        return removePromise;
    }
    
    static update(id) {
        const updatePromise = axios({
            method: 'PUT',
            url:`${baseUrl}/${id}`
        })
        return updatePromise;
    }
}

export default Services;