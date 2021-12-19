import {
    //   CButton,
    CCard,
    //   CCardBody,
    CCardHeader,
    CCol,
    CRow,
    //   CDataTable,
  } from "@coreui/react";
  import React, { Component } from "react";
  // import { Link } from "react-router-dom";
  // import CIcon from "@coreui/icons-react";
  // import { freeSet } from "@coreui/icons";
  // import api from "src/services/api";
  // import swal from "sweetalert2";
  // import Loader from "src/containers/Loader";
  //   import ModalAddCustomer from "./ModalCustomer";
  
  class Statictic extends Component {
    constructor() {
      super();
      this.state = {
        customers: [],
        isLoading: false,
        isModal: false,
        //   isAddOrder: true,
  
        // deleteModal: false,
        //   id: "",
        //   payment_id: "",
        //   customer_id: "",
        //   date: "",
        //   quantity: "",
        //   price: "",
      };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.disableOnRowClick = this.disableOnRowClick.bind(this);
      // this.setModal = this.setModal.bind(this);
    }
    render() {
      return (
        <div>
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol sm={8}>
                  <h3>Purchases</h3>{" "}
                </CCol>
                {/* <CCol className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CButton
                    variant="outline"
                    color="dark"
                    onClick={this.setAddForm.bind(this)}
                  >
                    <CIcon content={freeSet.cilPlus} />
                    Customer
                  </CButton>
                </CCol> */}
              </CRow>
            </CCardHeader>
          </CCard>
        </div>
      );
    }
  }
  
  export default Statictic;
  