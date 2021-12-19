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

class Order extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      isLoading: false,
      isModal: false,
    //   isAddOrder: true,

      // deleteModal: false,
      id: "",
      payment_id: "",
      customer_id: "",
      date: "",
      quantity: "",
      price: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.disableOnRowClick = this.disableOnRowClick.bind(this);
    // this.setModal = this.setModal.bind(this);
  }
  render() {
    // const fields = [
    //   "no",
    //   // "id",
    //   "payment_id",
    //   "customer_id",
    //   // "password",
    //   "date",
    //   "quantity",
    //   "price",
    //   // "city",
    //   // "state",
    //   "action",
    // ];
    // const listOfOrder = [];
    // let number = 0;
    // this.state.orders.forEach((order) => {
    //   number = number + 1;
    //   listOfOrder.push({
    //     id: order.id,
    //     no: number,
    //     payment_id: order.payment_id,
    //     email: order.customer_id,
    //     password: order.date,
    //     phone_num: order.quantity,
    //     address: order.price,
        // RoleID: user.customers_role.id,
        // Role: user.customers_role.role,
        // RegisteredDate: dateFormat(user.created_at, "dd/mm/yyyy"),
    //   });
    // });

    return (
      <div>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol sm={8}>
                <h3>Orders Received</h3>{" "}
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

export default Order;
