import React, { Component } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  //   CCol,
  //   CRow,
  //   CFormGroup,
  //   CLabel,
  //   CInput,
  //   CButton,
  CCard,
  CCardBody,
  //   CCardHeader,
  //   CCol,
  //   CRow,
  CDataTable,
  //   CForm,
  //   CInputGroup,
} from "@coreui/react";

import Loader from "src/containers/Loader";
import api from "src/services/api";

class CheckoutModal extends Component {
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
          onClose={this.props.setModal2}
          closeOnBackdrop={false}
        >
          <CModalHeader closeButton>
            <CModalTitle>Check Out Form</CModalTitle>
          </CModalHeader>
          <CModalBody>
            {/* <CCard>
              <CCardBody>
                {this.state.isLoading === true && <Loader />}
                {this.state.isLoading === false && (
                  <CDataTable
                    tableFilter
                    items={listOfProduct}
                    fields={fields}
                    bordered
                    itemsPerPage={10}
                    pagination
                    hover
                    clickableRows
                    // onRowClick={(item) => this.detailPage(item.Id)}
                    // scopedSlots={{
                    //   status: (item) => (
                    //     <td>
                    //       <CBadge color={item.colorName} className="p-1">
                    //         {item.statusName}
                    //       </CBadge>
                    //     </td>
                    //   ),
                    //   //     action: (item) => (
                    //   //       <td onClick={this.disableOnRowClick}>
                    //   //         <CButton
                    //   //           color="dark"
                    //   //           variant="outline"
                    //   //           onClick={this.setEditForm.bind(this, item)}
                    //   //         >
                    //   //           <CIcon name="cil-pencil" />
                    //   //         </CButton>
                    //   //         &nbsp;
                    //   //         <CButton
                    //   //           color="danger"
                    //   //           variant="outline"
                    //   //           onClick={(e) => this.delProduct(e, item.id)}
                    //   //         >
                    //   //           <CIcon name="cil-trash" />
                    //   //         </CButton>
                    //   //       </td>
                    //   //     ),
                    // }}
                  />
                )}
              </CCardBody>
            </CCard> */}
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={this.props.setModal2}>
              Cancel
            </CButton>
            <CButton
              color="success"
              //   onClick={
              //     this.props.isAddCustomer
              //       ? this.props.confirmAdd
              //       : this.props.updateData
              //   }
            >
              Proceed
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    );
  }
}

export default CheckoutModal;
