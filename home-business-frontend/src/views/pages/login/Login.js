import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import api from "../../../services/api";
import Swal from "sweetalert2";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      toHome: null,
      showAlert: false,
    };
  }

  componentDidMount() {
    console.log(window.history);
    console.log(window.history.length > 2);
    if (window.history.length > 2) {
      this.setState({ showAlert: true });
    }
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin() {
    Swal.fire({
      title: "Logging in...",
      showConfirmButton: false,
    });
    api.get("/sanctum/csrf-cookie").then(() => {
      const creds = {
        email: this.state.email,
        password: this.state.password,
      };
      api
        .post("/api/login", creds)
        .then((res) => {
          Swal.close();
          this.props.login(res.data.token);
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
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  {this.state.showAlert && (
                    <div className="alert alert-warning">
                      You are not logged in. Please login first.
                    </div>
                  )}
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          placeholder="Email"
                          autoComplete="email"
                          onChange={this.handleEmail.bind(this)}
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
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={this.handlePassword.bind(this)}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={this.handleLogin.bind(this)}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default Login;
