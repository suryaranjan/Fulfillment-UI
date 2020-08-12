import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import TablePaginationActions from '../sharedComponent/tablePaginationActions';
// import { orderListData } from '../../constants/orderListData';


const OrderHistoryTable = (props) => {
    let orderListData = props.orderList ? props.orderList : [];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, orderListData.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const convertDateToReadable = (date) => {
        let d = new Date(date);
        return d.toDateString();
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className="orderHistoryTable" stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>ORDER ID</TableCell>
                            <TableCell align="left">ORDER DATE</TableCell>
                            <TableCell align="left">USERNAME</TableCell>
                            <TableCell align="left">LAST CHANGED BY</TableCell>
                            <TableCell align="left">TRACKING#</TableCell>
                            <TableCell align="left">SHIPPING METHOD</TableCell>
                            <TableCell align="left">SHIPPING DATE</TableCell>
                            <TableCell align="left">PAYMENT TYPE</TableCell>
                            <TableCell align="left" className="price">LAST 4 DIGITS</TableCell>
                            <TableCell align="left" className="price">TOTAL PLATFORM FEE</TableCell>
                            <TableCell align="left" className="price">TOTAL</TableCell>
                            <TableCell align="center" className="action">ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? orderListData && orderListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : orderListData
                        ).map((row) => (
                            <TableRow key={row.OrderId} onClick={props.showOrderDetails}>
                                <TableCell component="th" scope="row">
                                    {row.OrderId}
                                </TableCell>
                                <TableCell align="left">{convertDateToReadable(row.OrderDate)}</TableCell>
                                <TableCell align="left">{row.UserName}</TableCell>
                                <TableCell align="left">{row.UserName}</TableCell>
                                <TableCell align="left">{`12234556665433`}</TableCell>
                                <TableCell align="left">{row.ShippingMethod}</TableCell>
                                <TableCell align="left">{convertDateToReadable(row.ShippingDate)}</TableCell>
                                <TableCell align="left">{`Credit Card`}</TableCell>
                                <TableCell align="left">{row.LastFourDigits}</TableCell>
                                <TableCell align="left">{`$${row.TotalPlatformFee}`}</TableCell>
                                <TableCell align="left">{`$${row.TotalAmount}`}</TableCell>
                                <TableCell align="center" className="fulfillmentAction" >
                                    <div className="fulfillmentTableAction" onClick={(e) => {
                                        e.stopPropagation();
                                        props.fulfillOrder(row);
                                    }}>
                                        <AssignmentTurnedInIcon />
                                        <span>Fulfill Order</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow >
                                <TableCell align="center" colSpan={12}>No Order Found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                colSpan={12}
                count={orderListData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </div>
    )
}

export default OrderHistoryTable;