import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import RightSidebar from "./RightSidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MyBlogs from "../pages/MyBlogs";
import Bookmark from "../pages/Bookmark";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="layout">
        <Sidebar />
        <div className="content-container">
           <Outlet />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
