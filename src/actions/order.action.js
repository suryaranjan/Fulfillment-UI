import AxiosInstance from '../helpers/axiosInstance';
import urlGenerator from '../helpers/urlGenerators';
import { baseCommonUrl, URLS } from '../constants/urlConstant';
import { REDUCER } from '../constants/reducerConstants';

const url2 = "https://testapi.innogrp.com/admin/fulfilment/GetOrderItems?orderId=100027";

const axios = new AxiosInstance();

const getAllOrders = () => {
    let url = urlGenerator(baseCommonUrl, URLS.GetAllOrders);
    return (dispatch) => {
        return axios.get(url)
            .then( data => {
                dispatch({ type: REDUCER.GET_ALL_ORDERS, orderList: data.data.Response })
            }).catch(err => {
                console.log("Error", err)
            })
    }
}

const Order = {
    getAllOrders
}

export default Order;