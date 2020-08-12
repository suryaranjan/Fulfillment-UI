import axios from './axios';

class AxiosInstance {

    constructor(){
        this.axios = axios;
    }

    get(url, object){
        return this.axios.get(url, object);
    }

}

export default AxiosInstance;