import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faplane } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Header_left}>
        <div className={classes.planeLogo}>
          <i class="icon-plane"></i>
        </div>
        <div className={classes.Header_left_right}>
          <p className={classes.para}>Analytics Dashboard</p>
          <p className={classes.description}>
            Dashboard is an online report where your website data from ecommerce
            to web analytics is displayed
          </p>
        </div>
      </div>
      <div className={classes.Header_right}>
        <div className={classes.Header_right_star}>
          <i class="fas fa-star" style={{ color: "white" }}></i>
        </div>
        <button className={classes.Header_right_button}> + create new</button>
      </div>
    </div>
  );
}

export default Header;
