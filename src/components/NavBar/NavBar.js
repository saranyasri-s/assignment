import React from "react";
import classes from "./NavBar.module.css";
function NavBar() {
  return (
    <div className={classes.Navbar}>
      <div className={classes.navbar_left}></div>
      <div className={classes.navbar_right}>
        <p className={classes.name}>John Wick</p>
        <p className={classes.position}>Developer</p>
      </div>
    </div>
  );
}

export default NavBar;
