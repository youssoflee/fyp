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
import CheckoutModal from "./CheckoutModal";

class AddtocartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: "",
      price: "",
      isModal: false,
      // isAddProduct: true,
      isLCheckout: true,
    };
  }

  componentDidMount() {}

  loadProducts() {
    this.setState({
      isLoading: true,
    });
    api.get("api/getAllProduct").then((response) => {
      // console.log(response.data);
      this.setState({
        products: response.data.products,
        isLoading: false,
      });
    });
  }

  setModal2(action) {
    this.setState((prevState) => ({ isModal: !prevState.isModal }));
  }

  setCheckoutForm() {
    this.setState({
      isCheckout: true,
      customer_id: "",
      name: "",
      price: "",
      quantity: "",
      // phone_num: "",
      // address: "",
      // zipcode: "",
      // city: "",
      // state: "",
    });
    this.setModal2();
  }

  render() {
    const fields = [
      //   "no",
      // "id",
      "name",
      //   "type",
      //   "description",
      //   "status",
      // "quantity",
      "price",
      // "action",
    ];
    const listOfProduct = [];
    // let number = 0;
    // let statusName = "";
    // let colorName = "";
    // console.log(this.state.products);
    this.state.products.forEach((product) => {
      //   this.state.statuses.forEach((status) => {
      //     if (status.id === product.status_id) {
      //       statusName = status.status;
      //       colorName = status.status_color.color;
      //     }
      //   });
      //   number = number + 1;
      listOfProduct.push({
        //   id: product.id,
        // no: number,
        name: product.name,
        // type: product.type,
        // description: product.desc,
        //   quantity: product.quantity,
        // statusName: statusName,
        // colorName: colorName,
        price: product.price,
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
        <CModal
          alignment="center"
          show={this.props.isModal}
          onClose={this.props.setModal2}
          closeOnBackdrop={false}
        >
          <CModalHeader closeButton>
            <CModalTitle>Shop Cart</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CCard>
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
            </CCard>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={this.props.setModal2}>
              Cancel
            </CButton>
            <CButton
              color="success"
              onClick={this.setCheckoutForm.bind(this)}
            >
              Place Order
            </CButton>
          </CModalFooter>
        </CModal>
        <CheckoutModal
          // state
          name={this.state.name}
          // type={this.state.type}
          // desc={this.state.desc}
          // quantity={this.state.quantity}
          price={this.state.price}
          // zipcode={this.state.zipcode}
          // city={this.state.city}
          // state={this.state.state}
          isModal={this.state.isModal}
          isAddtocart={this.state.isAddtocart}
          // function
          setModal2={this.setModal2}
          // setAddForm={this.setAddForm}
          handleChange={this.handleChange}
          // confirmAdd={this.confirmAdd.bind(this)}
          // updateData={this.updateData.bind(this)}
        />
      </div>
    );
  }
}

export default AddtocartModal;
