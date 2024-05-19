import "./TopNav.css";
import { RiHome4Fill } from "react-icons/ri";

const TopNav = ({ handleClick }) => {
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
          Add a book review
        </button>
      </div>
    </div>
  );
};

export default TopNav;
