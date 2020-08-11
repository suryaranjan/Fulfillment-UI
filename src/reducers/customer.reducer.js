import { REDUCER } from '../constants/reducerConstants';

const CustomerReducer = (state = {}, action) => {
    switch (action.type) {
        case REDUCER.GET_ALL_CUSTOMERS:
            return {
                ...state,
                customerList: action.customerList
            }
        case REDUCER.GET_CUSTOMER: 
            return {
                ...state,
                customer: action.customer
            }
        default:
            return state;
    }
}

export default CustomerReducer;