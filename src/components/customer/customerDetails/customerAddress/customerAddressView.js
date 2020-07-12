import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomerAddressCard from './customerAddressCard';
import './customerAddress.css';

const addressList = [
    {
        firstName:'Jane',
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
        firstName:'Jacob',
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
        firstName:'Jessica',
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
        firstName:'Jane',
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
        firstName:'Jane',
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
        firstName:'Jane',
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
        firstName:'Jane',
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

const CustomerAddressView = (props) => {
    const addressRender = () => {
        return addressList.map( (data, index) => {
            return <CustomerAddressCard key={index} editAddress={props.editAddress} address={data}/>
        })
    }

    return (
        <Grid container spacing={3} className="customerInfoContainer">
            <Grid item xs={7} className="customerInfoHeader">
                <h4>Addresses</h4>
            </Grid>
            <Grid item xs={5} className="customerAddressAdd">
                <Button variant="outlined">
                    Add Address
                </Button>
            </Grid>
            <Grid container spacing={3} className="customerAddressList">
                {addressRender()}
            </Grid>
        </Grid>
    )
}

export default CustomerAddressView;