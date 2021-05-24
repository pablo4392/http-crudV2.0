import axios from "axios";

const read = (url) => {
    const promise = axios.get(url);

    return promise
}

export default read;