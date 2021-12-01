import React from "react";
import { CSpinner } from "@coreui/react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <CSpinner size="md" color="info" variant="grow" />
    </div>
  );
}

export default Loader;
