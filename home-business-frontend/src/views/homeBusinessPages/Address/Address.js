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
// import swal from "sweetalert2";
// import Loader from "src/containers/Loader";
// import ModalAddress from "./ModalAddress";

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

    // this.handleChange = this.handleChange.bind(this);
    // this.disableOnRowClick = this.disableOnRowClick.bind(this);
    // this.setModal = this.setModal.bind(this);
  }

  componentDidMount() {
    this.getInformation();
    // this.getAddressDetails();
  }

  getInformation() {
    api.get("/api/getCurrentUser").then((res) => {
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
                      // onClick={this.modalEditUserForm.bind(this)}
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
            <CCard>
              {/* <CCardHeader>
                <CRow>
                  <CCol sm={8}>
                    <h4>Emails</h4>
                  </CCol>
                  <CCol className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton
                      variant="outline"
                      color="dark"
                      onClick={this.modalAddEmailForm.bind(this)}
                    >
                      <CIcon content={freeSet.cilPlus} />
                      Email
                    </CButton>
                  </CCol>
                </CRow>
              </CCardHeader> */}
              {/* <CCardBody>
                <CDataTable
                  fields={fields}
                  itemsPerPage={10}
                  items={listOfAddress}
                  pagination
                  // scopedSlots={{
                  //   Password: (item) => (
                  //     <td>{item.Password == null ? "-" : item.Password}</td>
                  //   ),
                  //   Action: (item) => (
                  //     <td>
                  //       <CButton
                  //         color="dark"
                  //         variant="outline"
                  //         onClick={this.modalEditEmailForm.bind(
                  //           this,
                  //           item.emailID,
                  //           item.Email,
                  //           item.Password
                  //         )}
                  //       >
                  //         <CIcon name="cil-pencil" />
                  //       </CButton>
                  //       &nbsp;
                  //       <CButton
                  //         color="danger"
                  //         variant="outline"
                  //         onClick={this.deleteEmail.bind(
                  //           this,
                  //           item.emailID,
                  //           item.Email
                  //         )}
                  //       >
                  //         <CIcon name="cil-trash" />
                  //       </CButton>
                  //     </td>
                  //   ),
                  // }}
                />
              </CCardBody> */}
            </CCard>
          </CCol>
        </CRow>
        {/* <ModalEditUserBasicData
          modalEditUser={this.state.modalEditUser}
          modalEditUserForm={this.modalEditUserForm.bind(this)}
          handleChange={this.handleChange}
          name={inputName}
          email={inputEmail}
          staffId={inputStaffId}
          updateUser={this.updateUser.bind(this)}
        />
        <ModalNewEmail
          modalAddEmail={this.state.modalAddEmail}
          modalAddEmailForm={this.modalAddEmailForm.bind(this)}
          modalEditEmail={this.state.modalEditEmail}
          modalEditEmailForm={this.modalEditEmailForm.bind(this)}
          editEmail={this.editEmail.bind(this)}
          isEdit={this.state.isEdit}
          handleChange={this.handleChange}
          addEmail={this.addEmail.bind(this)}
          inputAddEmail={inputAddEmail}
          inputAddPassword={inputAddPassword}
        /> */}
      </div>
    );
  }
}

export default Address;
