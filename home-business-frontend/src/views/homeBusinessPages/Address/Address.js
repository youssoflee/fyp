import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  // CDataTable,
} from "@coreui/react";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
// import { freeSet } from "@coreui/icons";
import api from "src/services/api";
import ModalAddress from "./ModalAddress";
import swal from "sweetalert2";
// import Loader from "src/containers/Loader";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: "",
      email: "",
      phone_num: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
      addresses: [],
      isLoading: false,
      isModal: false,
      //   isAddOrder: true,

      // deleteModal: false,
      //   id: "",
      //   payment_id: "",
      //   customer_id: "",
      //   date: "",
      //   quantity: "",
      //   price: "",
    };

    this.handleChange = this.handleChange.bind(this);
    // this.disableOnRowClick = this.disableOnRowClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  componentDidMount() {
    this.getInformation();
    // this.getAddressDetails();
  }

  handleChange(e) {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  setModal(action) {
    this.setState((prevState) => ({ isModal: !prevState.isModal }));
  }

  getInformation() {
    api.get("/api/getCurrentAddress").then((res) => {
      this.setState({
        user_id: res.data.id,
        customer_id: res.data.customer.id,
        name: res.data.name,
        email: res.data.email,
        phone_num: res.data.customer.phone_num,
        // full_name: res.data.customer.full_name,
        address: res.data.customer.address,
        zipcode: res.data.customer.zipcode,
        city: res.data.customer.city,
        state: res.data.customer.state,
      });
    });
  }

  // OK
  getAddressDetails() {
    api.get("/api/AddressDetails/" + this.state.id).then((response) => {
      this.setState(
        {
          name: response.data.name,
          phone_num: response.data.phone_num,
          address: response.data.address,
          zipcode: response.data.users_role.zipcode,
          city: response.data.city,
          state: response.data.state,
        }
        // () =>
        //   this.state.emails.forEach((email) => {
        //     console.log("email", email.email);
        //   })
      );
    });
  }

  updateAddress() {
    swal.fire({
      title: "Updating",
      showConfirmButton: false,
      didOpen: () => {
        swal.showLoading();
      },
    });
    const data = {
      user_id: this.state.user_id,
      // name: this.state.name,
      // email: this.state.email,
      // password: this.state.password,
      // phone_num: this.state.phone_num,
      address: this.state.address,
      zipcode: this.state.zipcode,
      city: this.state.city,
      state: this.state.state,
    };
    // console.log(this.state.customer_id, data);
    api
      .put("/api/updateCustomer/" + this.state.customer_id, data)
      .then((res) => {
        swal.close();
        if (res.data.status === 200) {
          swal
            .fire({
              title: "Updated!",
              text: "Address Details updated successfully",
              icon: "success",
              button: "OK!",
            })
            .then(() => {
              // this.loadCustomers();
              // this.setState({
              //   isLoading: !this.state.isLoading,
              // });
            });
        } else {
          // this.setState({ error_list: res.data.validate_err });
        }
      })
      .catch((error) => {
        // console.log(error);
        swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          button: "OK!",
        });
      });
  }

  setEditAddressForm() {
    this.setState({
      // isAddCustomer: true,
      user_id: "",
      // name: "",
      // email: "",
      // password: "" ,
      // phone_num: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
    });
    this.setModal();
  }

  render() {
    const {
      name,
      phone_num,
      address,
      zipcode,
      city,
      state,
      // inputName,
      // inputEmail,
      // inputStaffId,
      // inputAddEmail,
      // inputAddPassword,
    } = this.state;
    // const fields = [
    //   "No",
    //   {
    //     key: "Email",
    //     _style: { width: "30%" },
    //   },
    //   {
    //     key: "Password",
    //     _style: { width: "30%" },
    //   },
    //   "Action",
    // ];
    const listOfAddress = [];
    let No = 0;
    this.state.addresses.forEach((address) => {
      listOfAddress.push({
        No: No + 1,
        name: address.name,
        phone_num: address.phone_num,
        address: address.address,
        zipcode: address.zipcode,
        city: address.city,
        state: address.state,
        // Email: email.email,
        // Password: email.password,
      });
    });
    return (
      <div>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol sm={8}>
                    <h4>My Address</h4>
                  </CCol>
                  <CCol className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton
                      color="dark"
                      variant="outline"
                      onClick={this.setEditAddressForm.bind(this)}
                    >
                      <CIcon name="cil-pencil" />
                    </CButton>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <div>
                  <CRow className="py-1">
                    {/* <CCol sm={3}>
                      <strong>Name</strong>
                    </CCol>
                    <strong>:</strong> */}
                    <CCol sm={5}>
                      <strong>Default Address</strong>
                    </CCol>
                  </CRow>
                  <CRow className="py-1">
                    {/* <CCol sm={3}>
                      <strong>Name</strong>
                    </CCol>
                    <strong>:</strong> */}
                    <CCol sm={5}>{name}</CCol>
                  </CRow>
                  <CRow className="py-1">
                    {/* <CCol sm={3}>
                      <strong>Address</strong>
                    </CCol>
                    <strong>:</strong> */}
                    <CCol sm={5}>
                      {address ? address : "address"}
                      <br />
                      {city ? city : "city"} {zipcode ? zipcode : "zipcode"}
                      <br />
                      {state ? state : "state"}
                    </CCol>
                  </CRow>
                  <CRow className="py-1">
                    {/* <CCol sm={3}>
                      <strong>Phone Number</strong>
                    </CCol>
                    <strong>:</strong> */}
                    <CCol sm={5}>{phone_num}</CCol>
                  </CRow>
                  {/* <CRow className="py-1">
                    <CCol sm={3}>
                      <strong>Email</strong>
                    </CCol>
                    <strong>:</strong>
                    <CCol sm={5}>{email}</CCol>
                  </CRow> */}
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <ModalAddress
          address={this.state.address}
          zipcode={this.state.zipcode}
          city={this.state.city}
          state={this.state.state}
          isModal={this.state.isModal}
          setModal={this.setModal}
          handleChange={this.handleChange}
          updateAddress={this.updateAddress.bind(this)}
          // getInformation={this.getInformation.bind(this)}
        />
      </div>
    );
  }
}

export default Address;
