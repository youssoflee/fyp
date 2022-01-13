import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CDataTable,
  CBadge,
  CInputGroup,
  CInput,
  CInputGroupPrepend,
  CInputGroupAppend,
} from "@coreui/react";
import React, { Component } from "react";
//   import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import api from "src/services/api";
//   import swal from "sweetalert2";
import Loader from "src/containers/Loader";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      statuses: [],
      isLoading: false,

      // deleteModal: false,
      // id: "",
      // name: "",
      // type: "",
      // desc: "",
      // quantity: "",
      // price: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    this.disableOnRowClick = this.disableOnRowClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      // console.log(response.data);a
      this.setState({
        products: response.data.products,
        isLoading: false,
      });
    });
  }

  loadStatuses() {
    api.get("/api/getAllProductStatus").then((res) => {
      // console.log(res.data);
      this.setState({
        statuses: res.data.statuses,
      });
    });
  }

  // handleChange(e) {
  //   // console.log(e.target.name, e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // }

  getIndex(id) {
    const { products } = this.state;
    let arrIndex = "";
    products.map((row, index) => {
      if (row.id.toString() === id.toString()) {
        arrIndex = index;
      }
      return row;
    });
    return arrIndex;
  }

  handleInputChange(e) {
    const index = this.getIndex(e.target.id);
    const { products } = this.state;
    let pendingCopy = [...products];
    let rowCopy = pendingCopy[index];
    rowCopy[e.target.name] = e.target.value;
    this.setState({ products: pendingCopy });
  }

  handleIncrease(id, name, value) {
    const index = this.getIndex(id);
    const { products } = this.state;
    let pendingCopy = [...products];
    let rowCopy = pendingCopy[index];
    rowCopy[name] = parseInt(value) + 1;
    this.setState({ products: pendingCopy });
  }

  handleDecrease(id, name, value) {
    let min = 0;
    let newValue = parseInt(value) - 1;
    const index = this.getIndex(id);
    const { products } = this.state;
    let pendingCopy = [...products];
    let rowCopy = pendingCopy[index];
    if (newValue >= min) {
      rowCopy[name] = newValue;
    }
    this.setState({ products: pendingCopy });
  }

  handleOrder(listOrders) {
    const data = {};
    const orderArr = [];
    let total_amount = 0;
    listOrders.forEach((order) => {
      if (order.purchase_quantity !== 0) {
        orderArr.push(order);
        total_amount += order.amount;
      }
    });

    data["order"] = orderArr;
    data["amount"] = total_amount;

    console.log(data);

    api.post("/api/addToCart", data).then((res) => {
      console.log(res.data);
      // this.setState({
      //   statuses: res.data.statuses,
      // });
    });
  }

  // OK
  disableOnRowClick(e) {
    e.stopPropagation();
  }

  render() {
    const fields = [
      "no",
      // "id",
      "name",
      // "type",
      // "description",
      "status",
      "price",
      "purchase_quantity",
      "amount",
      // "action",
    ];
    const listOfProduct = [];
    let number = 0;
    let statusName = "";
    let colorName = "";
    // console.log(this.state.products);
    this.state.products.forEach((product) => {
      this.state.statuses.forEach((status) => {
        if (status.id === product.status.id) {
          statusName = status.status;
          colorName = status.status_color.color;
        }
      });
      number = number + 1;
      listOfProduct.push({
        id: product.id,
        no: number,
        name: product.name,
        // type: product.type,
        // description: product.desc,
        purchase_quantity: product.purchase_quantity,
        statusName: statusName,
        colorName: colorName,
        price: product.price,
        amount: product.purchase_quantity * product.price,
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
              {/* <CCol className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton
                  // variant="outline"
                  color="primary"
                >
                  <CIcon content={freeSet.cilCart} />
                </CButton>
              </CCol> */}
            </CRow>
          </CCardHeader>
          <CCardBody>
            {this.state.isLoading === true && <Loader />}
            {this.state.isLoading === false && (
              <CDataTable
                items={listOfProduct}
                fields={fields}
                bordered
                hover
                scopedSlots={{
                  price: (item) => <td>RM {item.price.toFixed(2)}</td>,
                  amount: (item) => <td>RM {item.amount.toFixed(2)}</td>,
                  status: (item) => (
                    <td>
                      <CBadge color={item.colorName} className="p-1">
                        {item.statusName}
                      </CBadge>
                    </td>
                  ),
                  purchase_quantity: (item) => (
                    <td width="25%">
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CButton
                            onClick={this.handleDecrease.bind(
                              this,
                              item.id,
                              "purchase_quantity",
                              item.purchase_quantity
                            )}
                          >
                            <CIcon content={freeSet.cilMinus} />
                          </CButton>
                        </CInputGroupPrepend>
                        <CInput
                          id={item.id}
                          name={"purchase_quantity"}
                          value={item.purchase_quantity}
                          onChange={this.handleInputChange}
                        />
                        <CInputGroupAppend>
                          <CButton
                            onClick={this.handleIncrease.bind(
                              this,
                              item.id,
                              "purchase_quantity",
                              item.purchase_quantity
                            )}
                          >
                            <CIcon content={freeSet.cilPlus} />
                          </CButton>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </td>
                  ),
                }}
              />
            )}
          </CCardBody>
          <CCardFooter>
            <CButton
              color="success"
              className="float-right"
              onClick={this.handleOrder.bind(this, listOfProduct)}
            >
              Add To Card
            </CButton>
          </CCardFooter>
        </CCard>
      </div>
    );
  }
}

export default Shop;
