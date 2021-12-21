import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isRefresh: localStorage.getItem("refreshAfterLogin") };
  }
  componentDidMount() {
    localStorage.getItem("token");
    this.loadPage();
  }

  loadPage() {
    if (this.state.isRefresh === "false") {
      window.location.reload();
      localStorage.setItem("refreshAfterLogin", true);
    }
  }
  render() {
    return <div></div>;
  }
}

export default Dashboard;
