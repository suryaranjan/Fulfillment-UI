import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WarningIcon from '@material-ui/icons/Warning';

const ProductTab = ({product}) => {
    const discount = [
        {title: 'one', value: 1},
        {title: 'two', value: 2}
    ]
    return(
            <Grid item xs={6} className={`productTab ${product.error ? 'warningProductTab' : ''}`}>
               {product.error ? 
                    <div className="productTabError">
                        <WarningIcon />
                        <p>Product Quantity Limit Exceeded</p>
                    </div>
                : ''
               }
               <div>
                    <Autocomplete
                        className="productFilter"
                        disableClearable
                        defaultValue={0}
                        popupIcon={<ExpandMoreIcon className="productArrowDown"/>}
                        clearOnBlur={false}
                        options={discount.map((option) => option.title)}
                        renderInput={(params) => (
                        <>
                            <TextField
                                {...params}
                                margin="normal"
                                placeholder="Select Product"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </>
                        )}
                    />
                    <Autocomplete
                        className="quantityFilter productFilter"
                        disableClearable
                        defaultValue={0}
                        popupIcon={<ExpandMoreIcon className="productArrowDown"/>}
                        clearOnBlur={false}
                        options={discount.map((option) => option.title)}
                        renderInput={(params) => (
                        <>
                            <TextField
                                {...params}
                                margin="normal"
                                placeholder="Qty"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </>
                        )}
                    />
                    <Autocomplete
                        className="discountFilter productFilter"
                        disableClearable
                        defaultValue={0}
                        popupIcon={<ExpandMoreIcon className="productArrowDown"/>}
                        clearOnBlur={false}
                        options={discount.map((option) => option.title)}
                        renderInput={(params) => (
                        <>
                            <TextField
                                {...params}
                                margin="normal"
                                placeholder="Disc"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </>
                        )}
                    />
                    <p>$0.00</p>
                    <DeleteIcon/>
                </div>
            </Grid>
        )
}

export default ProductTab;