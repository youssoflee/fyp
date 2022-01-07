import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
} from "@coreui/react";
import api from "../../../services/api";
import swal from "sweetalert2";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateInformation() {
    console.log(this.state);
    const data = {
      user_id: this.state.user_id,
      name: this.state.name,
      email: this.state.email,
      // password: this.state.password,
      phone_num: this.state.phone_num,
      // address: this.state.address,
      // zipcode: this.state.zipcode,
      // city: this.state.city,
      // state: this.state.state,
    };
    console.log(this.state.customer_id, data);
    api
      .put("/api/updateCustomer/" + this.state.customer_id, data)
      .then(() => {
        // this.setState({
        //   isLoading: !this.state.isLoading,
        // });
        this.setModal();
        swal
          .fire({
            title: "Updated!",
            text: "User updated successfully",
            icon: "success",
            button: "OK!",
          })
          .then(() => {
            this.resetForm();
            this.loadCustomers();
            // this.setState({
            //   isLoading: !this.state.isLoading,
            // });
          });
      })
      .catch((error) => {
        swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          button: "OK!",
        });
      });
  }

  render() {
    return (
      <div>
        <CRow>
          <CCol>
            <CCard>
              <div className="changePassword">
                <CCardBody>
                  <CRow className="justify-content-md">
                    <CCol md={7}>
                      <h2>Personal Information</h2>
                    </CCol>
                  </CRow>
                  <br />
                  <CRow className="justify-content changePasswordForm">
                    <CCol md={4}>
                      <CFormGroup>
                        <CLabel htmlFor="name">Name</CLabel>
                        <CInput
                        // id="newPassword"
                        // name="newPassword"
                        // value={newPassword}
                        // type="password"
                        // onChange={this.handleChange}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput
                        // id="newPassword"F
                        // name="newPassword"
                        // value={newPassword}
                        // type="password"
                        // onChange={this.handleChange}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="phone_num">Phone Number</CLabel>
                        <CInput
                        // id="newPassword"
                        // name="newPassword"
                        // value={newPassword}
                        // type="password"
                        // onChange={this.handleChange}
                        />
                      </CFormGroup>
                      <CButton block color="success">
                        Save
                      </CButton>
                    </CCol>
                    {/* <CCol md={3} className="condition-changePassword">
                      <h4>Password Must Contain:</h4>
                      <p style={validConditionOne ? validPassword : {}}>
                        At least 1 upper case letter (A-Z)
                      </p>
                      <p style={validConditionTwo ? validPassword : {}}>
                        At least 1 number (0-9)
                      </p>
                      <p style={validConditionThree ? validPassword : {}}>
                        At least 6 characters
                      </p>
                    </CCol> */}
                  </CRow>
                </CCardBody>
              </div>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default PersonalInformation;
