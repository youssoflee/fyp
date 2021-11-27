// import axios from 'axios'
import React, { Component } from 'react'
import api from 'src/services/api'

class product extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts() {
    api.get('/api/getAllProduct').then((res) => {console.log(res.data);})
  }

  render() {
    return
    <>
      <h1>Hello World</h1>
    </>
  }
}

export default product
