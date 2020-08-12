import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from '../sharedComponent/tablePaginationActions';
import { productListData } from '../../constants/productListData';

const ProductList = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const productColumnList = props.productColumn;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, productListData.length - page * rowsPerPage);

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
                <Table className="orderHistoryTable" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PRODUCT ID</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "On Hand")[0].show ? "table-cell" : "none" }}>ON HAND</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Finished Goods ID")[0].show ? "table-cell" : "none" }}>FINISHED GOOD ID</TableCell>
                            <TableCell align="left">PRODUCT NAME</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Delivery Form")[0].show ? "table-cell" : "none" }}>DELIVERY FORM</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Product Strength")[0].show ? "table-cell" : "none" }}>PRODUCT STRENGTH</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Package Type")[0].show ? "table-cell" : "none" }}>PACKAGE TYPE</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Unit Amount")[0].show ? "table-cell" : "none" }}>UNIT AMOUNT</TableCell>
                            <TableCell align="left">UNITS PER PACKAGE</TableCell>
                            <TableCell align="left" >PRICE</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Cost")[0].show ? "table-cell" : "none" }}>COST</TableCell>
                            <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "RX Class")[0].show ? "table-cell" : "none" }}>RX CLASS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? productListData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : productListData
                        ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "On Hand")[0].show ? "table-cell" : "none" }}>{row.onHand}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Finished Goods ID")[0].show ? "table-cell" : "none" }}>{row.finishedGoodId}</TableCell>
                                <TableCell align="left">{row.productName}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Delivery Form")[0].show ? "table-cell" : "none" }}>{row.deliveryForm}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Product Strength")[0].show ? "table-cell" : "none" }}>{row.productStrength}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Package Type")[0].show ? "table-cell" : "none" }}>{row.packageType}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Unit Amount")[0].show ? "table-cell" : "none" }}>{row.unitAmount}</TableCell>
                                <TableCell align="left">{row.unitPerPackage}</TableCell>
                                <TableCell align="left">{row.price}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "Cost")[0].show ? "table-cell" : "none" }}>{row.cost}</TableCell>
                                <TableCell align="left" style={{ display: productColumnList.filter(column => column.name === "RX Class")[0].show ? "table-cell" : "none" }}>{row.rxClass}</TableCell>
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
                count={productListData.length}
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

export default ProductList;