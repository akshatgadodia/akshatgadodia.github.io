import React, { useState } from "react";
import { Button, Drawer } from "antd";
import "./Stylesheets/SideDrawer.css";
import { Link } from "react-scroll";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => {
          showDrawer();
        }}
        className="side-drawer-button"
        aria-label="Open Drawer"
      >
        <div className="side-drawer-button-container-div-line1" />
        <div className="side-drawer-button-container-div-line2" />
        <div className="side-drawer-button-container-div-line1" />
      </button>

      <Drawer
        title={
          <a href="/">
            <img
              src="/images/drunken-bytes-logo-complete.png"
              alt=""
              className="sideDrawerLogo"
            />
          </a>
        }
        className="side-drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="side-drawer-main-div">
          <div className="drawer-links">
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Test 1
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;
