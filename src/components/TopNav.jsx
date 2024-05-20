import { useContext } from "react";
import "./TopNav.css";
import { RiHome4Fill } from "react-icons/ri";
import { TabContext } from "../context/TabContext";

const TopNav = ({ handleClick }) => {
  const { activeTab } = useContext(TabContext);
  return (
    <div className="top-nav">
      <div className="nav-left">
        <RiHome4Fill size={30} />
      </div>
      <div className="nav-right">
        <button
          className="card-details-div-btn navbar-btn"
          onClick={handleClick}
        >
          Add a {activeTab === "books" ? "book" : "movie"} review
        </button>
      </div>
    </div>
  );
};

export default TopNav;
