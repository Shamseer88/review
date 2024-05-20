import React, { useContext, useState } from "react";
import "./Tab.css";
import { BiCameraMovie } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { TabContext } from "../context/TabContext";

const Tab = () => {
  const { activeTab, toggleTab } = useContext(TabContext);
  return (
    <div className="tab-div">
      <button
        onClick={() => toggleTab("books")}
        className={activeTab === "books" ? "active-tab-button" : ""}
      >
        <FiBook size={18} /> Books
      </button>
      <button
        onClick={() => toggleTab("movies")}
        className={activeTab === "movies" ? "active-tab-button" : ""}
      >
        <BiCameraMovie size={20} />
        Movies
      </button>
    </div>
  );
};

export default Tab;
