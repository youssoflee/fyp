import { React, Component } from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import api from "../services/api";

class TheHeaderDropdown extends Component {
  handleLogOut() {
    console.log(localStorage);
    api.post("/api/logout").then((res) => {
      localStorage.clear();
      window.location.reload();
    });
  }
  render() {
    return (
      <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
        <CDropdownToggle className="c-header-nav-link">
          <CIcon name="cil-user" className="mfe-2" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          {/* <CDropdownItem to="/admin/change-password">
            <CIcon name="cil-lock-locked" className="mfe-2" />
            Change Password
          </CDropdownItem> */}
          <CDropdownItem onClick={this.handleLogOut.bind(this)}>
            <CIcon content={freeSet.cilAccountLogout} customClasses="c-sidebar-nav-icon"  className="mfe-2" />
            Log Out
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }
}

export default TheHeaderDropdown;
