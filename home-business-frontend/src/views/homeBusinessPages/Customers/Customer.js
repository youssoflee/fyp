import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
} from "@coreui/react";
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import api from "src/services/api";
import swal from "sweetalert2";
import Loader from "src/containers/Loader";
import ModalAddCustomer from "./ModalCustomer";

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      isLoading: false,
      isModal: false,
      isAddCustomer: true,

      // deleteModal: false,
      customer_id: "",
      user_id: "",
      name: "",
      email: "",
      password: "",
      phone_num: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.disableOnRowClick = this.disableOnRowClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  componentDidMount() {
    this.loadCustomers();
  }

  // OK
  loadCustomers() {
    this.setState({
      isLoading: true,
    });
    api.get("api/getAllCustomer").then((response) => {
      console.log(response.data);
      this.setState({
        customers: response.data.customers,
        isLoading: false,
      });
    });
  }

  // OK
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

  // OK
  resetForm() {
    this.setState({
      name: "",
      email: "",
      password: "",
      phone_num: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
    });
  }

  // OK
  setModal(action) {
    this.setState((prevState) => ({ isModal: !prevState.isModal }));
  }

  setAddForm() {
    this.setState({
      isAddCustomer: true,
      customer_id: "",
      name: "",
      email: "",
      password: "" ,
      phone_num: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
    });
    this.setModal();
  }

  setEditForm(item) {
    console.log(item);
    this.setState({
      isAddCustomer: false,
      customer_id: item.customer_id,
      user_id: item.user_id,
      name: item.name,
      email: item.email,
      password: item.password,
      phone_num: item.phone_num,
      address: item.address,
      zipcode: item.zipcode,
      city: item.city,
      state: item.state,
    });
    this.setModal();
  }

  // OK
  confirmAdd() {
    this.setModal();
    this.resetForm();
    // swal.fire({
    //   title: "Loading...",
    //   showConfirmButton: false,
    // });
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone_num: this.state.phone_num,
      address: this.state.address,
      zipcode: this.state.zipcode,
      city: this.state.city,
      state: this.state.state,
    };
    api
      .post("/api/addCustomer", data)
      .then((response) => {
        // console.log(response);
        swal
          .fire({
            title: "Customer Added!",
            icon: "success",
            showConfirmButton: false,
          })
          .then(() => {
            this.resetForm();
            this.loadCustomers();
            this.setState({
              isLoading: !this.state.isLoading,
            });
          });
        // console.log("data apa dipulangkan", response.data.id);
        // window.location.pathname =
        //   "/admin/users/user-details/" + response.data.id;
      })
      .catch((error) => {
        console.log(error.response.data);
        swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error",
        });
      });
  }

  updateData() {
    console.log(this.state);
    const data = {
      user_id: this.state.user_id,
      name: this.state.name,
      email: this.state.email,
      // password: this.state.password,
      phone_num: this.state.phone_num,
      address: this.state.address,
      zipcode: this.state.zipcode,
      city: this.state.city,
      state: this.state.state,
    };
    console.log(this.state.customer_id, data);
    api
      .put("/api/updateCustomer/" + this.state.customer_id, data)
      .then(() => {
        // this.setState({
        //   isLoading: !this.state.isLoading,
        // });
        this.setModal();
        swal
          .fire({
            title: "Updated!",
            text: "User updated successfully",
            icon: "success",
            button: "OK!",
          })
          .then(() => {
            this.resetForm();
            this.loadCustomers();
            // this.setState({
            //   isLoading: !this.state.isLoading,
            // });
          });
      })
      .catch((error) => {
        swal.fire({
          title: "Error",
          text: error,
          icon: "error",
          button: "OK!",
        });
      });
  }

  // OK
  delCustomer = async (e, customer_id) => {
    // const thidClickedFunda = e.currentTarget;
    // thidClickedFunda.innerText = "Deleting";

    const res = await api.delete(`/api/delCustomer/${customer_id}`);
    if (res.data.status === 200) {
      swal.fire({
        title: "Deleted!",
        text: res.data.message,
        icon: "success",
        // button: "OK!",
      });
      // thidClickedFunda.closest("tr").remove();
      // console.log(res.data.message);
    }
    this.loadCustomers();
  };

  render() {
    // const { isLoading, modal, addCustomer } = this.state;
    const fields = [
      "no",
      // "customer_id",
      "name",
      "email",
      // "password",
      "phone_num",
      "address",
      // "zipcode",
      // "city",
      // "state",
      "action",
    ];
    const listOfCustomer = [];
    let number = 0;
    this.state.customers.forEach((customer) => {
      number = number + 1;
      listOfCustomer.push({
        customer_id: customer.id,
        no: number,
        user_id: customer.user_id,
        name: customer.user.name,
        email: customer.user.email,
        // password: customer.user.password,
        phone_num: customer.phone_num,
        address: customer.address,
        zipcode: customer.zipcode,
        city: customer.city,
        state: customer.state,
        // RoleID: user.customers_role.id,
        // Role: user.customers_role.role,
        // RegisteredDate: dateFormat(user.created_at, "dd/mm/yyyy"),
      });
    });

    return (
      <div>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol sm={8}>
                <h3>List of Customers</h3>{" "}
              </CCol>
              <CCol className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton
                  variant="outline"
                  color="dark"
                  onClick={this.setAddForm.bind(this)}
                >
                  <CIcon content={freeSet.cilPlus} />
                  Customer
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            {this.state.isLoading === true && <Loader />}
            {this.state.isLoading === false && (
              <CDataTable
                tableFilter
                items={listOfCustomer}
                fields={fields}
                bordered
                itemsPerPage={10}
                pagination
                hover
                clickableRows
                onRowClick={(item) => this.detailPage(item.customer_id)}
                scopedSlots={{
                  action: (item) => (
                    <td onClick={this.disableOnRowClick}>
                      <CButton
                        color="dark"
                        variant="outline"
                        onClick={this.setEditForm.bind(this, item)}
                      >
                        <CIcon name="cil-pencil" />
                      </CButton>
                      &nbsp;
                      <CButton
                        color="danger"
                        variant="outline"
                        onClick={(e) => this.delCustomer(e, item.customer_id)}
                      >
                        <CIcon name="cil-trash" />
                      </CButton>
                    </td>
                  ),
                }}
              />
            )}
          </CCardBody>
        </CCard>
        <ModalAddCustomer
          // state
          name={this.state.name}
          email={this.state.email}
          // password={this.state.password}
          phone_num={this.state.phone_num}
          address={this.state.address}
          zipcode={this.state.zipcode}
          city={this.state.city}
          state={this.state.state}
          isModal={this.state.isModal}
          isAddCustomer={this.state.isAddCustomer}
          // function
          setModal={this.setModal}
          // setAddForm={this.setAddForm}
          handleChange={this.handleChange}
          confirmAdd={this.confirmAdd.bind(this)}
          updateData={this.updateData.bind(this)}
        />
      </div>
    );
  }
}

export default Customer;
