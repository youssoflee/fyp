// import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from 'src/services/api'

class Customer extends Component {

    state = {
        customers: [],
        loading: true,
    }

    async componentDidMount() {

        const res = await api.get('/api/getAllCustomer');
        // console.log(res);
        if(res.data.status === 200)
        {
            this.setState({
                customers: res.data.customers,
                loading: false,
            });
        }
    }

    render() { 

        var customer_HTMLTABLE = "";
        if(this.state.loading)
        {
            customer_HTMLTABLE = <tr><td colSpan="11"><h2>Loading...</h2> </td></tr>
        }
        else
        {
            customer_HTMLTABLE = 
            this.state.customers.map( (item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.phone_num}</td>
                        <td>{item.address}</td>
                        <td>{item.zipcode}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>
                            <Link to={`edit-customer/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Customer Data
                                    <Link to={'add-customer'} className="btn btn-primary btn-sm float-end">Add Customer</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Phone Number</th>
                                            <th>Address</th>
                                            <th>Zipcode</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customer_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Customer;