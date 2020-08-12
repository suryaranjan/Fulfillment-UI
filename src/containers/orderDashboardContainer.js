import { connect } from 'react-redux';
import Action from '../actions/index';
import OrderDashboard from '../components/order/orderDashboard';

const mapStateToProps = state => {
    return {
        orderList: state.OrderReducer.orderList
    }
}

const mapDispatchToProps = dispatch => ({
    getAllOrderList: () => dispatch(Action.Order.getAllOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderDashboard);