import axios from '../helpers/axios';

const url = "https://testapi.innogrp.com/admin/fulfilment/getallorders";
const url2 = "https://testapi.innogrp.com/admin/fulfilment/GetOrderItems?orderId=100027";

export function getAllOrders() {
  return  axios.get(url);
}

export function getOrderItems(){
    return axios.get(url2);
}