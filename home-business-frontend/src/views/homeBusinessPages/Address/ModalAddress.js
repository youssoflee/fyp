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
              Update Address Details
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            {" "}
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="edit_address">Address</CLabel>
                  <CInput
                    id="edit_address"
                    name="edit_address"
                    value={this.props.address|| ""}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="edit_zipcode">Zipcode</CLabel>
                  <CInput
                    id="edit_zipcode"
                    name="edit_zipcode"
                    value={this.props.zipcode|| ""}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="edit_city">City</CLabel>
                  <CInput
                    id="edit_city"
                    name="edit_city"
                    value={this.props.city|| ""}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="edit_state">State</CLabel>
                  <CInput
                    id="edit_state"
                    name="edit_state"
                    value={this.props.state|| ""}
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
              onClick={this.props.updateAddress}
            >
              Update
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}

export default ModalAddress;
