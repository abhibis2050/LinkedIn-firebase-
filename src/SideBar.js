import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function SideBar() {
  const recentItem =  (topic)=> {
  return(
    <div className="sidebar__recentItems">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>      
  </div>
  )
  };
 
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Abhisek Biswas</h2>
        <h4>abhisekbiswas@email.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed You</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views On Post</p>
          <p className="sidebar__statNumber">2649</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
       
      </div>
    </div>
  );
}

export default SideBar;
