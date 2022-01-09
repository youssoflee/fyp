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

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      redirect: false,
      validCurrentPassword: false,
      validNewPassword: false,
      validConfirmPassword: false,
      validConditionOne: false,
      validConditionTwo: false,
      validConditionThree: false,
      validChangePassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.validation(event.target.name, event.target.value);
      }
    );
  }

  validation(name, value) {
    let currentPassword = this.state.validCurrentPassword;
    let newPassword = this.state.validNewPassword;
    let confirmPassword = this.state.validConfirmPassword;
    let conditionOne = this.state.validConditionOne;
    let conditionTwo = this.state.validConditionTwo;
    let conditionThree = this.state.validConditionThree;

    switch (name) {
      case "currentPassword":
        currentPassword = value.length > 0;
        break;
      case "newPassword":
        const validRegexCapitalLetter = /^(.*[A-Z].*)$/;
        const validRegexDigit = /^(.*\d.*)$/;
        conditionOne = validRegexCapitalLetter.test(value);
        conditionTwo = validRegexDigit.test(value);
        conditionThree = value.length >= 6;
        newPassword = conditionOne && conditionTwo && conditionThree;
        break;
      case "confirmPassword":
        confirmPassword = this.state.newPassword === value;
        break;
      default:
        break;
    }

    this.setState(
      {
        validCurrentPassword: currentPassword,
        validConditionOne: conditionOne,
        validConditionTwo: conditionTwo,
        validConditionThree: conditionThree,
        validNewPassword: newPassword,
        validConfirmPassword: confirmPassword,
      },
      () => this.validateForm()
    );
  }

  validateForm() {
    this.setState({
      validChangePassword:
        this.state.validCurrentPassword &&
        this.state.validNewPassword &&
        this.state.validConfirmPassword &&
        this.state.validConditionOne &&
        this.state.validConditionTwo &&
        this.state.validConditionThree,
    });
  }

  ChangePassword() {
    const data = {
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
      confirmPassword: this.state.confirmPassword,
    };
    api
      .post("/api/changePassword", data)
      .then(() => {
        swal.fire({
          icon: "success",
          title: "Password Updated!",
          html: "Your password has been changed successfully!<br>You will be redirected to login page soon.",
          showConfirmButton: false,
          timer: 5500,
        });
        this.logOut();
      })
      .catch((error) => {
        swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
          confirmButtonColor: "#5bc0de",
        });
      });
  }

  logOut() {
    api.post("/api/logout").then((res) => {
      localStorage.clear();
      window.location.reload();
    });
  }

  render() {
    const {
      currentPassword,
      newPassword,
      confirmPassword,
      validConditionOne,
      validConditionTwo,
      validConditionThree,
      validChangePassword,
    } = this.state;

    const validPassword = {
      color: "green",
      textDecoration: "line-through",
    };
    return (
      <div>
        <CRow>
          <CCol>
            <CCard>
              <div className="changePassword">
                <CCardBody>
                  <CRow className="justify-content-md-center">
                    <CCol md={7}>
                      <h2>Change Your Password</h2>
                    </CCol>
                  </CRow>
                  <CRow className="justify-content-md-center changePasswordForm">
                    <CCol md={4}>
                      <CFormGroup>
                        <CLabel htmlFor="currentPassword">
                          Current Password
                        </CLabel>
                        <CInput
                          id="currentPassword"
                          name="currentPassword"
                          value={currentPassword}
                          type="password"
                          onChange={this.handleChange}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="newPassword">New Password</CLabel>
                        <CInput
                          id="newPassword"
                          name="newPassword"
                          value={newPassword}
                          type="password"
                          onChange={this.handleChange}
                        />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="confirmPassword">
                          Confirm New Password
                        </CLabel>
                        <CInput
                          id="confirmPassword"
                          name="confirmPassword"
                          value={confirmPassword}
                          type="password"
                          onChange={this.handleChange}
                        />
                      </CFormGroup>
                      <CButton
                        className="changePasswordButton"
                        block
                        color="success"
                        disabled={validChangePassword === false}
                        onClick={this.ChangePassword.bind(this)}
                      >
                        Change My Password
                      </CButton>
                    </CCol>
                    <CCol md={3} className="condition-changePassword">
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
                    </CCol>
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

export default ChangePassword;
