import { REDUCER } from '../constants/reducerConstants';

const OrderReducer = (state = {}, action) => {
    switch (action.type) {
        case REDUCER.GET_ALL_ORDERS:
            return {
                ...state,
                orderList: action.orderList
            }
        default:
            return state;
    }
}

export default OrderReducer;