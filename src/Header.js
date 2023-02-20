import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SuppervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCentreIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="" />
        <div className="header__search">
          {/* Search Icon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SuppervisorAccountIcon} title="My Network"/>
      <HeaderOption Icon={BusinessCentreIcon} title="Jobs"/>
      <HeaderOption Icon={ChatIcon} title="Messaging"/>
      <HeaderOption Icon={NotificationIcon} title="Notification"/>
      <HeaderOption avatar="https://www.svgrepo.com/show/446517/avatar.svg"/>
      </div>
    </div>
  );
}

export default Header;
