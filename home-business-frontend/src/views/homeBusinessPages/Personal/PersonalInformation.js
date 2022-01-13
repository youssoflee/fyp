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
  CInvalidFeedback,
} from "@coreui/react";
import api from "../../../services/api";
import swal from "sweetalert2";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      // role_id: "",
      customer_id: "",
      name: "",
      email: "",
      phone_num: "",
      error_list: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getInformation();
  }

  getInformation() {
    api.get("/api/getCurrentUser").then((res) => {
      // if (user_id == 1) {
      //   this.setState({
      //     user_id: res.data.id,
      //     name: res.data.name,
      //     email: res.data.email,
      //     phone_num: res.data.customer.phone_num,
      //   });
      // }
      // else{
      //   this.setState({
      //     user_id: res.data.id,
      //     name: res.data.name,
      //     customer_id: res.data.customer.id,
      //     email: res.data.email,
      //     phone_num: res.data.customer.phone_num,
      //   });
      // }
      this.setState({
        user_id: res.data.id,
        customer_id: res.data.customer.id,
        name: res.data.name,
        email: res.data.email,
        phone_num: res.data.customer.phone_num,
      });
    });
  }

  updateInformation() {
    swal.fire({
      title: "Updating",
      showConfirmButton: false,
      didOpen: () => {
        swal.showLoading();
      },
    });
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
      .put("/api/updateInformation/" + this.state.customer_id, data)
      .then((res) => {
        swal.close();
        if (res.data.status === 200) {
          swal
            .fire({
              title: "Updated!",
              text: "User updated successfully",
              icon: "success",
              button: "OK!",
            })
            .then(() => {
              window.location.reload();
              // this.loadCustomers();
              // this.setState({
              //   isLoading: !this.state.isLoading,
              // });
            });
        } else {
          this.setState({ error_list: res.data.validate_err });
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
                          id="name"
                          name="name"
                          value={this.state.name}
                          type="text"
                          onChange={this.handleChange}
                          invalid={this.state.error_list["name"] ? true : false}
                        />
                        <CInvalidFeedback>
                          {this.state.error_list["name"]}
                        </CInvalidFeedback>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput
                          id="email"
                          name="email"
                          value={this.state.email}
                          type="text"
                          onChange={this.handleChange}
                          invalid={
                            this.state.error_list["email"] ? true : false
                          }
                        />
                        <CInvalidFeedback>
                          {this.state.error_list["email"]}
                        </CInvalidFeedback>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="phone_num">Phone Number</CLabel>
                        <CInput
                          id="phone_num"
                          name="phone_num"
                          value={
                            this.state.phone_num ? this.state.phone_num : ""
                          }
                          type="text"
                          onChange={this.handleChange}
                          invalid={
                            this.state.error_list["phone_num"] ? true : false
                          }
                        />
                        <CInvalidFeedback>
                          {this.state.error_list["phone_num"]}
                        </CInvalidFeedback>
                      </CFormGroup>
                      <CButton
                        block
                        color="success"
                        onClick={this.updateInformation.bind(this)}
                      >
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
