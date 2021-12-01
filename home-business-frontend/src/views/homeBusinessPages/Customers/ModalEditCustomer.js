import React, { Component } from "react";
import {
  CModal,
  CModalHeader,
  // CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
} from "@coreui/react";

class ModalEditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div> 
        <CModal
          alignment="center"
          show={this.props.isModal}
          onClose={this.props.setModal}
          closeOnBackdrop={false}
        >
          <CModalHeader closeButton>
          {this.props.isAddCustomer
                ? "Add New Customer"
                : "Update Customer"}
          </CModalHeader>
          <CModalBody>
            {" "}
            <CRow>
              <CCol xs="12">
                <CFormGroup><CLabel htmlFor="name">Name</CLabel>
                <CInput
                  id="name"
                  name="namedata"
                  value={this.props.name}
                  onChange={this.props.handleChange}
                /></CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="email">Email</CLabel>
                  <CInput
                    id="email"  
                    name="emaildata"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="password">Password</CLabel>
                  <CInput
                    id="password"
                    name="passworddata"
                    value={this.props.password}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="phone_num">Phone</CLabel>
                  <CInput
                    id="phone_num"
                    name="phone_numdata"
                    value={this.props.phone_num}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="address">Address</CLabel>
                  <CInput
                    id="address"
                    name="addressdata"
                    value={this.props.address}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="zipcode">Zipcode</CLabel>
                  <CInput
                    id="zipcode"
                    name="zipcodedata"
                    value={this.props.zipcode}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="city">City</CLabel>
                  <CInput
                    id="city"
                    name="citydata"
                    value={this.props.city}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="state">State</CLabel>
                  <CInput
                    id="state"
                    name="statedata"
                    value={this.props.state}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={this.props.modalEditUserForm}>
              Cancel
            </CButton>
            <CButton color="success" onClick={this.props.updateUser}>
              Save
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}

export default ModalEditCustomer;
