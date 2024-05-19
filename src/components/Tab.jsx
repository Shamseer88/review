import React, { useState } from "react";
import "./Tab.css";
import { BiCameraMovie } from "react-icons/bi";
import { FiBook } from "react-icons/fi";

const Tab = ({ activeTab, onTabChange }) => {
  return (
    <div className="tab-div">
      <button
        onClick={() => onTabChange("books")}
        className={activeTab === "books" ? "active-tab-button" : ""}
      >
        <FiBook size={18} /> Books
      </button>
      <button
        onClick={() => onTabChange("movies")}
        className={activeTab === "movies" ? "active-tab-button" : ""}
      >
        <BiCameraMovie size={20} />
        Movies
      </button>
    </div>
  );
};

export default Tab;
