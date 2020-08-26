import React from "react";
import "./styles/Header.css";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Menu />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header_input">
        <input placeholder="Search" type="text" />
        <Search className="header_inputButtom" />
      </div>
      <div className="header_icons">
        <VideoCall className="header_icon" />
        <Apps className="header_icon" />
        <Notifications className="header_icon" />
        <Avatar
          className="avatar"
          alt="Francisco Martin"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu9rlIUepeoEa7l8EEjfOqKF3qpT8chxWskUeLcs=s32-c-mo"
        />
      </div>
    </div>
  );
}

export default Header;
