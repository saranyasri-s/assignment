import React from "react";
import classes from "./Header.module.css";
import plane from "../../assets/plane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlane } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Header_left}>
        <div className={classes.planeLogo}>
          <FontAwesomeIcon
            icon={faPlane}
            style={{ transform: "rotate(300deg)" ,color:"skyblue"}}
          />
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
          <FontAwesomeIcon icon={faStar} />
        </div>
        <button className={classes.Header_right_button}> + create new</button>
      </div>
    </div>
  );
}

export default Header;
