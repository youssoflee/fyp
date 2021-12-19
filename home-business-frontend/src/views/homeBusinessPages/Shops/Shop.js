import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CDataTable,
    CBadge,
  } from "@coreui/react";
  import React, { Component } from "react";
//   import { Link } from "react-router-dom";
  import CIcon from "@coreui/icons-react";
  import { freeSet } from "@coreui/icons";
  import api from "src/services/api";
//   import swal from "sweetalert2";
  import Loader from "src/containers/Loader";
//   import ModalProduct from "./ModalProduct";
  
  class Product extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        statuses: [],
        isLoading: false,
        isModal: false,
        isAddProduct: true,
  
        // deleteModal: false,
        id: "",
        name: "",
        type: "",
        desc: "",
        quantity: "",
        price: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.disableOnRowClick = this.disableOnRowClick.bind(this);
    //   this.setModal = this.setModal.bind(this);
    }
    componentDidMount() {
      this.loadProducts();
      this.loadStatuses();
    }
  
    // OK
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

    loadStatuses() {
      api.get("/api/getAllProductStatus").then((res) => {
        console.log(res.data);
        this.setState({
          statuses: res.data.statuses,
        });
      });
    }
  
    handleChange(e) {
      // console.log(e.target.name, e.target.value);
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  
    // OK
    disableOnRowClick(e) {
      e.stopPropagation();
    }
  
    // resetForm() {
    //   this.setState({
    //     name: "",
    //     type: "",
    //     desc: "",
    //     quantity: "",
    //     price: "",
    //   });
    // }
  
    // setModal(action) {
    //   this.setState((prevState) => ({ isModal: !prevState.isModal }));
    // }
  
    // setAddForm() {
    //   this.setState({
    //     isAddProduct: true,
    //   });
    //   this.setModal();
    // }
  
    // setEditForm(item) {
    //   // console.log(item);
    //   this.setState({
    //     isAddProduct: false,
    //     id: item.id,
    //     name: item.name,
    //     type: item.type,
    //     desc: item.desc,
    //     quantity: item.quantity,
    //     price: item.price,
    //   });
    //   this.setModal();
    // }
  
    // OK
    // confirmAdd() {
    //   this.setModal();
    //   // swal.fire({
    //   //   title: "Loading...",
    //   //   showConfirmButton: false,
    //   // });
    //   const data = {
    //     name: this.state.name,
    //     type: this.state.type,
    //     desc: this.state.desc,
    //     quantity: this.state.quantity,
    //     price: this.state.price,
    //     // zipcode: this.state.zipcode,
    //     // city: this.state.city,
    //     // state: this.state.state,
    //   };
    //   api
    //     .post("/api/addProduct", data)
    //     .then((response) => {
    //       // console.log(response);
    //       swal
    //         .fire({
    //           title: "Product Added!",
    //           icon: "success",
    //           showConfirmButton: false,
    //         })
    //         .then(() => {
    //           this.resetForm();
    //           this.loadProducts();
    //           this.setState({
    //             isLoading: !this.state.isLoading,
    //           });
    //         });
    //       // console.log("data apa dipulangkan", response.data.id);
    //       // window.location.pathname =
    //       //   "/admin/users/user-details/" + response.data.id;
    //     })
    //     .catch((error) => {
    //       // console.log(error.response.data);
    //       swal.fire({
    //         title: "Error",
    //         text: error.response.data,
    //         icon: "error",
    //       });
    //     });
    // }
  
    // updateData() {
    //   // console.log(this.state.name);
    //   const data = {
    //     name: this.state.name,
    //     type: this.state.type,
    //     desc: this.state.desc,
    //     quantity: this.state.quantity,
    //     price: this.state.price,
    //   };
    //   api
    //     .put("/api/updateProduct/" + this.state.id, data)
    //     .then(() => {
    //       // this.setState({
    //       //   isLoading: !this.state.isLoading,
    //       // });
    //       this.setModal();
    //       swal
    //         .fire({
    //           title: "Updated!",
    //           text: "Product updated successfully",
    //           icon: "success",
    //           button: "OK!",
    //         })
    //         .then(() => {
    //           this.resetForm();
    //           this.loadProducts();
    //           // this.setState({
    //           //   isLoading: !this.state.isLoading,
    //           // });
    //         });
    //     })
    //     .catch((error) => {
    //       swal.fire({
    //         title: "Error",
    //         text: error,
    //         icon: "error",
    //         button: "OK!",
    //       });
    //     });
    // }
  
    // delProduct = async (e, id) => {
    //   // const thidClickedFunda = e.currentTarget;
    //   // thidClickedFunda.innerText = "Deleting";
  
    //   const res = await api.delete(`/api/delProduct/${id}`);
    //   if (res.data.status === 200) {
    //     swal.fire({
    //       title: "Deleted!",
    //       text: res.data.message,
    //       icon: "success",
    //       // button: "OK!",
    //     });
    //     // thidClickedFunda.closest("tr").remove();
    //     // console.log(res.data.message);
    //   }
    //   this.loadProducts();
    // };
  
    render() {
      console.log(this.state.statuses);
      const fields = [
        "no",
        // "id",
        "name",
        "type",
        "description",
        "status",
        // "quantity",
        "price",
        // "action",
      ];
      const listOfProduct = [];
      let number = 0;
      let statusName = "";
      let colorName = "";
      // console.log(this.state.products);
      this.state.products.forEach((product) => {
        this.state.statuses.forEach(status => {
          if (status.id === product.status_id) {
            statusName = status.status;
            colorName = status.status_color.color;
          }
        });
        number = number + 1;
        listOfProduct.push({
        //   id: product.id,
          no: number,
          name: product.name,
          type: product.type,
          description: product.desc,
        //   quantity: product.quantity,
          statusName: statusName,
          colorName: colorName,
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
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol sm={8}>
                  <h3>List of Products</h3>{" "}
                </CCol>
                <CCol className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CButton
                    variant="outline"
                    color="dark"
                    // onClick={this.setPaymentForm.bind(this)}
                  >
                    <CIcon content={freeSet.cilPlus} />
                    Purchase
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
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
                  onRowClick={(item) => this.detailPage(item.Id)}
                  scopedSlots={{
                    status:(item) => (
                      <td>
                        <CBadge color={item.colorName} className="p-1">
                          {item.statusName}
                        </CBadge>
                      </td>
                    )
                //     action: (item) => (
                //       <td onClick={this.disableOnRowClick}>
                //         <CButton
                //           color="dark"
                //           variant="outline"
                //           onClick={this.setEditForm.bind(this, item)}
                //         >
                //           <CIcon name="cil-pencil" />
                //         </CButton>
                //         &nbsp;
                //         <CButton
                //           color="danger"
                //           variant="outline"
                //           onClick={(e) => this.delProduct(e, item.id)}
                //         >
                //           <CIcon name="cil-trash" />
                //         </CButton>
                //       </td>
                //     ),
                  }}
                />
              )}
            </CCardBody>
          </CCard>
          {/* <ModalProduct
            // state
            name={this.state.name}
            type={this.state.type}
            desc={this.state.desc}
            quantity={this.state.quantity}
            price={this.state.price}
            // zipcode={this.state.zipcode}
            // city={this.state.city}
            // state={this.state.state}
            isModal={this.state.isModal}
            isAddProduct={this.state.isAddProduct}
            // function
            setModal={this.setModal}
            // setAddForm={this.setAddForm}
            handleChange={this.handleChange}
            confirmAdd={this.confirmAdd.bind(this)}
            updateData={this.updateData.bind(this)}
          /> */}
        </div>
      );
    }
  }
  
  export default Product;
  