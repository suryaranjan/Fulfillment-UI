import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import history from '../../helpers/history';
import {CUSTOMER_DETAILS} from '../../constants/routesConstant';
import TablePaginationActions from '../sharedComponent/tablePaginationActions';
import { customerListData } from '../../constants/customerListData';

const CustomerList = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, customerListData.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowClick = () => {
        history.push(CUSTOMER_DETAILS);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className="customerHistoryTable" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>CUSTOMER ID</TableCell>
                            <TableCell align="left">FIRST NAME</TableCell>
                            <TableCell align="left">LAST NAME</TableCell>
                            <TableCell align="left">DATE OF BIRTH</TableCell>
                            <TableCell align="left">CITY</TableCell>
                            <TableCell align="left">STATE</TableCell>
                            <TableCell align="left">PHONE</TableCell>
                            <TableCell align="left">EMAIL</TableCell>
                            <TableCell align="left">CENTER</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? customerListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : customerListData
                        ).map((row) => (
                            <TableRow key={row.id} onClick={handleRowClick}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.firstName}</TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.dob}</TableCell>
                                <TableCell align="left">{row.city}</TableCell>
                                <TableCell align="left">{row.state}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.center}</TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow >
                                <TableCell colSpan={9} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                colSpan={9}
                count={customerListData.length}
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

export default CustomerList;