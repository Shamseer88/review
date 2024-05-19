import React, { useState } from "react";
import "./Tab.css";
import { BiCameraMovie, BiBookOpen } from "react-icons/bi";
import { FiBook } from "react-icons/fi";

const Tab = () => {
  const [isBooksActive, setIsBooksActive] = useState(true);
  const [isMoviesActive, setIsMoviesActive] = useState(false);

  const setMoviesButtonActive = () => {
    setIsMoviesActive(true);
    setIsBooksActive(false);
  };
  const setBooksButtonActive = () => {
    setIsMoviesActive(false);
    setIsBooksActive(true);
  };

  return (
    <div className="tab-div">
      <button
        onClick={setBooksButtonActive}
        className={isBooksActive && "active-tab-button"}
      >
        <FiBook size={18} /> Books
      </button>
      <button
        onClick={setMoviesButtonActive}
        className={isMoviesActive && "active-tab-button"}
      >
        <BiCameraMovie size={20} />
        Movies
      </button>
    </div>
  );
};

export default Tab;
