import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import TablePaginationActions from '../sharedComponent/tablePaginationActions';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import userListData from '../../constants/userListData';

const UserList = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, userListData.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className="orderHistoryTable userListTable" stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>FIRST NAME</TableCell>
                            <TableCell align="left">LAST NAME</TableCell>
                            <TableCell align="left">USERNAME</TableCell>
                            <TableCell align="left">EMAIL</TableCell>
                            <TableCell align="left" className="userTableRolesColumn">USER ROLES</TableCell>
                            <TableCell align="center" className="userTableActionColumn">ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? userListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : userListData
                        ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.userName}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.userRoles.join(", ")}</TableCell>
                                <TableCell align="left" className="userTableAction">
                                    <div className="userTableActionItems">
                                        <VpnKeyIcon />
                                        <span>Reset Password</span>
                                    </div>
                                    {row.locked ?
                                        <div className="userTableActionItems">
                                            <LockIcon />
                                            <span>Lock User</span>
                                        </div> :
                                        <div className="userTableActionItems">
                                            <LockOpenIcon />
                                            <span>Unlock User</span>
                                        </div>
                                    }
                                    <div className="userTableActionItems">
                                        <PersonAddDisabledIcon />
                                        <span>Disable User</span>
                                    </div>

                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow >
                                <TableCell colSpan={11} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 20, { label: 'All', value: -1 }]}
                colSpan={11}
                count={userListData.length}
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

export default UserList;