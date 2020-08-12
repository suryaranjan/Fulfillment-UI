import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import CustomerAddressCard from './customerAddressCard';
import './customerAddress.css';

const addressList = [
    {
        id: 0,
        firstName: 'Jane',
        lastName: 'Doe',
        address1: '1426 Montana Eve',
        address2: "Unit 2",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    },
    {
        id: 1,
        firstName: 'Jacob',
        lastName: 'Doe',
        address1: '533 stack horwood',
        address2: "Gleenwood spring",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    },
    {
        id: 2,
        firstName: 'Jessica',
        lastName: 'Doe',
        address1: '1426 Montana Eve',
        address2: "Unit 2",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    },
    {
        id: 3,
        firstName: 'Jane',
        lastName: 'Doe',
        address1: '1426 Montana Eve',
        address2: "Unit 2",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    },
    {
        id: 4,
        firstName: 'Jane',
        lastName: 'Doe',
        address1: '1426 Montana Eve',
        address2: "Unit 2",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    },
    {
        id: 5,
        firstName: 'Jane',
        lastName: 'Doe',
        address1: '1426 Montana Eve',
        address2: "Unit 2",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    },
    {
        id: 6,
        firstName: 'Jane',
        lastName: 'Doe',
        address1: '1426 Montana Eve',
        address2: "Unit 2",
        city: 'LITTLE ROCK',
        state: 'AK',
        zipcode: 99705,
        country: 'United States Of America',
        phone: '+1970923453'
    }

]

const CustomerAddressListView = (props) => {
    console.log("comng to custo,'", props)

    const handleOrderCustomerAddressChange = (data) => {
        if(props.createOrder){
            props.addressChange(data) 
        }
    }

    const addressRender = () => {
        return addressList.map((data, index) => {
            return <CustomerAddressCard
                key={index}
                addressChange={() => handleOrderCustomerAddressChange(data)}
                addressSelected={props.createOrder && props.addressSelected && 
                    parseInt(props.addressSelected.id) === parseInt(data.id) ? true : false}
                editAddress={props.editAddress}
                address={data} />
        })
    }

    return (
        <Grid container spacing={3} className="customerInfoContainer">
            <Grid item xs={7} className="customerInfoHeader">
                <h4>Addresses</h4>
            </Grid>
            <Grid item xs={5} className="customerAddressAdd">
                <Button variant="outlined" onClick={props.editAddress}>
                    Add Address
                </Button>
                {props.createOrder ? 
                    <CloseIcon onClick={props.closeModal}/> : ''
                }
            </Grid>
            <Grid container spacing={3} className="customerAddressList">
                {addressRender()}
            </Grid>
        </Grid>
    )
}

export default CustomerAddressListView;