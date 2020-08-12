import AxiosInstance from '../helpers/axiosInstance';
import urlGenerator from '../helpers/urlGenerators';
import { baseCommonUrl, URLS } from '../constants/urlConstant';
import { REDUCER } from '../constants/reducerConstants';

const axios = new AxiosInstance();

const getAllCustomers = () => {
    let url = urlGenerator(baseCommonUrl, URLS.GetAllCustomers);
    return (dispatch) => {
        return axios.get(url)
            .then(data => {
                dispatch({ type: REDUCER.GET_ALL_CUSTOMERS, customerList: data.data.Response })
            }).catch(err => {
                console.log("Error", err)
            })
    }
}

const getCustomerById = (id) => {
    let url = urlGenerator(baseCommonUrl, URLS.GetCustomerById);
    return (dispatch) => {
        return axios.get(url)
            .then(data => {
                dispatch({type: REDUCER.GET_CUSTOMER, customer: data.data.customer});
            }).catch(err => {
                console.log("err", err)
            })
    }
}

const Customer = {
    getAllCustomers
}

export default Customer;