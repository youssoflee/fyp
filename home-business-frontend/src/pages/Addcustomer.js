
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import api from 'src/services/api'
// import axios from 'axios';

class Addcustomer extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        phone_num: '',
        address: '',
        zipcode: '',
        city: '',
        state: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveCustomer = async (e) => {
        e.preventDefault();
        // console.log(this.state);
        const res = await api.post('/api/addCustomer',this.state );
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                name: '',
                email: '',
                password: '',
                phone_num: '',
                address: '',
                zipcode: '',
                city: '',
                state: ''
            });
        }
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Add Customer
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> BACK </Link>
                                </h4>
                            </div> 
                            <div className="card-body">
                                <form onSubmit={this.saveCustomer}>
                                    <div className="form-group mb-3">
                                        <label>Customer Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="text" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone_num" onChange={this.handleInput} value={this.state.phone_num} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" onChange={this.handleInput} value={this.state.address} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Zipcode</label>
                                        <input type="text" name="zipcode" onChange={this.handleInput} value={this.state.zipcode} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>City</label>
                                        <input type="text" name="city" onChange={this.handleInput} value={this.state.city} className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>State</label>
                                        <input type="text" name="state" onChange={this.handleInput} value={this.state.state} className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Addcustomer;