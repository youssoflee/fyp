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

class ModalProductStock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CModal
          alignment="center"
          show={this.props.isQuantityModal}
          onClose={this.props.setQuantityModal}
          closeOnBackdrop={false}
        >
          <CModalHeader closeButton>
            <CModalTitle>
              Add Stock Quantity
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            {" "}
            <CRow>
            <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="newQuantity">Quantity</CLabel>
                  <CInput
                    id="newQuantity"
                    name="newQuantity"
                    value={this.props.newQuantity}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={this.props.setQuantityModal}>
              Cancel
            </CButton>
            <CButton
              color="success"
              onClick={
                this.props.addStock
              }
            >
              Add
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}

export default ModalProductStock;
