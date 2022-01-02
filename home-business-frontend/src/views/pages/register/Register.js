import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Link, Redirect } from "react-router-dom";
import api from "../../../services/api";
import Swal from "sweetalert2";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmed: "",
      toHome: null,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRegister() {
    Swal.fire({
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    api.get("/sanctum/csrf-cookie").then(() => {
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmed,
      };
      api
        .post("/api/registerCustomer", data)
        .then((res) => {
          Swal.close();
          localStorage.setItem("refreshAfterLogin", false);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.setState({ toHome: "/" });
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    });
  }

  render() {
    if (this.state.toHome) {
      return <Redirect to={this.state.toHome} />;
    }
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="9" lg="7" xl="6">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Name"
                        autoComplete="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        name="passwordConfirmed"
                        value={this.state.passwordConfirmed}
                        onChange={this.handleOnChange}
                      />
                    </CInputGroup>
                    <CButton
                      color="success"
                      block
                      onClick={this.handleRegister}
                    >
                      Create Account
                    </CButton>
                  </CForm>
                </CCardBody>
                <CCardFooter className="p-4">
                  <div style={{ textAlign: "center" }}>
                    Have an account? &nbsp;
                    <Link to="/login">Log In</Link>
                  </div>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Register;
