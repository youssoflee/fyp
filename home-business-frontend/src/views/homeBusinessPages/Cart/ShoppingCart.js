import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  //   CCardBody,
  CCardHeader,
  CCol,
  // CDataTable,
  CRow,
  //   CDataTable,
} from "@coreui/react";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import CIcon from "@coreui/icons-react";
// import { freeSet } from "@coreui/icons";
import api from "src/services/api";
// import swal from "sweetalert2";
// import Loader from "src/containers/Loader";
//   import ModalAddCustomer from "./ModalCustomer";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      cart_id: "",
      total_amount: 0,
      isLoading: false,
      isModal: false,
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart() {
    this.setState({
      isLoading: true,
    });
    api.get("api/getCart").then((response) => {
      // console.log(response.data);
      if (response.data.status === 200) {
        this.setState({
          cart: response.data.result.cart,
          cart_id: response.data.result.cart_id,
          total_amount: response.data.result.total_amount,
          isLoading: false,
        });
      }
    });
  }

  displayCart() {
    if (this.state.cart) {
      return this.state.cart.map((ord, index) => (
        <CRow className="py-1" key={index}>
          <CCol sm={5}>
            <strong>
              {ord["product_name"]} x {ord["purchase_quantity"]}
            </strong>
          </CCol>
          <CCol className="py-1 float-right">
            <strong>RM {ord["amount"].toFixed(2)}</strong>
          </CCol>
        </CRow>
      ));
    }
  }

  handleCheckout() {
    // console.log(this.state.cart_id);
    api.put("api/checkoutCart/" + this.state.cart_id).then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol sm={8}>
                    <h4>Check Out</h4>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <div>
                  {this.state.cart && this.displayCart()}
                  {this.state.cart.length === 0 && <div>Cart is empty.</div>}
                  <CRow className="py-1 float-right">
                    <CCol>
                      <strong>
                        Total Amount: RM {this.state.total_amount.toFixed(2)}
                      </strong>
                    </CCol>
                  </CRow>
                </div>
              </CCardBody>
              <CCardFooter>
                {/* <CButton color="success" className="float-left">
                  Cancel
                </CButton> */}
                <CButton
                  color="success"
                  className="float-right"
                  onClick={this.handleCheckout.bind(this)}
                  disabled={this.state.cart_id ? false : true}
                >
                  Order
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default ShoppingCart;
