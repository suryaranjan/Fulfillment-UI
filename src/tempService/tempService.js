import AxiosInstance from '../helpers/axiosInstance';

const axios = new AxiosInstance();

const url = "https://testapi.innogrp.com/admin/fulfilment/getallorders";
const url2 = "https://testapi.innogrp.com/admin/fulfilment/GetOrderItems?orderId=100027";

export function getAllOrders() {
  return  axios.get(url);
}

export function getOrderItems(){
    return axios.get(url2);
}