import axios from 'axios';

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
}

const getAxiosInstance = () => {
    // const token = localStorage.getItem('access_token');
    const instance = axios.create({
        headers
    });
    // Loader Before data fetches 
    instance.interceptors.request.use(reqConfig => {
        document.getElementsByClassName("loading")[0].style.display = "block";
        return reqConfig;
    },
        err => {
            // console.log("error in responce = ",err)
            return Promise.reject(err);
        },
    );

    instance.interceptors.response.use(response => {
        document.getElementsByClassName("loading")[0].style.display = "none";
        return response;
    },
        (err) => {
            document.getElementsByClassName("loading")[0].style.display = "none";
            // console.log("error in responce = ",err)
            return Promise.reject({...err}.response);
        },
    );

    return instance;
}

export default getAxiosInstance();