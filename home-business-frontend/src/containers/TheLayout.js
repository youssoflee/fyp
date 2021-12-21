import React from 'react'
import { Redirect } from "react-router-dom";
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  if(localStorage.getItem("token") == null){
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { reason: "You are not logged in. Please login first." },
        }}
      />
    )
  };
  
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
