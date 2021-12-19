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

class ModalProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <CModalTitle>
              {this.props.isAddProduct
                ? "Add New Product"
                : "Update Product"}
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            {" "}
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="name">Name</CLabel>
                  <CInput
                    id="name"
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="type">Type</CLabel>
                  <CInput
                    id="type"
                    name="type"
                    value={this.props.type}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="desc">Description</CLabel>
                  <CInput
                    id="desc"
                    name="desc"
                    value={this.props.desc}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="quantity">Quantity</CLabel>
                  <CInput
                    id="quantity"
                    name="quantity"
                    value={this.props.quantity}
                    onChange={this.props.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="12">
                <CFormGroup>
                  <CLabel htmlFor="price">Price</CLabel>
                  <CInput
                    id="price"
                    name="price"
                    value={this.props.price}
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
                this.props.isAddProduct
                  ? this.props.confirmAdd
                  : this.props.updateData
              }
            >
              {this.props.isAddProduct ? "Add" : "Save"}
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}

export default ModalProduct;
