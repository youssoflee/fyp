import React, { Component } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
//   CForm,
//   CInputGroup,
} from "@coreui/react";

class ModalAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // console.log(this.props.password);
    return (
      <div>
        <CModal
          alignment="center"
          show={this.props.isModal}
          onClose={this.props.setModal}
          closeOnBackdrop={false}
        >
          <CModalHeader closeButton>
            <CModalTitle>
              {this.props.isAddAddress
                ? "Add New Address"
                : "Update Address"}
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            {" "}
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="address">Address</CLabel>
                  <CInput
                    id="address"
                    name="address"
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
                    name="zipcode"
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
                    name="city"
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
                    name="state"
                    value={this.props.state}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={this.props.setModal}>
              Cancel
            </CButton>
            <CButton
              color="success"
              onClick={
                this.props.isAddCustomer
                  ? this.props.confirmAdd
                  : this.props.updateData
              }
            >
              {this.props.isAddCustomer ? "Add" : "Save"}
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}

export default ModalAddress;
