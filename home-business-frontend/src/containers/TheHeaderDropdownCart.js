import React from "react";
import { CBadge, CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

const TheHeaderDropdownCart = () => {
  const itemsCount = 2;
  return (
    <div>
      <CButton onClick={(event) => (window.location.href = "/shopping-cart")}>
        <CIcon content={freeSet.cilCart} />
        <CBadge shape="pill" color="info">
          {itemsCount}
        </CBadge>
      </CButton>
    </div>
  );
};

export default TheHeaderDropdownCart;
