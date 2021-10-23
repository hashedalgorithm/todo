import React, { Fragment } from "react";
import classes from "../styles/navbaritem.module.css";
type navbarItemProps = {
  icon: string;
  title: string;
};
const NavbarItem = ({ icon, title }: navbarItemProps) => {
  return (
    <Fragment>
      <div className={classes.navbaritem}>
        <i
          className={`fas ${icon.length != 0 ? icon : `fa-calendar-day`} ${
            classes.icon
          }`}
        ></i>
        <p className={classes.navbaritemtitle}>{title}</p>
      </div>
    </Fragment>
  );
};

export default NavbarItem;
