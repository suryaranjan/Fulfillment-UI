import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from '../sharedComponent/tablePaginationActions';
import { orderListData } from '../../constants/orderListData';


const OrderHistoryTable = (props) => {

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

    return (
        <TableContainer component={Paper}>
            <Table className="orderHistoryTable" >
                <TableHead>
                    <TableRow>
                        <TableCell>ORDER ID</TableCell>
                        <TableCell align="left">ORDER TYPE</TableCell>
                        <TableCell align="left">CUSTOMER NAME</TableCell>
                        <TableCell align="left">LAST DATE CHANGED</TableCell>
                        <TableCell align="left">TRACKING#</TableCell>
                        <TableCell align="left">SHIPPING METHOD</TableCell>
                        <TableCell align="left">SHIPPING DATE</TableCell>
                        <TableCell align="left">PAYMENT TYPE</TableCell>
                        <TableCell align="left">LAST 4 DIGITS</TableCell>
                        <TableCell align="left">SUBTOTAL</TableCell>
                        <TableCell align="left">TOTAL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? orderListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : orderListData
                        ).map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.orderType}</TableCell>
                            <TableCell align="left">{row.customerName}</TableCell>
                            <TableCell align="left">{row.shippingDate}</TableCell>
                            <TableCell align="left">{row.trackingNo}</TableCell>
                            <TableCell align="left">{row.shippingMethod}</TableCell>
                            <TableCell align="left">{row.shippingDate}</TableCell>
                            <TableCell align="left">{row.paymentType}</TableCell>
                            <TableCell align="left">{row.last4Digits}</TableCell>
                            <TableCell align="left">{row.subTotal}</TableCell>
                            <TableCell align="left">{row.total}</TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow >
                            <TableCell colSpan={11} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[ 10, 20, { label: 'All', value: -1 }]}
                            colSpan={11}
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
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

export default OrderHistoryTable;