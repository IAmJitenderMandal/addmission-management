import React, { Children } from "react";
import "./layout.styles.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="inner-container">
        {/* all the custom component goes here through children prop */}
        {children}
      </div>
    </div>
  );
}
