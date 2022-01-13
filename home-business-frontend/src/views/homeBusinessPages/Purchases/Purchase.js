import {
    //   CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CDataTable,
  } from "@coreui/react";
  import React, { Component } from "react";
  // import { Link } from "react-router-dom";
  // import CIcon from "@coreui/icons-react";
  // import { freeSet } from "@coreui/icons";
  // import api from "src/services/api";
  // import swal from "sweetalert2";
  import Loader from "src/containers/Loader";
  //   import ModalAddCustomer from "./ModalCustomer";
  
  class Purchase extends Component {
    constructor() {
      super();
      this.state = {
        purchases: [],
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
      const fields = [
        "no",
        "id",
        "product name",
        // "type",
        "total",
        // "quantity",
        // "price",
        "Cancel ",
      ];
      const listOfPurchases = [];
      let number = 0;
      // console.log(this.state.products);
      this.state.purchases.forEach((purchase) => {
        number = number + 1;
        listOfPurchases.push({
          id: purchase.id,
          no: number,
          name: purchase.name,
          total: purchase.total,
          //       email: customer.email,
          //       password: customer.password,
          //       phone_num: customer.phone_num,
          //       address: customer.address,
          //       zipcode: customer.zipcode,
          //       city: customer.city,
          //       state: customer.state,
          //       // RoleID: user.customers_role.id,
          //       // Role: user.customers_role.role,
          //       // RegisteredDate: dateFormat(user.created_at, "dd/mm/yyyy"),
        });
      });
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
            <CCardBody>
            {this.state.isLoading === true && <Loader />}
            {this.state.isLoading === false && (
              <CDataTable
                tableFilter
                items={listOfPurchases}
                fields={fields}
                bordered
                itemsPerPage={10}
                pagination
                hover
                clickableRows
                // onRowClick={(item) => this.detailPage(item.Id)}
                // scopedSlots={{
                //   action: (item) => (
                //     <td onClick={this.disableOnRowClick}>
                //       <CButton
                //         color="dark"
                //         variant="outline"
                //         onClick={this.setEditForm.bind(this, item)}
                //       >
                //         <CIcon name="cil-pencil" />
                //       </CButton>
                //       &nbsp;
                //       <CButton
                //         color="danger"
                //         variant="outline"
                //         onClick={(e) => this.delProduct(e, item.id)}
                //       >
                //         <CIcon name="cil-trash" />
                //       </CButton>
                //       &nbsp;
                //       <CButton
                //         color="success"
                //         variant="outline"
                //         onClick={this.setAddQuantityForm.bind(this, item)}
                //       >
                //         <CIcon content={freeSet.cilPlus} />
                //       </CButton>
                //     </td>
                //   ),
                // }}
              />
            )}
          </CCardBody>
          </CCard>
        </div>
      );
    }
  }
  
  export default Purchase;
  